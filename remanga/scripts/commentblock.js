function $(element) {
	return document.getElementById(element);
}
const alertBox = $('alert');
let commentSubmit = $('btn_add_comment');
const commentBox  = $('text_comment');
let commentList = $('list_comments');
console.log("commentblock.js loaded");

commentSubmit.addEventListener('click', function(e) {
	e.preventDefault();
  const d = new Date();
  let time = d.toLocaleTimeString();
	let comment  = commentBox.value.trim();
  let newLI = document.createElement('li');

  localStorage.setItem(time, comment);


  if (commentBox.value.length > 1) {
  $('alert').innerText = '';
  comment = `<p class="comment">${comment}</p><p class="date"><b>Posted on: ${time}</b></p>`;
	newLI.innerHTML = comment;
	commentList.appendChild(newLI);

  fadeOut(newLI);
    
    commentBox.value = '';
  } else {
    $('alert').innerText = 'Bob, do something!';
  }
}, false);


function fadeOut(element) {
    element.style.background = "#1B1B1B";
    var opacity = 0.1;
    function decrease () {
        opacity -= 0.05;
        if (opacity <= .40){
            element.style.background = "#1e1e1e";
            element.style.opacity = 1;
            return true;
        }
        element.style.opacity = opacity;
        setTimeout(decrease,fps);
    }
    decrease();
}


window.onload = function () {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    let newLI = document.createElement('li');
    let comment = `<p class="comment">${value}</p><p class="date"><b>Posted on: ${key}</b></p>`;
    newLI.innerHTML = comment;
    commentList.appendChild(newLI);
  }
}