document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const productId = button.getAttribute('data-id');
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));

        
        let quantity = 1;
        if (button.classList.contains('double-quantity')) {
            quantity = 2; 
        }

        
        const product = {
            id: productId,
            name: productName,
            price: productPrice,
            quantity: quantity
        };

        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        
        const existingProductIndex = cart.findIndex(item => item.id === productId);
        if (existingProductIndex >= 0) {
            
            cart[existingProductIndex].quantity += quantity;
            alert(`${productName} quantity updated in the cart.`);
        } else {
            
            cart.push(product);
            alert(`${productName} added to the cart!`);
        }

        
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});