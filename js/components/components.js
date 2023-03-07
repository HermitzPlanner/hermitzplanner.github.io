let selectedSkin = []
let selectedCard = []
let selectedCardCheck = []
function arrayToLocal(){
    localStorage.setItem("storageSkins", JSON.stringify(selectedSkin))
    localStorage.setItem("storageCards", JSON.stringify(selectedCard))
    localStorage.setItem("storageCardsCheck", JSON.stringify(selectedCardCheck))
}

class cardComponent extends HTMLElement{

    constructor(){
        super();
        this.nbatch;
        this.userid;
        this.price;
        this.english;
        this.fullenglish;
        this.portrait;
        this.obtain;
        this.run;
        this.fullart;
        this.brand;
        this.currency;
        this.tokens;
        this.icon;
        this.release;
        this.releaseglobal;
        this.skinnameenglish;
        this.artist;
        this.code;
        this.codechar;
    }   

    static get observedAttributes(){
        return ['nbatch', 'userid', 'price', 'english', 'portrait', 'obtain', 'run', 'fullart', 'brand', 'currency', 'tokens', 'icon', 'artist', 'release', 'releaseglobal', 'skinnameenglish', 'fullenglish', 'code', 'codechar'];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){
        switch (nameAtr){
            case "nbatch":
                this.nbatch = newValue;
            break;
            case "userid":
                this.userid = newValue;
            break;
            case "price":
                this.price = newValue;
            break;
            case "english":
                this.english = newValue;
            break;
            case "portrait":
                this.portrait = newValue;
            break;
            case "obtain":
                this.obtain = newValue;
            break;
            case "run":
                this.run = newValue;
            break;
            case "fullart":
                this.fullart = newValue;
            break;
            case "brand":
                this.brand = newValue;
            break;
            case "currency":
                this.currency = newValue;
            break;
            case "tokens":
                this.tokens = newValue;
            break;
            case "icon":
                this.icon = newValue;
            break;
            case "artist":
                this.artist = newValue;
            break;
            case "release":
                this.release = newValue;
            break;
            case "releaseglobal":
                this.releaseglobal = newValue;
            break;
            case "skinnameenglish":
                this.skinnameenglish = newValue;
            break;
            case "fullenglish":
                this.fullenglish = newValue;
            break;
            case "code":
                this.code = newValue;
            break;
            case "codechar":
                this.codechar = newValue;
            break;


        }
    }

                
   
