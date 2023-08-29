const menuButton = document.querySelectorAll('.contentMenu')
const subMenu = document.querySelectorAll('.sub-menu')

menuButton.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        if(subMenu[index].style.opacity==0){
            subMenu[index].style = "opacity: 1;visibility: visible;"
        }
        else{
            subMenu[index].style = "opacity: 0;visibility: hidden;"
        }
    })
})