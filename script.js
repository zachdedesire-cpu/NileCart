let cartCount = 0;

const products = [
    {
        name: "Smartphone",
        category: "Electronics",
        price: "$120",
        icon: "📱"
    },
    {
        name: "Men's Shirt",
        category: "Fashion",
        price: "$18",
        icon: "👕"
    },
    {
        name: "Modern Chair",
        category: "Home",
        price: "$45",
        icon: "🪑"
    },
    {
        name: "Beauty Set",
        category: "Beauty",
        price: "$25",
        icon: "💄"
    },
    {
        name: "Fresh Groceries",
        category: "Food",
        price: "$15",
        icon: "🍎"
    },
    {
        name: "Motorcycle",
        category: "Vehicles",
        price: "$850",
        icon: "🏍️"
    }
];

function displayProducts(list) {

    const container =
        document.getElementById("product-container");

    if (!container) {
        console.error("Product container not found.");
        return;
    }

    container.innerHTML = "";

    list.forEach((product, index) => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">
                ${product.icon}
            </div>

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="product-category">
                    ${product.category}
                </p>

                <p class="price">
                    ${product.price}
                </p>

                <button
                    class="add-cart"
                    onclick="addToCart(${index})">
                    Add to Cart
                </button>

            </div>
        `;

        container.appendChild(card);
    });
}

function addToCart(index) {

    cartCount++;

    const cartCounter =
        document.getElementById("cart-count");

    if (cartCounter) {
        cartCounter.textContent = cartCount;
    }

    alert(
        products[index].name +
        " has been added to your cart!"
    );
}

function filterCategory(category) {

    const filteredProducts =
        products.filter(
            product => product.category === category
        );

    displayProducts(filteredProducts);

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}

function searchProducts() {

    const input =
        document.getElementById("search-input");

    const searchTerm =
        input.value.toLowerCase().trim();

    if (searchTerm === "") {
        displayProducts(products);
        return;
    }

    const results =
        products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );

    displayProducts(results);

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}

function scrollToProducts() {

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}

function scrollToCategories() {

    document.getElementById("categories")
        .scrollIntoView({
            behavior: "smooth"
        });
}

document.addEventListener("DOMContentLoaded", function () {

    displayProducts(products);

});
