const loaderWrapper = document.querySelector(".loader-container");
const loadingScreen = document.getElementById('loading-screen');
const logo = document.querySelector("#new-logo");
const loader = document.querySelectorAll("#new-logo path:nth-child(13)");



loader[0].onanimationend = function(){
  logo.classList.add('pop');
  loaderWrapper.classList.add('inactive');
  setTimeout(function(){
    loadingScreen.parentNode.removeChild(loadingScreen);
  }, 1000);
}



