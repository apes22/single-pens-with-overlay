document.getElementById("cover-overlay").addEventListener("mouseover", function(){
 console.log("Currently MouseOver")
  this.style.opacity = 0.8;
        });

document.getElementById("cover-overlay").addEventListener("mouseleave", function(){
 console.log("Currently MouseOver")
  this.style.opacity = 0;
        });