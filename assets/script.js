const slides = [
	{
		"image":"slide1.jpg",// ici référence à ajouter dans la string param 2 de setAttribute
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
 
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const bannerImage = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const spanDot = document.getElementsByClassName('dot');

let indexForSlides = 0;
let slideOn
let scrollingTime


leftArrow.addEventListener('click', ()=>{plusSlides(-1)})

rightArrow.addEventListener('click',()=>{plusSlides(1)})

spanDot[0].addEventListener('click',()=>{currentSlide(0)})
spanDot[1].addEventListener('click',()=>{currentSlide(1)})
spanDot[2].addEventListener('click',()=>{currentSlide(2)})
spanDot[3].addEventListener('click',()=>{currentSlide(3)})

function plusSlides(n) {
	showSlides(indexForSlides += n);
  }
  
function currentSlide(n) {
	showSlides(indexForSlides= n);
  }
  
function showSlides(n) {
	if (n > slides.length -1){indexForSlides = 0}    
	if (n < 0) {indexForSlides = slides.length -1}
		slideOn = "./assets/images/slideshow/" + slides[indexForSlides].image;
		bannerText.innerHTML = slides[indexForSlides].tagLine;
		bannerImage.setAttribute("src",slideOn); 
	for (let i = 0; i < spanDot.length; i++) {
		spanDot[i].className = spanDot[i].className.replace(" dot_selected", "");
	}
	spanDot[indexForSlides].className += " dot_selected";
  }



	
	

	
