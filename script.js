let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert("Royal item added to cart 👑");
}

function placeOrder() {
    if (cartCount === 0) {
        alert("Your royal cart is empty!");
    } else {
        alert("👑 Royal Order Placed Successfully!\nThank you for choosing Dilzak Hive.");
        cartCount = 0;
        document.getElementById("cart-count").innerText = cartCount;
    }
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}