    connectedCallback(){
        this.innerHTML = `
        
        <div class="card ${this.userid}" id="card_${this.userid}_batch${this.nbatch}" 
        
        onmouseenter="
            
            const card = document.querySelector('#card_${this.userid}_batch${this.nbatch} label');
            const card2 = document.querySelector('#operator-selected__${this.userid}_batch${this.nbatch}');
            const cardprice = document.querySelector('#card-price__${this.userid}_batch${this.nbatch}');
            const skininfo = document.querySelector('#skin-info__${this.userid}_batch${this.nbatch}');
            cardPriceText = document.querySelector('#card-cost__${this.userid}_batch${this.nbatch}')
            cardPriceImg = document.querySelector('#cost-image__${this.userid}_batch${this.nbatch}')

            cardprice.style.opacity = '1';
            cardprice.style.filter = 'blur(0)';
            
            
            if (${this.price} < 15 || ${this.price} > 24) {
                cardPriceImg.style.width = '0%'
                cardPriceText.style.width = '100%'
                cardPriceText.style.justifyContent = 'center';
                cardPriceText.innerHTML = 'Free'
                cardPriceText.style.fontSize = '2.25vh'
                cardPriceText.style.fontFamily = 'abel';
                cardPriceText.style.color = 'white';
            } 

            cardprice.style.transition = 'var(--transition)';
            skininfo.style.left = '0%';
            skininfo.style.transition = 'var(--transition)';

            if (cbox_${this.userid}_batch${this.nbatch}.checked == true) {
                card.style.outlineColor = 'gold';
                card2.style.backgroundColor = 'gold';
                card2.style.opacity = 1;
            } else {
                card.style.outlineColor = 'var(--card-outline-hover)';
                card2.style.backgroundColor = 'var(--card-outline-hover)';
                card2.style.opacity = 1;
            }


            card.style.transition = 'var(--transition)';
            card2.style.transition = 'var(--transition)';" 

        onmouseleave="
            
            const card = document.querySelector('#card_${this.userid}_batch${this.nbatch} label');
            const card2 = document.querySelector('#operator-selected__${this.userid}_batch${this.nbatch}');
            const cardprice = document.querySelector('#card-price__${this.userid}_batch${this.nbatch}');
            cardPriceText = document.querySelector('card-cost__${this.userid}_batch${this.nbatch}')
            const skininfo = document.querySelector('#skin-info__${this.userid}_batch${this.nbatch}');

            cardprice.style.opacity = '0';
            cardprice.style.filter = 'blur(3px)';
            

            skininfo.style.left = '0';
            skininfo.style.transition = 'var(--transition)';

            if (cbox_${this.userid}_batch${this.nbatch}.checked == true) {
                card.style.outlineColor = 'gold';
            } else {
                card.style.outlineColor = 'var(--card-outline)';
                card2.style.backgroundColor = 'var(--card-outline-hover)';
                card2.style.opacity = 0;
            }
            card.style.transition = 'var(--transition)';
            card2.style.transition = 'var(--transition)';">

        <input name="batch${this.nbatch}" class="cbox-${this.userid}" type="checkbox" id="cbox_${this.userid}_batch${this.nbatch}" 
        
        onchange="

            const divValue = document.getElementById('skin-cost${this.nbatch}').innerHTML
            const menuValue = document.getElementById('menu-skincost-batch${this.nbatch}').innerHTML
            const rewardValue = document.getElementById('menu-reward-batch${this.nbatch}').innerHTML
            const remainingValue = document.getElementById('menu-remaining-batch${this.nbatch}').innerHTML
            const initialValue = document.getElementById('menu-initialprime').value;

            const card = document.querySelector('#card_${this.userid}_batch${this.nbatch} label');
            const card2 = document.querySelector('#operator-selected__${this.userid}_batch${this.nbatch}');
            const cardcbox = document.querySelector('#cbox_${this.userid}_batch${this.nbatch}');

            const thisSkinSelectLabel = document.getElementsByClassName('label_${this.userid}')
            const thisSkinSelect = document.getElementsByClassName('${this.userid}')
            const zoomButton = document.getElementsByClassName('display-art__${this.userid}')

            
            if (cbox_${this.userid}_batch${this.nbatch}.checked == true) {
                         
                selectedSkin.push('cbox_${this.userid}_batch${this.nbatch}')
                selectedCard.push('card_${this.userid}_batch${this.nbatch} label')
                selectedCardCheck.push('operator-selected__${this.userid}_batch${this.nbatch}')
                arrayToLocal();
                
                for(var i=0, n=thisSkinSelectLabel.length;i<n;i++) {
                    thisSkinSelectLabel[i].style.outlineColor = '#00ff00';
                }

                for(var i=0, n=thisSkinSelect.length;i<n;i++) {
                    thisSkinSelect[i].style.pointerEvents = 'none';
                }

                for(var i=0, n=zoomButton.length;i<n;i++) {
                    zoomButton[i].style.opacity = '0';
                }

                document.getElementById('display-art__${this.userid}_batch${this.nbatch}').style.opacity = '1';

                const nextCardNoCheck = document.getElementById('card_${this.userid}_batch${this.nbatch}')
                nextCardNoCheck.style.pointerEvents = '';

                document.getElementById('skin-cost${this.nbatch}').innerHTML = parseFloat(divValue) + parseFloat(${this.price})
                document.getElementById('menu-skincost-batch${this.nbatch}').innerHTML = parseFloat(menuValue) + (parseFloat(${this.price}) * -1)
                document.getElementById('menu-remaining-batch${this.nbatch}').innerHTML = parseFloat(remainingValue) - parseFloat(${this.price})
                
                document.getElementById('cbox_batch${this.nbatch}').checked = false;
                if (document.getElementById('menu-remaining-batch${this.nbatch}').innerHTML < 0) {
                    
                }

                card.style.outlineColor = 'gold';
                card.style.transition = 'var(--transition)';

                card2.style.backgroundColor = 'gold';
                card2.style.transition = 'var(--transition)';
                card2.style.opacity = 1;

            } else {

                var item = 'cbox_${this.userid}_batch${this.nbatch}'
                var index = selectedSkin.indexOf(item);
                selectedSkin.splice(index, 1);

                var itemSelected = 'card_${this.userid}_batch${this.nbatch} label'
                var indexSelected = selectedCard.indexOf(itemSelected);
                selectedSkin.splice(index, 1);

                var itemCheck = 'operator-selected__${this.userid}_batch${this.nbatch}'
                var indexCheck = selectedCardCheck.indexOf(itemCheck);
                selectedSkin.splice(index, 1);

                arrayToLocal();

                for(var i=0, n=thisSkinSelectLabel.length;i<n;i++) {
                    thisSkinSelectLabel[i].style.outlineColor = '';
                }

                for(var i=0, n=thisSkinSelect.length;i<n;i++) {
                    thisSkinSelect[i].style.pointerEvents = '';
                }

                for(var i=0, n=zoomButton.length;i<n;i++) {
                    zoomButton[i].style.opacity = '1';
                }

                document.getElementById('skin-cost${this.nbatch}').innerHTML = parseFloat(divValue) - parseFloat(${this.price})
                document.getElementById('menu-skincost-batch${this.nbatch}').innerHTML = parseFloat(menuValue) - (parseFloat(${this.price}) * -1)
                document.getElementById('menu-remaining-batch${this.nbatch}').innerHTML = parseFloat(remainingValue) + parseFloat(${this.price})
                
                document.getElementById('cbox_batch${this.nbatch}').checked = false;

                card.style.outlineColor = 'var(--card-outline-hover)';
                card.style.transition = 'var(--transition)';

                card2.style.backgroundColor = 'var(--card-outline-hover)';
                card2.style.transition = 'var(--transition)';

            }

            const allChecker = document.getElementById('select-all-button${this.nbatch}')
            allChecker.style.outlineColor = 'var(--card-outline)';

            
            doThing();">  

            <label class="label batch${this.nbatch} label_${this.userid}" for="cbox_${this.userid}_batch${this.nbatch}">

                <div class="skin-info" id="skin-info__${this.userid}_batch${this.nbatch}">
                    <div class="operator-name" id="op-name-${this.english}-batch${this.nbatch}">${this.english}</div>
                    <div class="skin-name">${this.obtain}</div>
                </div>

                
                
                <img src="${this.portrait}"  alt="">
                


                
                
                <div class="operator-selected batch${this.nbatch}" id="operator-selected__${this.userid}_batch${this.nbatch}">
                    <img src="svg/check3.svg" alt="">
                </div>
                
                <div class="card-price" id="card-price__${this.userid}_batch${this.nbatch}">
                    <div class="card-price-image" id="cost-image__${this.userid}_batch${this.nbatch}"><img src="${this.currency}" alt=""></div>
                    <div class="card-price-value" id="card-cost__${this.userid}_batch${this.nbatch}">${this.price}</div>
                    
                </div>

                <div class="display-art display-art__${this.userid}" id="display-art__${this.userid}_batch${this.nbatch}" onclick="
                
                    document.getElementById('ban_${this.userid}').click();
                    ">
                    

                    <label for="display-art__${this.userid}_batch${this.nbatch}"><img src="svg/search.svg" class="search" type=""></label>

                </div>

            </label>

        </div>`
    }
    // ${this.fullart}
    // ${this.price}
    // ${this.currency}
    // <div class="card-price-value tokens" id="token-cost__${this.userid}_batch${this.nbatch}">${this.tokens}</div>
}
window.customElements.define("card-component", cardComponent);

// alert('Not enough primes, deselect skins')
// line 206
//animationUpdate();
//charaSelect();



