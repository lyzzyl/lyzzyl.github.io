// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/May.jpg') {
    myImage.setAttribute('src', 'images/April.jpg');
  } else {
    myImage.setAttribute('src', 'images/April.jpg');
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// function setUserName() {
//   let myName = prompt('请输入你的名字。');
//   localStorage.setItem('name', myName);
//   myHeading.textContent = 'Mozilla 酷毙了，' + myName;
// }
// 对null值进行处理，若什么都不输入，那么将重新调用setUserName函数
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
  setUserName();
}