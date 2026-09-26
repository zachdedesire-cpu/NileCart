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

function displayProducts(productList = products) {

    const container = document.getElementById("product-container");

    container.innerHTML = "";

    productList.forEach((product, index) => {

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

    document.getElementById("cart-count").textContent = cartCount;

    alert(
        products[index].name +
        " has been added to your cart!"
    );
}

function filterCategory(category) {

    const filtered = products.filter(
        product => product.category === category
    );

    displayProducts(filtered);

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}

function searchProducts() {

    const searchInput =
        document.getElementById("search-input")
        .value
        .toLowerCase();

    const results = products.filter(product =>
        product.name.toLowerCase().includes(searchInput) ||
        product.category.toLowerCase().includes(searchInput)
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

displayProducts();
