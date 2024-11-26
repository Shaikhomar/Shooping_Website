// Handle login
function login() {
    alert("Login successful!");
  }
  
  // Handle signup
  function signup() {
    alert("Signup successful!");
  }
  
  // Load product details from XML file and display in the product list
  document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "products.xml", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var xml = xhr.responseXML;
        var products = xml.getElementsByTagName("product");
        var productList = document.getElementById("product-list");
        for (var i = 0; i < products.length; i++) {
          var name = products[i].getElementsByTagName("name")[0].textContent;
          var brand = products[i].getElementsByTagName("brand")[0].textContent;
          var price = products[i].getElementsByTagName("price")[0].textContent;
          
          var productDiv = document.createElement("div");
          productDiv.innerHTML = "<h3>" + name + "</h3><p>Brand: " + brand + "</p><p>Price: " + price + "</p>";
          productList.appendChild(productDiv);
        }
      }
    };
    xhr.send();
  });
  