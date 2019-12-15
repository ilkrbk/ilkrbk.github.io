function blogModal(){
  var modal = document.getElementById('blogModal');
  var span = document.querySelectorAll(".blog__modal--close")[0];
  span.addEventListener('click', () => {
    modal.style.display = "none";
    $("body").css("overflow-y","scroll"); 
    $(".blog__item-descr").css("display","none");       
  })
  
  var images = document.querySelectorAll('.blog__img');
  var modalImg = document.getElementById("blogModal1");
  var captionText = document.getElementById("blogCaption");
  var i;
  for (i = 0; i < images.length; i++) {
      images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.nextElementSibling.innerHTML;
        $("body").css("overflow","hidden"); 
        $("#blogCaption .blog__item-descr").css("display","block"); 
      }
  }
}
blogModal();

