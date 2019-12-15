function modal(){
  var modal = document.getElementById('modal');
  var span = document.querySelectorAll(".modal__close")[0];
  span.addEventListener('click', () => {
    modal.style.display = "none";
  })
  
  var images = document.querySelectorAll('.gallery__img');
  var modalImg = document.getElementById("modal1");
  var i;
  for (i = 0; i < images.length; i++) {
     images[i].onclick = function(){
         modal.style.display = "block";
         modalImg.src = this.src;
     }
  }
}
modal();

var btn = document.querySelector('.gallery__btn');
var list = document.querySelector('.gallery__list');
var num = 0;

function loadData() {    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ilkrbk.github.io/bike/dist/list.json');
    xhr.responseType = 'json';
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4){
            let data = xhr.response;
            ``
            if (num < data.length) {
              num++;
              let li = document.createElement('li');
              li.classList.add('gallery__item');             
              list.appendChild(li);
              let img = document.createElement('img');
              img.setAttribute('src', `${data[num-1]}`);
              img.classList.add('gallery__img'); 
              li.appendChild(img);  
              let i = document.createElement('i');
              i.classList.add('fas'); 
              i.classList.add('fa-search-plus');                     
              li.appendChild(i);
              modal();
            } if (num >= data.length) {
              btn.classList.add('gallery__btn--none')
            }
        }
    }
    xhr.send();
}

btn.addEventListener('click', loadData);