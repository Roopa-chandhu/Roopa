document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Apples', price: 3 },
        { id: 2, name: 'Bananas', price: 2 },
        { id: 3, name: 'Carrots', price: 1 },
        { id: 4, name: 'Bread', price: 2 },
        { id: 5, name: 'Milk', price: 1.5 }
    ];

    const productList = document.getElementById('productList');
    const cartList = document.getElementById('cartList');
    const checkoutButton = document.getElementById('checkoutButton');

    let cart = [];

    function renderProducts() {
        productList.innerHTML = products.map(product => `
            <li>
                ${product.name} - $${product.price.toFixed(2)}
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </li>
        `).join('');
    }

    function renderCart() {
        cartList.innerHTML = cart.map(item => `
            <li>
                ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </li>
        `).join('');
        updateCheckoutButton();
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const cartItem = cart.find(item => item.id === productId);

        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        renderCart();
    }

    function removeFromCart(productId) {
        const cartItemIndex = cart.findIndex(item => item.id === productId);

        if (cartItemIndex > -1) {
            cart.splice(cartItemIndex, 1);
        }

        renderCart();
    }

    function updateCheckoutButton() {
        checkoutButton.disabled = cart.length === 0;
    }

    renderProducts();
});
