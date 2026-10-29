
const menuBtn = document.getElementById("menuBtn");
const categories = document.getElementById("categories");
const searchBtn = document.getElementById("searchBtn");
const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

const products = [
    { name: "Pure Ghee", description: "Traditional dairy goodness", link: "#ghee" },
    { name: "Natural Honey", description: "A golden touch of nature", link: "#honey" },
    { name: "Gift Combos", description: "Special gifts for loved ones", link: "#combos" },
    { name: "Premium Gifting", description: "Thoughtful gifting options", link: "#gifting" }
];

/* Mobile menu */
menuBtn.addEventListener("click", function () {
    categories.classList.toggle("open");

    const isOpen = categories.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
});

/* Close mobile menu after choosing a category */
categories.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        categories.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

/* Search panel */
searchBtn.addEventListener("click", function () {
    searchPanel.classList.toggle("open");

    if (searchPanel.classList.contains("open")) {
        searchInput.focus();
    } else {
        searchInput.value = "";
        searchResults.innerHTML = "";
    }
});

/* Live product search */
searchInput.addEventListener("input", function () {
    const query = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = "";

    if (!query) {
        return;
    }

    const matches = products.filter(function (product) {
        return (
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
    });

    if (matches.length === 0) {
        searchResults.innerHTML =
            '<p class="no-results">No matching products found.</p>';
        return;
    }

    matches.forEach(function (product) {
        const link = document.createElement("a");
        link.className = "search-result";
        link.href = product.link;
        link.textContent = product.name + " — " + product.description;
        searchResults.appendChild(link);
    });
});
