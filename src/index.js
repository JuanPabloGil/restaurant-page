import _ from 'lodash';

function title() {
  const title = document.createElement('h1');
  title.innerHTML = "Hello world";
  return title;
}

document.body.appendChild(title());
