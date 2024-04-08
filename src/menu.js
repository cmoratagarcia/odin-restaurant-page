function createMenuItem(name, description, price) {
  const menuItem = document.createElement("li");
  menuItem.classList.add("dish");

  const heading = document.createElement("h2");
  heading.innerText = name;

  const descParagraph = document.createElement("p");
  descParagraph.innerText = description;

  const priceParagraph = document.createElement("p");
  priceParagraph.innerText = `$${price}`;

  menuItem.appendChild(heading);
  menuItem.appendChild(descParagraph);
  menuItem.appendChild(priceParagraph);

  return menuItem;
}

function createMenuCategory(categoryName, items) {
  const category = document.createElement("div");
  category.classList.add("menu-category");

  const heading = document.createElement("h2");
  heading.innerText = categoryName;
  category.appendChild(heading);

  const itemList = document.createElement("ul");
  items.forEach((item) => {
    itemList.appendChild(
      createMenuItem(item.name, item.description, item.price)
    );
  });

  category.appendChild(itemList);
  return category;
}

function menu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuHead = document.createElement("h1");
  menuHead.innerText = "Menu";
  menu.appendChild(menuHead);

  const categories = [
    {
      name: "Starters",
      items: [
        {
          name: "Caprese Salad",
          description: "Fresh tomatoes, mozzarella, basil, balsamic glaze",
          price: 8.99,
        },
        {
          name: "Garlic Bread",
          description: "Crusty Italian bread, garlic butter, parsley",
          price: 5.99,
        },
      ],
    },
    {
      name: "Main Courses",
      items: [
        {
          name: "Spaghetti Carbonara",
          description: "Spaghetti, pancetta, eggs, parmesan, black pepper",
          price: 12.99,
        },
        {
          name: "Margherita Pizza",
          description: "Tomato sauce, mozzarella, fresh basil",
          price: 14.99,
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Tiramisu",
          description:
            "Coffee-soaked ladyfingers, mascarpone cheese, cocoa powder",
          price: 7.99,
        },
        {
          name: "Chocolate Brownie",
          description: "Warm chocolate brownie, vanilla ice cream",
          price: 6.99,
        },
      ],
    },
  ];

  categories.forEach((category) => {
    menu.appendChild(createMenuCategory(category.name, category.items));
  });

  return menu;
}

export default menu;
