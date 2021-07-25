const image = document.getElementById("cookie");

let bigsize = 250;
let smallsize = 150;


function changeSizes() {
  
  if(image.width == bigsize) {
    image.width = smallsize;
  } else {
    image.width = bigsize;
  }

}

image.onclick = changeSizes();
