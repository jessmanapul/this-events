//Secret Menu Challenge
//Add event listeners to the following:

/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var navItems = document.getElementsByClassName('navi');

for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', showMenu);
}

function showMenu() {
    var item = this.querySelector('.inner');
    
    if (item.style.display === 'block') {
        item.style.display = 'none';
    } else {
        item.style.display = 'block';
    }
}

/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/



