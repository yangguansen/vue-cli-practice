export default function () {
  var response = function () {
    var w = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = w / 37.5 + 'px';
    console.log( '变' );
  };
  window.onresize = function () {
    clearTimeout( this.responseTimer );
    this.responseTimer = setTimeout( response, 300 );
  };
  response();
}
