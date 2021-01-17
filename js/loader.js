var body = document.getElementById('body');
var div = document.createElement('div');
function loader() {
    body.appendChild(div);
    div.setAttribute('id', loader);
    div.appendChild(Image);
    Image.src('/img/a2dc9668f2cf170fe3efeb263128b0e7.gif')

}
loader();
