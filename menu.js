var miBoton = document.getElementById("miBoton");
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            miBoton.style.display ="block";
        }else{
            miBoton.style.display="none";
        }
}
function topFunction(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop=0;
    }
/* MENU --------------*/
function abrirMenu() {
  var x = document.getElementById("miNav");
  if (x.className === "header-navegacion--menu") {
      x.className += " responsive";
  }else{
        x.className = "header-navegacion--menu";
  }

}
function cerrarMenu(){
    var x = document.getElementById("miNav");	
   x.className = "header-navegacion--menu";
}