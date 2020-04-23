import _ from 'lodash';
import {renderHome} from './home.js';
import {renderNavigation} from './menu.js';




renderHome();
renderNavigation();


const buttonMenu = document.getElementById('buttonMenu');
buttonMenu.addEventListener('click', (buttonMenu) => {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById("Menu").style.display = "block";
});

const buttonContact = document.getElementById('buttonContact');
buttonContact.addEventListener('click', (buttonContact) => {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById("Contact").style.display = "block";
});
