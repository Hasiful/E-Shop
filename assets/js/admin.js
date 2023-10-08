
let collapseBtn = document.getElementById("collapse_btn")
let closeCollapse = document.getElementById("close_collapse")
let userNav = document.querySelector(".user_dashboard_nav")

collapseBtn.addEventListener("click", function(){
    userNav.style.cssText = "left: 0px"
})

closeCollapse.addEventListener("click", function(){
    userNav.style.cssText = "left: -100%"
})