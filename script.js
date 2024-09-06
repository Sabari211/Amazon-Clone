const imgs=document.querySelectorAll(".header_slider ul img");
const prev_button=document.querySelector(".control_previous")
const next_button=document.querySelector(".control_next")

let n=0;

function changeslide(){
    for(let i=0;i<imgs.length; i++){
        imgs[i].style.display='none'
    }
    imgs[n].style.display='block'
}
changeslide()
prev_button.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1
    }
    changeslide()
})
next_button.addEventListener('click',(e)=>{
    if(n < imgs.length-1){
        n++;
    }else{
        n= 0
    }
    changeslide()
})
const scrollcontainer=document.querySelectorAll('.products')
for(const item of scrollcontainer){
    item.addEventListener('wheel',(e)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}
