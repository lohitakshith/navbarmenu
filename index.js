var menu = document.querySelector(".navbar-toggler");
menu.addEventListener("click", () =>{
    if(!menu.classList.contains("open")){
        menu.classList.add("open")
    }else{
        menu.classList.remove("open")
    }
})