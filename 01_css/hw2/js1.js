

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc == './res/page1-06.png') {
      myImage.setAttribute ('src','./res/page1-07.png');
    } else {
      myImage.setAttribute ('src','./res/page1-06.png');
    }
}

myImage.onmouseout = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc == './res/page1-06.png') {
    myImage.setAttribute ('src','./res/page1-07.png');
  } else {
    myImage.setAttribute ('src','./res/page1-06.png');
  }
}