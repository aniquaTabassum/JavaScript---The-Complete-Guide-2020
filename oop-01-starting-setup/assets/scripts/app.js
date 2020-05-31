class Product{
    productName = "DEFAULT";
    productImage;
    productDescription;
    price;

    constructor(productName, productImage, productDescription, price){
        this.productName = productName
        this.productImage = productImage
        this.productDescription = productDescription
        this.price = price
    }

}

const allProducts = {
products : [
    new Product("Pillow",
    '/home/aniqua/Downloads/JavaScript/oop-01-starting-setup/assets/scripts/pillow.jpg',
     "A carpet you may like, or not",
    13.99),
    new Product("Carpet",
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
    "A carpet you may like, or not",
    83.99)
],

render() {
    const app = document.getElementById("app")
    const productList = document.createElement("ul")
    productList.className = "product-list"
    for(const product of this.products)
    {
        const listItem = document.createElement("li")
        listItem.className = "product-item"
        listItem.innerHTML = `
        <div>
          <img src="${product.productImage}" alt="${product.productName}" >
          <div class="product-item__content">
            <h2>${product.productName}</h2>
            <h3>\$${product.price}</h3>
            <p>${product.productDescription}</p>
            <button>Add to Cart</button>
          </div>
        </div>
        `
        productList.append(listItem)
    }
    app.append(productList)

}
}

allProducts.render()