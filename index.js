const popup=document.querySelector('.popup-box');
const serviceItems=document.querySelector('.service-items');
const popupCloseBtn=document.querySelector('.popup-close-btn');


serviceItems.addEventListener('click',function(event){
    if(event.target.tagName.toLowerCase()=="button"){
        const item=event.target.parentElement;
        const h3=item.querySelector('h3').innerHTML;
        const readMoreCont=item.querySelector(".read-more-cont").innerHTML;
        popup.querySelector("h3").innerHTML=h3;
        popup.querySelector(".popup-body").innerHTML=readMoreCont;
            popupBox();
    }
})

popupCloseBtn.addEventListener('click',popupBox);

function popupBox(){
    popup.classList.toggle("open");
}

