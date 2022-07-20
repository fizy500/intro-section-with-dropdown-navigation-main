let selectField = document.getElementById("select-field");
let selectText = document.getElementById("select-text");
let options = document.getElementsByClassName("list-items");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrow-icon");
let navbar = document.getElementById("navbar");
let body = document.getElementById("body");
// Variables for second dropdown
let selectField2 = document.getElementById("select-field2");
let selectText2 = document.getElementById("select-text2");
let options2 = document.getElementsByClassName("list-items2");
let list2 = document.getElementById("list2");
let arrowIcon2 = document.getElementById("arrow-icon2");

selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
}
for (Option of options) {
  Option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");

  }
}

//For second dropdown

selectField2.addEventListener("click",()=> {
  list2.classList.toggle("hide");
  arrowIcon2.classList.toggle("rotate");
})
// for (Option of options2) {
  Option.addEventListener("click", () => {
    for (Option of options2);
    selectText2.innerHTML = this.textContent;
    list2.classList.toggle("hide");
    arrowIcon2.classList.toggle("rotate");
  })
// }
// if (selectField.click = true) {
//   list2.classList.toggle("hide");
// }
window.onscroll = function () { darken }

function darken() {
  if (body.scrollTop > 20)
    navbar.className = "transparent";
  }

