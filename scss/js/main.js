var menuHam = document.getElementById("menuHamburger");
var menuMain = document.getElementById("mainMenu");
const menuBtn = document.querySelector(".m-menu-button");
let menuOpen = false;

if(menuHam != null && menuMain != null) {
  menuHam.addEventListener('click', function(e){
    if(menuMain.className == 'l-main-nav is-active'){
      menuMain.className = 'l-main-nav';
    }
    else {
        menuMain.className = 'l-main-nav is-active';
    }
  });
}
else {
  alert('élément manquant !');
};

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});