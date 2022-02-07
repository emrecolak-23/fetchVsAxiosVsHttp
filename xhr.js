
let getBTN = document.querySelector("#get-btn");


function getData() {
var xhr = new XMLHttpRequest()

xhr.open("GET","https://jsonplaceholder.typicode.com/users");

xhr.onload = () => {
  let data = JSON.parse(xhr.response);
  console.log(data);
}

xhr.send();
}



getBTN.addEventListener("Click",getData());