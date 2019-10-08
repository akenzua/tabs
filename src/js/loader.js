// loads the tabs method into to index.html file
var script = document.createElement('script');
script.onload = () => {
   document.getElementById('nav-tab').addEventListener('click', tab.removeActiveClass, false); 
   document.getElementById('nav-tab').addEventListener('click', tab.addActiveClass, false); 
}

script.src = './js/tab.js';
document.head.appendChild(script);