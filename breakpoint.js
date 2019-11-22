let heightbody = (document.body.clientHeight);
let widthWindow = (document.body.clientWidth);
let height = window.innerHeight;

window.addEventListener("scroll", function (event) {
    var scroll = Math.round(this.scrollY);
    let textColor = document.getElementById('text2');
    console.log(scroll)
    if (scroll >= height && scroll <= height * 2) {
        console.log('1er breakpoint');
        textColor.style.color = 'white';
    } else if (scroll >= height * 2 && scroll <= height * 3) {
        console.log('deuxième breakpoint')
    } else if (scroll >= height * 3) {
        console.log('troisième breakpoint')
    }
});









