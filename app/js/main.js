var dropBtn = document.querySelectorAll('.left-list-catalog li .drop-btn');
//console.log(dropBtn);

	for (var i = 0; i < dropBtn.length; i++) {
		dropBtn[i].onclick = function(){
			var thisBtn = this.classList.toggle('active-list');
			var wrap = this.parentNode;
			
			var wrap2 = wrap.querySelector('ul')
			

			wrap2.classList.toggle('active-drop');


		}
	}
// hover effect

var popularLink = document.getElementsByClassName('link-small-prod');

console.log(popularLink);
 for (var i = 0; i < popularLink.length; i++) {
 	popularLink[i].onmouseover = hoverEffect;
 	popularLink[i].onmouseout = hoverEffect;

}



function hoverEffect(hov){
	
	let parentLink = this.parentNode;
	let imgHover = parentLink.getElementsByClassName('link-small-prod-img')[0];
	imgHover.classList.toggle('hover-img')
	let quatProdSmall = parentLink.getElementsByClassName('quantity-prod-small')[0];
	quatProdSmall.classList.toggle('quant-prod-active');
	
}

var popularImg = document.getElementsByClassName('link-small-prod-img');

	for (var i = 0; i < popularImg.length; i++) {
		popularImg[i].onmouseover = hoverEffectImg;
		popularImg[i].onmouseout = hoverEffectImg;
	}

function hoverEffectImg(){
	let parentImg = this.parentNode;
	let quatProdSmall =  parentImg.getElementsByClassName('quantity-prod-small')[0];
	quatProdSmall.classList.toggle('quant-prod-active')

	}


var popularImgSmall = document.getElementsByClassName('img-categ-link-popular');

console.log(popularLink);
 for (var i = 0; i < popularImgSmall.length; i++) {
 	popularImgSmall[i].onmouseover =  hoverEffectImgSmall;
 	popularImgSmall[i].onmouseout =  hoverEffectImgSmall;

}
function hoverEffectImgSmall(){
	let parentImg = this.parentNode;
	let quatProdSmall =  parentImg.getElementsByClassName('quantity-prod-small')[0];
	quatProdSmall.classList.toggle('quant-prod-active')

	}



var popularLinkSmall = document.getElementsByClassName('categor-link-popular');

console.log(popularLink);
 for (var i = 0; i < popularLinkSmall.length; i++) {
 	popularLinkSmall[i].onmouseover =  hoverEffectImgSmall2;
 	popularLinkSmall[i].onmouseout =  hoverEffectImgSmall2;

}
function hoverEffectImgSmall2(){
	let parentLink = this.parentNode;
	let quatProdSmall =  parentLink.getElementsByClassName('quantity-prod-small')[0];
	let imgProdSmall = parentLink.getElementsByClassName('img-categ-link-popular')[0];
	imgProdSmall.classList.toggle('hover-img')
	quatProdSmall.classList.toggle('quant-prod-active')

	}

	// выпадающий список

	btnOptions  = document.getElementsByClassName('btn-option');
	dropOptionsList  = document.getElementsByClassName('drop-option-list');
	dropOptionsListPar = document.querySelectorAll('.drop-option-list li')
	console.log(dropOptionsListPar)


	console.log(btnOptions)
	for (var i = 0; i < dropOptionsListPar.length; i++) {
		dropOptionsListPar[i].onclick = function(){
			
			text2 = this.innerText
			var idPtod = this.id;
			console.log(idPtod)
			var wraplist = this.parentNode.parentNode;
			var dropBtn = wraplist.getElementsByClassName('btn-option');
			var formAct = this.parentNode.parentNode.parentNode;
			var test = formAct.querySelector('input') ;
			var test2 = test.value = idPtod;
			console.log(test)
			var text2 = this.innerText;
			this.parentNode.classList.toggle('open-options')

			

			dropBtn[0].innerText = text2;

		}
	}
//options

