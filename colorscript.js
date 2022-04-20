function menuHandler() {
  let menu = document.getElementById("main-navigation")
  if (menu.className === "navigation") {
    menu.className += " responsive"
  } else {
    menu.className = "navigation"
  }
}

//Body 'alias' to use in script
const body = document.querySelector('body');

//Colors used in menu
const colors = ['red', 'blue', 'green', 'yellow'];

//Create menu
const nav = document.createElement('nav');
nav.id = 'main-navigation'
nav.className = 'navigation'
nav.addEventListener('mouseleave', () => menuHandler())

const menuButton = document.createElement('li');
menuButton.className ='icon';
menuButton.addEventListener('mouseenter', () => menuHandler());

const menuButtonImage = document.createElement('i');
menuButtonImage.className = 'fa fa-bars';
menuButton.appendChild(menuButtonImage);
nav.append(menuButton);

colors.forEach((color) => {
  const menuItem = document.createElement('li');
  menuItem.className = 'menu-item';
  menuItem.innerText = color;
  menuItem.style.backgroundColor = color;
  nav.append(menuItem)
})

body.append(nav)

//Add color name in page
const colorName = document.createElement('p');
colorName.innerText = 'some color';
colorName.style.cssText = 'font-size: 75px; margin: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);'
body.append(colorName);

//Add click events to menu list items
const menuListItems = document.querySelectorAll('.menu-item');
menuListItems.forEach((item) => {
  item.addEventListener('click', () => {
    body.style.backgroundColor = item.innerText;
    colorName.innerText = item.innerText;
  })
})

//Add radio buttons to menu-items
menuListItems.forEach((item) => {
  const radio = document.createElement('input');
  radio.type = 'radio'
  radio.style.margin = '5px';
  radio.name = `radio-btn`
  radio.addEventListener('click', () => {
    body.style.backgroundColor = item.innerText;
  })
  item.prepend(radio)
})


//Add keystroke event listener
document.addEventListener('keydown', (event) => {
  if(
    Number(event.key) !== NaN && 
    Number(event.key) <= menuListItems.length &&
    Number(event.key) > 0
    ) {
    console.log('yes');
    menuListItems[Number(event.key) - 1].click()
  }
})


