

var myImage = document.querySelector('img');

/*myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/yee.jpg') {
      myImage.setAttribute ('src','images/yee2.jpg');
	} else {
	  myImage.setAttribute ('src','images/yee.jpg');
	}
}*/


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML =  'Wszystko co ' + myName + ' chciałby/chciałaby wiedzieć o Yee';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Wszystko co ' + storedName + ' chciałby/chciałaby wiedzieć o Yee';
}

myButton.onclick = function() {
  setUserName();
}

var myYee = document.getElementById('je'); 

myYee.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/yee.jpg') {
      myImage.setAttribute ('src','images/yee2.jpg');
	} else {
	  myImage.setAttribute ('src','images/yee.jpg');
	}
}