var btnOpt = document.querySelectorAll('.wrap-list-option .btn-option');
//console.log(dropBtn);

	for (var i = 0; i < btnOpt.length; i++) {
		btnOpt[i].onclick = function(){
			let thisBtn = this.classList.toggle('open-options');
			let wrap = this.parentNode;
			
			let wrap2 = wrap.querySelector('ul')
			

			wrap2.classList.toggle('open-options');


		}
	}

	///quant prod

	var addProd = document.getElementsByClassName('add-item-prod');
	var delProd = document.getElementsByClassName('del-item-prod');
	var quantInp = document.getElementsByClassName('quant-inp');

for (var i = 0; i < addProd.length; i++) {
	
	let quantProd = 1;
	addProd[i].onclick = function(){
		
		var inpQuqnt = this.parentNode.getElementsByClassName('quant-inp')[0];
		var test =inpQuqnt.value
		
			quantProd++
			inpQuqnt.value = quantProd		
			console.log(quantProd)
			if (quantProd<=0) {
				quantProd =+1;
				inpQuqnt.value = quantProd
			}
			var hiddenInp = this.parentNode.getElementsByClassName('quant-prod-inp')[0];
			hiddenInp.value = quantProd;
			console.log(hiddenInp)

	}
}
for (var i = 0; i < delProd.length; i++) {
	
	let quantProd = 1;
	
	delProd[i].onclick = function(){
		var quantProd = 0;
		var inpQuqnt = this.parentNode.getElementsByClassName('quant-inp')[0];
		var hiddenInp = this.parentNode.getElementsByClassName('quant-prod-inp')[0];
			quantProd--
			inpQuqnt.value = quantProd	
		
			if (quantProd<=0) {
				quantProd =+1;
				inpQuqnt.value = quantProd;
				
			}

			
			hiddenInp.value = quantProd
	}
}

for (var i = 0; i < quantInp.length; i++) {

	quantInp[i].oninput = function(){
		inpVal = this.value
		var hiddenInp2 = this.parentNode.getElementsByClassName('quant-prod-inp')[0];
		
		hiddenInp2.value = inpVal;
		

	}}



for (var i = 0; i < quantInp.length; i++) {

	quantInp[i].onkeypress = function(e) {

      e = e || event;

      if (e.ctrlKey || e.altKey || e.metaKey) return;

      var chr = getChar(e);

      // с null надо осторожно в неравенствах, т.к. например null >= '0' => true!
      // на всякий случай лучше вынести проверку chr == null отдельно
      if (chr == null) return;

      if (chr < '0' || chr > '9') {
        return false;
      }

    }

    function getChar(event) {
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
      }

      if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
      }

      return null; // специальная клавиша
    }
}
// like

var likeItem = document.getElementsByClassName('like-product');

for (var i = 0; i < likeItem.length; i++) {
	likeItem[i].onclick = function(){
		this.classList.toggle('active-like')
		
	
	}

	
	
}

//checkbox
var checkboxOne = document.getElementById('check1');
var checkboxTwo = document.getElementById('check2');
var checkLabel = document.getElementsByClassName('deliver-item')
console.log(checkboxOne,checkboxTwo,checkLabel)

for (var i = 0; i < checkLabel.length; i++) {

	checkLabel[i].onclick = function rell(){

		if (checkboxOne.checked) {
			var test = checkboxOne.parentNode.getElementsByClassName('wrap-text-deliver')[0];
			test.classList.toggle('active-deliver')
		}
	
		if (checkboxTwo.checked) {
			var test2 = checkboxTwo.parentNode.getElementsByClassName('wrap-text-deliver')[0];
			test2.classList.toggle('active-deliver')
		}
		

		
	}
}


//modal window

var modalWin = document.getElementsByClassName('wrap-quick-buy-form')[0];
var quickBtn = document.getElementsByClassName('quick-buy')[0];
var quickForm = document.getElementsByClassName('quick-buy-form')[0];
var closeWindow = document.getElementsByClassName('close-window')[0];



//check buy

var checkBuy = document.getElementsByClassName('check-buy');








quickBtn.onclick = function(){
	modalWin.classList.toggle('open-modal');
	quickForm.classList.toggle('open-window')
}
closeWindow.onclick = function(){
	modalWin.classList.toggle('open-modal');
	quickForm.classList.toggle('open-window')
}

