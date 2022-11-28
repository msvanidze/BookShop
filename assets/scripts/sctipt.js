alert(`Will finish in 3 hours :)`)


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
const catalog_div_left = document.createElement(`p`);
const catalog_div_right = document.createElement(`p`);
const catalog_div_cart = document.createElement(`div`);
const catalog_div_cart_top = document.createElement(`div`);
const catalog_div_cart_middle = document.createElement(`div`);
const catalog_div_cart_bottom = document.createElement(`div`);
const catalog_div_cart_top_p1 = document.createElement(`p`);
const catalog_div_cart_top_p2 = document.createElement(`p`);
const catalog_div_cart_top_close_btn = document.createElement(`input`);
const catalog_div_cart_bottom_button1 = document.createElement(`input`);
const catalog_div_cart_bottom_button2 = document.createElement(`input`);


catalog_div.className = "catalog_div";
catalog_div_left.className = "catalog_div_both catalog_div_left";
catalog_div_right.className = "catalog_div_both catalog_div_right";
catalog_div_cart.className = "catalog_div_cart";
catalog_div_cart_top.className = "catalog_div_cart_top";
catalog_div_cart_middle.className = "catalog_div_cart_middle";
catalog_div_cart_middle.id = "catalog_div_cart_middle_ID";
catalog_div_cart_bottom.className = "catalog_div_cart_bottom";
catalog_div_cart_top_p1.className = "catalog_div_cart_top_p1";
catalog_div_cart_top_p2.className = "catalog_div_cart_top_p2";
catalog_div_cart_top_p2.id = "catalog_div_cart_top_p2_ID";
catalog_div_cart_top_close_btn.className = "catalog_div_cart_top_close_btn";
catalog_div_cart_bottom_button1.className = "catalog_div_cart_bottom_button1";
catalog_div_cart_bottom_button2.className = "catalog_div_cart_bottom_button2";
catalog_div_cart_bottom_button2.id = "catalog_div_cart_bottom_button2_ID";


main_div.after(catalog_div);
catalog_div.appendChild(catalog_div_left);
catalog_div_left.after(catalog_div_right);
catalog_div_right.after(catalog_div_cart)
catalog_div_cart.appendChild(catalog_div_cart_top);
catalog_div_cart_top.after(catalog_div_cart_middle);
catalog_div_cart_middle.after(catalog_div_cart_bottom);
catalog_div_cart_top.appendChild(catalog_div_cart_top_p1);
catalog_div_cart_top_p1.after(catalog_div_cart_top_p2);
catalog_div_cart_top_p2.after(catalog_div_cart_top_close_btn);
catalog_div_cart_bottom.appendChild(catalog_div_cart_bottom_button1);
catalog_div_cart_bottom_button1.after(catalog_div_cart_bottom_button2);

catalog_div_cart_top_p1.innerHTML = "Total:";
catalog_div_cart_top_p2.innerHTML = "0" + " $";

catalog_div_cart_top_close_btn.type = "submit";
catalog_div_cart_top_close_btn.value = "X";

catalog_div_cart_bottom_button1.type = "submit";
catalog_div_cart_bottom_button2.type = "submit";

catalog_div_cart_bottom_button1.value = "Comfirm Order";
catalog_div_cart_bottom_button2.value = "Clear";

catalog_div_left.innerHTML = `Book Catalogue`;
catalog_div_right.innerHTML = `Your Cart ` + `0`;



catalog_div_right.addEventListener("click", function() {
  catalog_div_cart.style.visibility = "visible";
})
catalog_div_cart_top_close_btn.addEventListener("click", function() {
  catalog_div_cart.style.visibility = "hidden";
})
catalog_div_cart_bottom_button1.addEventListener("click", function() {
  window.location.href = '../../pages/delivery/index.html';
})

// CARD DIV

const card_div = document.createElement(`div`);
card_div.id = "card_div_id";
catalog_div.after(card_div);

