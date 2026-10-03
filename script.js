function showMessage() {
  alert("Welcome to Handmade India!");
}

function addToCart(productName) {
  alert(productName + " added to cart!");
}

function searchProducts() {
  var input = document.getElementById("search").value.toLowerCase();
  var products = document.getElementsByClassName("product");

  for (var i = 0; i < products.length; i++) {
    var productName = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

    if (productName.includes(input)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}
