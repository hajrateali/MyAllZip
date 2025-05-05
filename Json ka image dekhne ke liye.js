//------------------------------------------//
let all = document.querySelector('.all');
all.addEventListener('click', allpic);

function allpic() {
  fetch('https://raw.githubusercontent.com/hajrateali/newrepo/main/02shama-images.json')
  .then(res => res.json())
  .then(data => {
    data.images.forEach(image => {
      const img = new Image();
      img.src = image.url;
      document.querySelector(".imgb").appendChild(img);
    });
  });
}



