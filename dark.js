var dark = document.getElementById("dark");

dark.onclick = function(){
    document.body.classList.toggle("dark-theme");
if(document.body.classList.contains("dark-theme")){
    icon.src = <i class="fa-solid fa-sun"></i>;
}else{
    icon.src = <i id="dark" class="fa-solid fa-moon"></i>
}
}