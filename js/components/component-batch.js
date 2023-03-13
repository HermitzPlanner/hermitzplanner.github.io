function menuInfo(){
    
}

class batchComponent extends HTMLElement{
    constructor(){
        super();
        this.nbatch;
        this.summing;
        this.eventimg;
        this.reward;
        this.eventtitle;
        this.runtype;
        this.eventcode;
    }

    static get observedAttributes(){
        return ['nbatch', 'summing', 'eventimg', 'reward', 'eventtitle', 'runtype', 'eventcode'];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){
        switch (nameAtr){
            case "nbatch":
                this.nbatch = newValue;
            break;
            case "summing":
                this.summing = newValue;
            break;
            case "eventimg":
                this.eventimg = newValue;
            break;
            case "reward":
                this.reward = newValue;
            break;
            case "eventtitle":
                this.eventtitle = newValue;
            break;
            case "runtype":
                this.runtype = newValue;
            break;
            case "eventcode":
                this.eventcode = newValue;
            break;

        }
    }


    connectedCallback(){
        this.innerHTML = `
        <div class="menu-row" id="row${this.nbatch}" onclick="window.location.href = '#batch${this.nbatch}'; selectOnlyThis(this.id);">
            <a class="link" id="${this.nbatch}" onclick="
            const huevoLoad = document.querySelector('.slider-container')
            huevoLoad.style.opacity = '1';
            huevoLoad.style.transition = 'var(--transition)';
            

            ">
            <div class="menu-batch" id="menu-batch-${this.nbatch}">
                    <div class="batch-title">${this.eventtitle} <span style="color: #00ff00;">${this.runtype}</span></div>
                    <div class="batch-img-container">
                        <img src="https://raw.githubusercontent.com/HermitzPlanner/planner-images/main/events/${this.eventcode}.jpg" alt="${this.eventcode}">
                    </div>
                </div> 
            </a>
            
            <a  id="menu-nums-${this.nbatch}" class="menu-numbers" onmouseenter="
            
            const menuBatch = document.getElementById('menu-nums-${this.nbatch}')

            menuBatch.style.transition = 'var(--transition)'

            const menuNums = document.getElementById('menu-batch-${this.nbatch}')
            menuNums.style.transition = 'var(--transition)'

            const menuRows = document.getElementById('row${this.nbatch}')

            
            ">

                <div class="menu-element">
                    <div class="menu-svg" onmouseenter="menuInfo();">
                        <img src="svg/puregem.png" class="" alt="">
                        
                    </div>

                    <div class="numbers" style="display: flex;">
                    
                        <div id="menu-reward-initial-batch${this.nbatch}" class="menu-reward price">0</div>
                    </div>
                </div>

                <div class="menu-element">
                    <div class="menu-svg" onmouseenter="menuInfo();">
                        <img src="svg/badge.png" style="filter: invert()" class="" alt="">
                    </div>

                    <div class="numbers" style="display: flex;">
                        
                        <div id="menu-reward-batch${this.nbatch}" class="menu-reward price">+${this.reward}</div>
                    </div>
                </div>

                <div class="menu-element">
                    <div class="menu-svg">
                        <img src="svg/price-tag.png" alt="">
                    </div>
                    <div class="numbers" style="display: flex; flex-flow: row;">
                        <div style="display: flex; gap: .125rem;">
                            <div class="price menu-reward" id="menu-skincost-batch${this.nbatch}">0</div>
                        </div>
                    </div>
                </div>

                <div style="border-bottom: 1px solid rgba(255, 255, 255, 0.25); width: 50%; margin: 0 50%;"></div>

                <div class="menu-element">
                    <div class="menu-svg">
                    </div>
                    <div class="numbers">
                        <div id="menu-remaining-batch${this.nbatch}" onchange="
                        alert('sugma');" class="remaining menu-reward">0</div>
                    </div>
                </div>
            </a>
        </div>



        `
    }
}
window.customElements.define("batch-component", batchComponent);

function doThing(){
    remainingDivs = document.getElementsByClassName('remaining')
    for(var i=0, n=remainingDivs.length;i<n;i++) {
        const remaining = document.getElementById(`menu-reward-batch${i+1}`).innerHTML
        const initialValue = document.getElementById('menu-initialprime').value;
        const skinCost = document.getElementById(`menu-skincost-batch${i+1}`).innerHTML
        
        if (i==0) {
            document.getElementById(`menu-reward-initial-batch${i+1}`).innerHTML = parseFloat(initialValue)
            document.getElementById(`menu-remaining-batch${i+1}`).innerHTML = parseFloat(remaining) + parseFloat(initialValue) + parseFloat(skinCost);
            
        } else {
            const prevValue = document.getElementById(`menu-remaining-batch${i}`).innerHTML
            document.getElementById(`menu-reward-initial-batch${i+1}`).innerHTML = parseFloat(prevValue)
            document.getElementById(`menu-remaining-batch${i+1}`).innerHTML = parseFloat(remaining) + parseFloat(prevValue) + parseFloat(skinCost);
        
        }

        if (document.getElementById(`menu-remaining-batch${i+1}`).innerHTML < 0) {
            document.getElementById(`menu-remaining-batch${i+1}`).style.color = 'red'
        } else {
            document.getElementById(`menu-remaining-batch${i+1}`).style.color = 'white'
        }

    }

}
doThing();

document.getElementById('menu-initialprime').addEventListener('input', doThing);
