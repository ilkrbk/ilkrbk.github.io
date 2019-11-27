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

var blogBtn = document.querySelector('.blog__btn');
var bloglist = document.querySelector('.blog__list');
var blognum = 0;

function loadBlog() {    
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://ilkrbk.github.io/myProject/velo/PUG%20SASS/dist/blogList.json');
  xhr.responseType = 'json';
  
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4){
      let data = xhr.response;
      ``
      if (blognum < data.length) {
        for(let k = 0; k < 7; k++){
          blognum++;
          let li = document.createElement('li');
          li.classList.add('blog__item');             
          bloglist.appendChild(li);
          let img = document.createElement('img');
          img.setAttribute('src', `${data[blognum-1].img}`);
          img.classList.add('blog__img'); 
          li.appendChild(img);  
          let textWrap = document.createElement('div');
          textWrap.classList.add('blog__text-wrap');
          li.appendChild(textWrap);
          let title = document.createElement('h3');
          title.classList.add('blog__item-title');
          textWrap.appendChild(title);
          title.innerHTML = data[blognum-1].title; 
          let descr = document.createElement('p');
          descr.classList.add('blog__item-descr');
          textWrap.appendChild(descr);
          descr.innerHTML = data[blognum-1].descr; 
          blogModal();
          let footer = document.createElement('footer');
          footer.classList.add('blog__footer');
          textWrap.appendChild(footer);
          let date = document.createElement('date');
          date.classList.add('blog__item-date');
          footer.appendChild(date);
          date.innerHTML = data[blognum-1].date;
          let ul = document.createElement('ul');
          ul.classList.add('blog__social');
          footer.appendChild(ul);
          for(let i = 0; i < 2; i++){
            let ulLi = document.createElement('li');
            ulLi.classList.add('blog__icon-wrap');
            ul.appendChild(ulLi);
            let icon = document.createElement('i');
            icon.classList.add('blog__icon');
            icon.classList.add('fas');
            icon.classList.add(data[blognum-1].icon[i]);
            ulLi.appendChild(icon);
          }
          blogModal();
        }
      } if (blognum >= data.length) {
        blogBtn.classList.add('gallery__btn--none')
      }
    }
  }
  xhr.send();
}

blogBtn.addEventListener('click', loadBlog);