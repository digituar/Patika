const menu = [{
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];

function InitializePage() {
    var menuItems = ["All"];

    menu.forEach((item) => {
        if (!menuItems.includes(item.category)) {
            menuItems.push(item.category);
        }
    });

    var categoryButtonList = [];

    menuItems.forEach((categoryName) => {
        var categoryButton = document.createElement("button");
        categoryButton.id = `category-btn-${categoryName}`;
        categoryButton.innerText = categoryName;
        categoryButton.className = "btn btn-outline-dark btn-item";
        categoryButton.setAttribute("category", categoryName);
        categoryButton.addEventListener("click", onCategoryChange);

        categoryButtonList.push(categoryButton);
    });

    var categoryButtonContainer = document.querySelector(".btn-container");

    categoryButtonList.forEach((categoryButton) => {
        categoryButtonContainer.append(categoryButton);
    });

    let menuItemsList = updateMenu("All");
    updatePage(menuItemsList);
}

let onCategoryChange = (event) => {
    selectedCategory = event.target.getAttribute("category");
    console.log(selectedCategory);
    let menuItems = updateMenu(selectedCategory);
    updatePage(menuItems);
};

let updatePage = (list) => {
    let menuSection = document.querySelector(".section-center");
    menuSection.innerHTML = "";
  
    list.forEach((list) => {
        menuSection.appendChild(list);
    });
}

let updateMenu = (category) => {
    var menuItemList = [];
    
    var filteredMenu = category === "All" ? menu : 
    menu.filter((item) => {
        return item.category === category;
    });
    
    filteredMenu.forEach((list) => {
        let menuItem = document.createElement("div");
        menuItem.setAttribute("class", "menu-items col-md-6 col-sm-12");
        
        let menuImage = document.createElement("img");
        menuImage.setAttribute("src", list.img);
        menuImage.setAttribute("alt", list.title);
        menuImage.setAttribute("class", "photo");

        let menuInfo = document.createElement("div");
        menuInfo.setAttribute("class", "menu-info");

        let menuTitle = document.createElement("div");
        menuTitle.setAttribute("class", "menu-title");
        
        let menuText = document.createElement("div");
        menuText.setAttribute("class", "menu-text");
        menuText.innerText = list.desc;

        let titleHeader = document.createElement("h4");
        titleHeader.innerText = list.title;
        let price = document.createElement("h4");
        price.innerText = list.price;
        price.setAttribute("class", "price");

        menuTitle.appendChild(titleHeader)
        menuTitle.appendChild(price);
        menuInfo.appendChild(menuTitle)
        menuInfo.appendChild(menuText);
        menuItem.appendChild(menuImage);
        menuItem.appendChild(menuInfo);
        menuItemList.push(menuItem);
    });
    return menuItemList;
}

InitializePage();