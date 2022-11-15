alert(`Not finished yet, need few more Days :)`)


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
welcome_h1.className = "welcome_txt welcome_txt2";
welcome_h1.innerHTML = "Magical Library";
main_inner_div.append(welcome_h1);

// CATALOG DIV

const catalog_div = document.createElement(`div`);
catalog_div.className = "catalog_div";
main_div.after(catalog_div);

// CARD DIV

const card_div = document.createElement(`div`);
card_div.id = "card_div_id";
catalog_div.after(card_div);

fetch('../../assets/scripts/books.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data) {
    var mainContainer = document.getElementById("card_div_id");
    for (var i = 0; i < data.length; i++) {

      var div = document.createElement("div");

      var image_link_div = document.createElement("div")
      var image_link = document.createElement("img");
      var title = document.createElement("h2");
      var author_p = document.createElement("p");
      var price = document.createElement("p");

      div.appendChild(image_link_div)
      image_link_div.appendChild(image_link);
      image_link_div.after(title);
      title.after(author_p);
      author_p.after(price);

      image_link.src = data[i].imageLink;
      title.innerHTML = data[i].title;
      author_p.innerHTML = data[i].author;
      price.innerHTML = data[i].price + ` $`;

      div.id = "card_div_id_inner";
      image_link_div.id = "image_link_div";
      image_link.id = "image_id";
      title.id = "title_id";
      author_p.id = "author_id";
      price.id = "price_id";


      mainContainer.appendChild(div);
    }
}








// FOOTER DIV

const footer_div = document.createElement(`div`);
footer_div.className = "footer_div";
card_div.after(footer_div);