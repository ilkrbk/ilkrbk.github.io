var modal = document.getElementById('modal');
var span = document.querySelectorAll(".modal__close")[0];
span.addEventListener('click', () => {
  modal.style.display = "none";
})

var images = document.querySelectorAll('.gallery__img');
var modalImg = document.getElementById("modal1");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
   images[i].onclick = function(){
       modal.style.display = "block";
       modalImg.src = this.src;
   }
}