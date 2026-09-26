let cartCount = 0;

const products = [
    {
        id: 1,
        name: "Samsung Galaxy Smartphone",
        category: "Electronics",
        price: 1,500,
        image: "images/smartphone.jpg",
        description: "A modern smartphone suitable for everyday communication, entertainment and business."
    },

    {
        id: 2,
        name: "Men's Casual Shirt",
        category: "Fashion",
        price: 18,
        image: "images/shirt.jpg",
        description: "Comfortable casual shirt suitable for everyday wear."
    },

    {
        id: 3,
        name: "Modern Home Chair",
        category: "Home",
        price: 45,
        image: "images/chair.jpg",
        description: "A stylish chair designed for homes, offices and businesses."
    },

    {
        id: 4,
        name: "Beauty Care Set",
        category: "Beauty",
        price: 25,
        image: "images/beauty.jpg",
        description: "A personal beauty-care set for everyday use."
    },

    {
        id: 5,
        name: "Fresh Grocery Package",
        category: "Food",
        price: 15,
        image: "images/grocery.jpg",
        description: "A convenient grocery package for everyday household needs."
    },

    {
        id: 6,
        name: "Motorcycle",
        category: "Vehicles",
        price: 850,
        image: "images/motorcycle.jpg",
        description: "A practical motorcycle suitable for transportation and business use."
    }
];


function displayProducts(list = products) {

    const container =
        document.getElementById("product-container");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <p class="no-products">
                No products found.
            </p>
        `;

        return;
    }


    list.forEach(product => {

        const card =
            document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.style.display='none'; this.parentElement.innerHTML='🛍️';"
                >

            </div>

            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>

                <h3>
                    ${product.name}
                </h3>

                <p class="price">
                    $${product.price}
                </p>

                <p class="product-description">
                    ${product.description}
                </p>

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})">

                    Add to Cart

                </button>

            </div>

        `;

        container.appendChild(card);
    });
}


function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );

    if (!product) {
        return;
    }

    cartCount++;

    const cartCounter =
        document.getElementById("cart-count");

    if (cartCounter) {
        cartCounter.textContent = cartCount;
    }

    alert(
        product.name +
        " has been added to your cart!"
    );
}


function filterCategory(category) {

    const filteredProducts =
        products.filter(
            product =>
                product.category === category
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

            product.name
                .toLowerCase()
                .includes(searchTerm) ||

            product.category
                .toLowerCase()
                .includes(searchTerm)

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


document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayProducts(products);

    }
);
