const renderNavigation = () => {

  //Divs section
  const menu = document.createElement('div');
  menu.id = "Menu";
  menu.className = "tabcontent";

  const contact = document.createElement('div');
  contact.id = "Contact";
  contact.className = "tabcontent";

  //Content
  const menuContent = document.createElement('h1');
  menuContent.className = "content";
  menuContent.innerHTML = "I'm the menu";

  const contactContent = document.createElement('h1');
  contactContent.className = "content";
  contactContent.innerHTML = "I'm the contact info";


  //Buttons
  const buttonMenu = document.createElement('Button');
  buttonMenu.className = "tablink";
  buttonMenu.id = "buttonMenu";
  buttonMenu.innerHTML = "Display menu";

  const buttonContact = document.createElement('Button');
  buttonContact.className = "tablink";
  buttonContact.id = "buttonContact";
  buttonContact.innerHTML = "Display contact";


  //render each section

  document.body.appendChild(menu);
  menu.appendChild(menuContent);

  document.body.appendChild(contact);
  contact.appendChild(contactContent);

  document.body.appendChild(buttonMenu);
  document.body.appendChild(buttonContact);


}

export { renderNavigation }
