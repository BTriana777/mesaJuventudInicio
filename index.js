let cards = document.querySelectorAll(".animation-card");
function animationCard(){
    const scrollTop = document.documentElement.scrollTop;
    for(let i=0; i < cards.length; i++){
        let alturaCard = cards[i].offsetTop;
        if(alturaCard - 500 < scrollTop){
            cards[i].style.opacity = 1;
        }
    }
}
window.addEventListener('scroll', animationCard);