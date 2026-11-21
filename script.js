let url = "https://robocode-json.artem4ikk02.workers.dev/sstasusho/sixseven/"
let productsArray = [];
let productsGrid = document.getElementById("products-grid");

fetch(url+"products")
.then(async function(response){
    let products = await response.json()
    productsArray = [];
    products.forEach(element => {
        productsArray.push(element);
        let pElem = document.createElement("div");
        pElem.classList.add("product");
        pElem.innerHTML = `
            <h2>${element.name}</h2>
            <img src="${element.photo_url}" alt="${element.name}">
            <p>${element.description}</p>
            <p>price: ${element.price}</p>
            <a href="userProfile.html?id=${element.author_id}" target="_blank">Seller Profile</a>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productsGrid.appendChild(pElem);
    });
})