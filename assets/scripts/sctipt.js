// // change the background color to red
// document.body.style.background = "red";

// // change it back after 1 second
// setTimeout(() => document.body.style.background = "", 1000);
// // setInterval(() => elem.hidden = !elem.hidden, 1000);


// let div = document.createElement(`div`); // create a new element

// div.className = "alert"; // setting class name to the new element

// div.innerHTML = "<strong>Hi there!</strong> You've read an important message."; // adding content to the new element

// document.body.append(div); // adding new element in the HTML

// Main DIV

const main_div = document.createElement(`div`);
main_div.className = "main_div";
document.body.append(main_div);

const main_inner_div = document.createElement(`div`);
main_inner_div.className = "main_inner_div";
main_div.prepend(main_inner_div);

const welcome_p1 = document.createElement(`p`);
welcome_p1.className = "welcome_txt";
welcome_p1.innerHTML = "Welcome to the amazing bookshop";
main_inner_div.prepend(welcome_p1);

const welcome_h1 = document.createElement(`h1`);
welcome_h1.className = "welcome_txt";
welcome_h1.innerHTML = "Magical Library";
main_inner_div.append(welcome_h1);

// CATALOG DIV

const catalog_div = document.createElement(`div`);
catalog_div.className = "catalog_div";
main_div.after(catalog_div);

// CARD DIV

const card_div = document.createElement(`div`);
card_div.className = "card_div";
catalog_div.after(card_div);

// const cards_X = document.createElement(`div`);
// cards_1.classList = "cards_X_1";




















// FOOTER DIV

const footer_div = document.createElement(`div`);
footer_div.className = "footer_div";
card_div.after(footer_div);