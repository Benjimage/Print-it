
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
const spanDot = document.querySelector('.dot');

spanDot.addEventListener('click',()=>{
	console.log(spanDot)
	console.log('Ça marche !!! YOUPI !!! Tralala !!!')
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
		slideOn = "./assets/images/slideshow/" + slides[indexForSlides].image;
		bannerImage.setAttribute("src",slideOn);
		dotSlides()
		return indexForSlides;		
 })
 console.log(indexForSlides);

 rightArrow.addEventListener('click', ()=>{

		indexForSlides++;
		slideOn = "./assets/images/slideshow/" + slides[indexForSlides].image;
		bannerImage.setAttribute("src",slideOn);
		dotSlides()
		return indexForSlides;
 })
 console.log(indexForSlides);


/* console.log (indexForSlides)
if(indexForSlides > slides.length -1) {
	slideOn = "./assets/images/slideshow/" + slides[0].image;
}  */
/* rightArrow.addEventListener('click', ()=>{
	
	if(indexForSlides > slides.length -1) {
		indexForSlides = 0;
	} else {
	indexForSlides = indexForSlides + 1;
	let slideOn = "./assets/images/slideshow/" + slides[indexForSlides].image
	bannerImage.setAttribute("src",slideOn)
	}
	
	console.log(slides[indexForSlides] .image );
}) */

/*Test du scope de la fonction */
/* function toward(){
	let i = 0
	indexForSlides = slides[i]
	return indexForSlides
}
toward()
console.log (indexForSlides) */

/* Mise en place des fonctions du slider*/
/* rightArrow.addEventListener('click', ()=>{
	/* console.log('OK right'); */
	/* bannerImage.setAttribute("src","./assets/images/slideshow/slide2.jpg") 
	bannerImage.setAttribute("src",slideOn)
}) */
/* let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let dots = document.getElementsByClassName("dot");
   
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot_selected", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " dot_selected";
} */