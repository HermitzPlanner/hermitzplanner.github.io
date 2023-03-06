
class selectAll extends HTMLElement{
    constructor(){
        super();
        this.nbatch;
        this.summing
    }

    static get observedAttributes(){
        return ['nbatch', 'summing'];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){
        switch (nameAtr){
            case "nbatch":
                this.nbatch = newValue;
            break;
            case "summing":
                this.summing = newValue;
            break;

        }
    }

    connectedCallback(){
        this.innerHTML = `
        <input type="checkbox" id="cbox_batch${this.nbatch}" onClick="

        checkboxes = document.getElementsByName('batch${this.nbatch}');
        for(var i=0, n=checkboxes.length;i<n;i++) {
            checkboxes[i].checked = checked;
        }

        const rewardValue = document.getElementById('menu-reward-batch${this.nbatch}').innerHTML
        const card = document.getElementsByClassName('label batch${this.nbatch}')
        const selected = document.getElementsByClassName('operator-selected batch${this.nbatch}')
        const remainingValue = document.getElementById('menu-remaining-batch${this.nbatch}').innerHTML
        const costValue = document.getElementById('skin-cost${this.nbatch}').innerHTML
        
        if (cbox_batch${this.nbatch}.checked == true){

            document.getElementById('skin-cost${this.nbatch}').innerHTML = ${this.summing};
            document.getElementById('menu-skincost-batch${this.nbatch}').innerHTML = (parseFloat(${this.summing}) * -1);
            document.getElementById('menu-remaining-batch${this.nbatch}').innerHTML = parseFloat(remainingValue) - parseFloat(costValue)
    
            for (i = 0; i < card.length; i++) {
                card[i].style.outlineColor = 'gold'
                card[i].style.transition = 'var(--transition)'
            }

            for (i = 0; i < selected.length; i++) {
                selected[i].style.backgroundColor = 'gold'
                selected[i].style.opacity = '1';
                selected[i].style.transition = 'var(--transition)';
            }

            const allChecker = document.getElementById('select-all-button${this.nbatch}')
            allChecker.style.outlineColor = 'gold';
 
        } else {
            document.getElementById('skin-cost${this.nbatch}').innerHTML = 0
            document.getElementById('menu-skincost-batch${this.nbatch}').innerHTML = 0;
            document.getElementById('menu-remaining-batch${this.nbatch}').innerHTML = 0 + parseFloat(rewardValue);

            for (i = 0; i < card.length; i++) {
                card[i].style.outlineColor = 'var(--card-outline)'
                card[i].style.transition = 'var(--transition)'
            }

            for (i = 0; i < selected.length; i++) {
                selected[i].style.backgroundColor = 'var(--card-outline)'
                selected[i].style.opacity = '0';
                selected[i].style.transition = 'var(--transition)';
            }
            const selectAllCheck = document.getElementById('select-all-button${this.nbatch}')
            selectAllCheck.style.outlineColor = 'var(--card-outline)';
        }
        
        doThing();
        
        if (document.getElementById('menu-remaining-batch${this.nbatch}').innerHTML < 0) {
            alert('Not enough primes, deselect skins')
        }

        ">

        <label for="cbox_batch${this.nbatch}">
        
            <div class="select-all-button" id="select-all-button${this.nbatch}">
                <img src="svg/check3.svg" alt="">
                <div class="">Select all</div>
            </div>

        </label>
`
    }
}
window.customElements.define("select-all", selectAll);
