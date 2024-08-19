
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
const spanDot = document.getElementsByClassName("dot");

spanDot[0].addEventListener('click',()=>{	
	slideOn = "./assets/images/slideshow/" + slides[0].image;
	bannerImage.setAttribute("src",slideOn);
	console.log('Point 1')
 })

 spanDot[1].addEventListener('click',()=>{
	slideOn = "./assets/images/slideshow/" + slides[1].image;
	bannerImage.setAttribute("src",slideOn);
	console.log('Point 2')
 })

 spanDot[2].addEventListener('click',()=>{
	slideOn = "./assets/images/slideshow/" + slides[2].image;
	bannerImage.setAttribute("src",slideOn);
	console.log('Point 3')
 })	

 spanDot[3].addEventListener('click',()=>{
	slideOn = "./assets/images/slideshow/" + slides[3].image;
	bannerImage.setAttribute("src",slideOn);
	console.log('Point 4')
 })

let indexForSlides = 0;
let slideOn

function dotSlides() {
    let i;
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot_selected", "");
    }
    
    dots[indexForSlides].className += " dot_selected";
} 


 leftArrow.addEventListener('click', ()=>{

		indexForSlides--;
		if (indexForSlides < 0) {indexForSlides = slides.length -1}
		slideOn = "./assets/images/slideshow/" + slides[indexForSlides].image;
		bannerImage.setAttribute("src",slideOn);
		dotSlides()
		console.log("<<Left")
 })

 rightArrow.addEventListener('click', ()=>{

		indexForSlides++;
		if (indexForSlides > slides.length -1){indexForSlides = 0}
		slideOn = "./assets/images/slideshow/" + slides[indexForSlides].image;
		bannerImage.setAttribute("src",slideOn);
		dotSlides()
		console.log("Right>>")
 })


