const firstImage = document.querySelector('.firstImage');
const homeMenuImage = document.querySelector('.homemenuImage');
const atout1 = document.querySelector('.atout1');

function setImageRotation() {
    let rotation = 36 - window.pageYOffset / 11.5
    rotation = Math.round(rotation);
    if (rotation <= 1) {
      rotation = 0;
    }
    firstImage.style.transform = `rotate3d(-6, 34, 6, ${rotation}deg)`;
}

window.addEventListener('scroll', function() {
    setImageRotation();
});

window.onload = function() {
    setImageRotation();
}