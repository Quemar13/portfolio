
AOS.init({duration: 1000,});// Initialisation AOS + durée animation

window.addEventListener('scroll', function(){
// window.scrollY nous permet d'avoir la distance entre le haut et le scroll effectué, c'est une valeur en pixel.
// window.innerWidth nous permet d'avoir la résolution de l'écran en pixel. Ici je ne souhaite pas afficher le retour vers le haut sur smartphone.

    if(window.scrollY < 500 || window.innerWidth <500){
        document.getElementById('back-to-top').style.display ="none";
        }
    else{
        document.getElementById('back-to-top').style.display ="block";
        }

});
