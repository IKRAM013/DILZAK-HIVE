let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    alert("Item added to cart 🛒");
}

function placeOrder() {
    if (cartCount === 0) {
        alert("Your cart is empty!");
    } else {
        alert("🎉 Order Placed Successfully!\nThank you for shopping at Dilzak Hive.");
        cartCount = 0;
        document.getElementById("cart-count").innerText = cartCount;
    }
}

function scrollToProducts() {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
}
