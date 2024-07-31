const slides = [
	{
		"image":"slide1.jpg",
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
 /* const bannerSlide = document.getElementById('banner'); */
 const leftArrow = document.querySelector('.arrow_left');
 const rightArrow = document.querySelector('.arrow_right');
 const bannerSpan = document.querySelector('#banner span');
 const bannerText = document.querySelector('#banner p');
 let spanDots = document.getElementsByClassName('.dot'); 
 /* spanDots.addEventListener('onclick', slideRun) */

 leftArrow.addEventListener('click', ()=>{
	 console.log('OK left');
 })
 rightArrow.addEventListener('click', ()=>{
	console.log('OK right');
})
console.log(bannerSpan);
console.log(bannerText);

let indexForSlides 
/*Test du scope de la fonction */
function toward(){
	let i = 0
	indexForSlides = slides[i]
	return indexForSlides
}
toward()
console.log (indexForSlides)
/* Mise en place des fonctions du slider*/

/* let slideIndex = 1;
slideRun(slideIndex);

function playSlides(s) {
	slideRun(slideIndex += s);
}
function playSlidesBydots(){
	slideRun(slideIndex = s)
}
function slideRun(s) {
	let i;
/* 
	let bannerSlide = document.getElementById('banner');
	spanDots = document.getElementsByClassName('.dot'); */

	/* if (s > slides.length) {
		slideIndex = 1
	}
    if (s < 1) {
		slideIndex = slides.length
	}

	for (i = 0; i < slides.length; i++) { */
        /* bannerSlide.innerHTML = slides[slideIndex]; */
    /* }
    for (i = 0; i < spanDots.length; i++) {
        dots[i].className = spanDots[i].className.replace(" dot_selected", "");
    } */

	/* bannerSlide.innerHTML = slides[i] */
	/* spanDots[slideIndex -1].className += 'dot_selected';

} */ 