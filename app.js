//items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./img/item-1.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolores tempore odit, impedit dicta facilis!`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./img/item-2.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolores tempore odit, impedit dicta facilis!`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./img/item-3.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolores tempore odit, impedit dicta facilis!`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./img/item-4.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolores tempore odit, impedit dicta facilis!`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./img/item-5.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolores tempore odit, impedit dicta facilis!`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./img/item-6.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolores tempore odit, impedit dicta facilis!`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./img/item-7.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolores tempore odit, impedit dicta facilis!`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./img/item-8.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolores tempore odit, impedit dicta facilis!`,
  },
  {
    id: 9,
    title: "strawberry milkshake",
    category: "shakes",
    price: 16.99,
    img: "./img/item-9.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolores tempore odit, impedit dicta facilis!`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./img/item-10.jpg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolores tempore odit, impedit dicta facilis!`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

//Load all items
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `
            <article class="menu-item">
                <img src=${item.img} alt=${item.title} class="photo" />
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">$${item.price}</h4>  
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>
        `;
    }); 
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu; 
}

function displayMenuButtons() {
    const categories = menu.reduce(function(values, item) {
    if(!values.includes(item.category)) {
        values.push(item.category);
    }
    return values;
    },['all']);
    const categoryBtns = categories.map(function(category){
    return `
        <button class="filter-btn" type="button" data-id="${category}">${category}</button>
    `;
    }).join("");
    console.log(categoryBtns);
    container.innerHTML = categoryBtns;

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                if(menuItem.category === category) {
                    return menuItem;
                }
            });
            if(category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
      });
    });
}