fetch('../../assets/scripts/books.json')
  .then(response => {
    return response.json();
})
  .then(data => {
    let books = data;
    let id = 0;

  books.map(book => {

      id++;
      var mainContainer = document.getElementById("card_div_id");
      var div = document.createElement("div");
      var image_link_div = document.createElement("div")
      var image_link = document.createElement("img");
      var image_info = document.createElement("div");
      var image_info_content = document.createElement("p");
      var image_info_button = document.createElement("input");
      var bottom_div = document.createElement("div")
      var title = document.createElement("h2");
      var author_p = document.createElement("p");
      var price_cart_div = document.createElement("div")
      var price = document.createElement("p");
      var cart = document.createElement("input")
      var about_info = document.createElement("input")

      div.appendChild(image_link_div)
      image_link_div.appendChild(image_link);
      image_link.after(image_info);
      image_info.appendChild(image_info_content);
      image_link_div.after(bottom_div);
      image_info_content.after(image_info_button);
      bottom_div.appendChild(author_p);
      author_p.after(title);
      title.after(price_cart_div);
      price_cart_div.appendChild(price);
      price.after(about_info);
      about_info.after(cart);

      image_link.src = book.imageLink;
      title.innerHTML = book.title;
      author_p.innerHTML = book.author;
      price.innerHTML = book.price + ` $`;
      image_info_content.innerHTML = book.description;

      div.id = "card_div_id_inner";
      image_link_div.id = "image_link_div";
      image_link.id = "image_id";
      image_info.id = "image_info";
      bottom_div.id = "bottom_div";
      title.id = "title_id";
      author_p.id = "author_id";
      price_cart_div.id = "price_cat_div";
      price.id = "price_id";
      price.className = "price_class"

      about_info.id = "about_info";
      about_info.type = "submit";
      about_info.value = "Show more";
      cart.id = "cart";
      cart.type = "submit";
      cart.value = "Add to Cart"
      image_info_button.id = "image_info_button";
      image_info_button.type = "submit"
      image_info_button.value = "Close"

      about_info.addEventListener("click",function() {
        image_info.style.display = "block";
      });

      image_info_button.addEventListener("click", function() {
        image_info.style.display = "none";
      });

// Adding to the cart

      cart.onclick = function() {

        const catalog_div_cart_New_Item = document.createElement("div");
        catalog_div_cart_New_Item.className = "catalog_div_cart_New_Item";

        const catalog_div_cart_New_Item_img = document.createElement("img");
        catalog_div_cart_New_Item_img.src = `${book.imageLink}`;
        catalog_div_cart_New_Item_img.className = "catalog_div_cart_New_Item_img";
        catalog_div_cart_New_Item.appendChild(catalog_div_cart_New_Item_img);

        const catalog_div_cart_New_Item_title = document.createElement("p");
        catalog_div_cart_New_Item_title.innerHTML = `${book.title}`;
        catalog_div_cart_New_Item_title.className = "catalog_div_cart_New_Item_title";
        catalog_div_cart_New_Item.appendChild(catalog_div_cart_New_Item_title);

        const catalog_div_cart_New_Item_price = document.createElement("p");
        catalog_div_cart_New_Item_price.className = "catalog_div_cart_New_Item_price";
        catalog_div_cart_New_Item_price.innerHTML = `${book.price}` + "$";
        catalog_div_cart_New_Item.appendChild(catalog_div_cart_New_Item_price);

        const catalog_div_cart_New_Item_delete = document.createElement("button");
        catalog_div_cart_New_Item_delete.innerHTML = "&times;";
        catalog_div_cart_New_Item_delete.className = "catalog_div_cart_New_Item_delete";
        catalog_div_cart_New_Item.appendChild(catalog_div_cart_New_Item_delete);

        const total = document.getElementsByClassName("price_class");
        total.innerHTML = catalog_div_cart_New_Item.length;
        const cartAppend = document.getElementById("catalog_div_cart_middle_ID");
        cartAppend.append(catalog_div_cart_New_Item);

        // const price_class = document.getElementById("catalog_div_cart_top_p2_ID");
        // price_class.innerHTML = cartAppend.childNodes.length;
        // price_class.style.color = "red";

        const total_price = document.getElementById("catalog_div_cart_top_p2_ID");
        total_price.innerHTML = parseInt(total_price.innerHTML) + Number.parseInt(book.price) + "$";

        catalog_div_cart_New_Item_delete.onclick = function (){
          catalog_div_cart_New_Item_delete.closest("div").remove();
          price_class.innerHTML = cartAppend.childNodes.length;
          price_class.style.color = "red";
          total_price.innerHTML = `${parseInt(total_price.innerHTML) - Number.parseInt(book.price)}\$`;
            // if (price_class.innerHTML == 0) {
            //   price_class.style.color = "#8A8A8A";
            // }
        }

        const catalog_div_cart_bottom_button2_ID = document.getElementById("catalog_div_cart_bottom_button2_ID");
        catalog_div_cart_bottom_button2_ID.onclick = function() {
            cartAppend.innerHTML = "";
            total_price.innerHTML = 0 + "$";
            price_class.innerHTML = 0;
            // price_class.style.color = "#8A8A8A";
        }
    }







      mainContainer.appendChild(div);
    })




})

// FOOTER DIV

const footer_div = document.createElement(`div`);
const footer_txt = document.createElement(`p`)
const footer_txt_link = document.createElement(`a`)

footer_div.className = "footer_div";
footer_txt.className = "footer_txt";
footer_txt_link.className = "footer_txt_link";
footer_txt_link.href = "https://github.com/msvanidze";
footer_txt_link.innerHTML = "msvanidze" + " ©";

card_div.after(footer_div);
footer_div.appendChild(footer_txt);
footer_txt.after(footer_txt_link);