// document.querySelector("#products").addEventListener("click", function(){
//   window.location.href = "product.html";
//   console.log("gadasvla")
// });

// document.querySelector("#testBtn").addEventListener('click', function(){
//   console.log("afjlkajlfajf")
// })
// document.querySelector("#goToIndexButton").addEventListener("click", function(){
//   console.log("agja")
// })



// const el = document.getElementById('goToIndexButton');
// if (el) {
//   el.addEventListener('click', swapper, false);
// }

window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById('goToIndexButton');
  if (el) {
    el.addEventListener('click', function(){
      window.location.href = "index.html"
    });
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  const el = document.getElementById('products');
  if (el) {
    el.addEventListener('click', function(){
      window.location.href = "product.html"
    });
  }
});