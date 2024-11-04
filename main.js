const getEl = (element) => document.querySelector(element);

const $menuButton = getEl('.menu-btn');
const $backButton = getEl('.back-btn');
const $sidebar = getEl('.sidebar');

$menuButton.onclick = (event) => {
  // event.target.style.visibility = 'hidden';
  $sidebar.classList.add('open');
};

$backButton.onclick = (event) => {
  // $menuButton.style.visibility = 'unset';
  $sidebar.classList.remove('open')

}

