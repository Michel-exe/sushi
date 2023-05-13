window.addEventListener("scroll", e =>{
    let scroll = document.documentElement.scrollTop
    let ele = document.querySelector(".perfil")
    if(ele.offsetTop - ele.scrollHeight < scroll){
        ele.querySelector(".perfilImg").classList.add("act")
    }
    // console.log(scrollY + " - " + document.querySelector(".perfil").scrollHeight);
    // console.log(document.querySelector(".perfil").scrollHeight);
})