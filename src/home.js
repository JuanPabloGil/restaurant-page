
const renderHome = () => {

    const home = document.createElement('div');
    home.id = 'home';
    home.className = "diveHome";

    const title = document.createElement('h1');
    title.innerHTML = "The Best Dishes";
    title.className = "homeTitle";

    const text = document.createElement('p');
    text.innerHTML = 'Form the delicious food Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    text.className = "homeText";

    document.body.appendChild(home);
    document.getElementById('home').appendChild(title);
    document.getElementById('home').appendChild(text);
}

export { renderHome }
