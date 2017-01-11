var cover_overlay = document.getElementsByClassName("cover-overlay");

for (var i = 0; i < cover_overlay.length; i++) {
    cover_overlay[i].addEventListener("mouseover", function(){
    	this.style.opacity = 0.8;
    });
  
   cover_overlay[i].addEventListener("mouseleave", function(){
   	this.style.opacity = 0;
   });
}

