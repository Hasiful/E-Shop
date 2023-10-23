
const selectElement = {
    navLink: document.querySelector(".nav_icon"),
    dashSubNav: document.querySelector(".user_dash_subnav_main")
} 

const {navLink, dashSubNav} = selectElement


navLink.addEventListener("click", function(){
    $(dashSubNav).slideToggle();
})