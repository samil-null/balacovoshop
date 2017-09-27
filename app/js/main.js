var dropBtn = document.querySelectorAll('.left-list-catalog li .drop-btn');
//console.log(dropBtn);

	for (var i = 0; i < dropBtn.length; i++) {
		dropBtn[i].onclick = function(){
			var thisBtn = this.classList.toggle('active-list');
			var wrap = this.parentNode;
			console.log(wrap)
			var wrap2 = wrap.querySelector('ul')
			console.log(wrap2)

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

	for (var i = 0; i < btnOptions.length; i++) {
		var wrapOpt = btnOptions[i].parentNode;
		var varEl = wrapOpt.querySelector('ul li')
		var text = varEl.innerText;
		console.log(text)
		btnOptions[i].innerText = text;

	}

	console.log(btnOptions)
	for (var i = 0; i < dropOptionsListPar.length; i++) {
		dropOptionsListPar[i].onclick = function(){
			betrayedInput = 
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
			

			dropBtn[0].innerText = text2;

		}
	}
