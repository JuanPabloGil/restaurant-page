import _ from 'lodash'; // eslint-disable-line no-unused-vars
import renderHome from './home';
import renderNavigation from './menu';


renderHome();
renderNavigation();


const buttonMenu = document.getElementById('buttonMenu');
buttonMenu.addEventListener('click', (buttonMenu) => { // eslint-disable-line no-unused-vars
  let i;
  const tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i += 1) {
    tabcontent[i].style.display = 'none';
  }
  document.getElementById('Menu').style.display = 'block';
});

const buttonContact = document.getElementById('buttonContact');
buttonContact.addEventListener('click', (buttonContact) => { // eslint-disable-line no-unused-vars
  let i;
  const tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i += 1) {
    tabcontent[i].style.display = 'none';
  }
  document.getElementById('Contact').style.display = 'block';
});
