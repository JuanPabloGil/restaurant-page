const renderNavigation = () => {
  // Divs section
  const menu = document.createElement('div');
  menu.id = 'Menu';
  menu.className = 'tabcontent';

  const contact = document.createElement('div');
  contact.id = 'Contact';
  contact.className = 'tabcontent';

  // Content
  const menuContent = document.createElement('h1');
  menuContent.className = 'content';
  menuContent.innerHTML = `

  <h1 class="sectionTitle">FOR OUR MENU</h1>
  <div class ="dish">
  <div class="priceMain">
  <h6 class="dishTitle">Beef burger meal</h6>
  <div class="linesPrices"></div>
  <span class="dishPrice"> $32 </span>
  </div>
  <div>
  <p class= "dishDesc"> Classic greek salad, barrel aged feta cheese, bread</p>
  </div>
  </div>

  <div class ="dish">
  <div class="priceMain">
  <h6 class="dishTitle">Roasted lamb rump</h6>
  <div class="linesPrices"></div>
  <span class="dishPrice"> $25 </span>
  </div>
  <div>
  <p class= "dishDesc"> Grilled lamb cutlets, pomegranate glaze, butternut squash</p>
  </div>
  </div>

  <div class ="dish">
  <div class="priceMain">
  <h6 class="dishTitle">Beef burger meal</h6>
  <div class="linesPrices"></div>
  <span class="dishPrice"> $32 </span>
  </div>
  <div>
  <p class= "dishDesc"> Classic greek salad, barrel aged feta cheese, bread</p>
  </div>
  </div>

  <div class ="dish">
  <div class="priceMain">
  <h6 class="dishTitle">Beef burger meal</h6>
  <div class="linesPrices"></div>
  <span class="dishPrice"> $38 </span>
  </div>
  <div>
  <p class= "dishDesc"> Classic greek salad, barrel aged feta cheese, bread</p>
  </div>
  </div>

  <div class ="dish">
  <div class="priceMain">
  <h6 class="dishTitle">Beef burger meal</h6>
  <div class="linesPrices"></div>
  <span class="dishPrice"> $41 </span>
  </div>
  <div>
  <p class= "dishDesc"> Classic greek salad, barrel aged feta cheese, bread</p>
  </div>
  </div>


  `;

  const contactContent = document.createElement('h1');
  contactContent.className = 'content';
  contactContent.innerHTML = `

  <h1 class="sectionTitle"> RESERVE YOUR TABLE </h1>
  <div class="contactSection">
  <p> Fray José de Arlegui 705 B, Universitaria, 78290 </p>
  <p> Reservations@tdr.com </p>
  <p> Open: 09:00 am – 09:00 pm  </p>
  <p>  +98 444 817 2568 </p>
  </div>

  `;


  // Buttons
  const buttonMenu = document.createElement('Button');
  buttonMenu.className = 'tablink';
  buttonMenu.id = 'buttonMenu';
  buttonMenu.innerHTML = 'Display menu';

  const buttonContact = document.createElement('Button');
  buttonContact.className = 'tablink';
  buttonContact.id = 'buttonContact';
  buttonContact.innerHTML = 'Display contact';


  // render each section

  document.body.appendChild(menu);
  menu.appendChild(menuContent);

  document.body.appendChild(contact);
  contact.appendChild(contactContent);

  document.body.appendChild(buttonMenu);
  document.body.appendChild(buttonContact);
};

export default renderNavigation;
