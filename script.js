const products = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
  { title: 'Sweater', price: 450 },
  { title: 'T-Shirt', price: 175 },
  { title: 'Jacket', price: 550 },
  { title: 'Shoes', price: 750 },
  { title1: 'Shoes', price1: 950 },
];

const renderProductItem = (title = 'product', price = 0) => {
  return `
            <div class="product">
              <a href="single__page.html"><img class="product__img" src="img/men/1937.png" alt="photo"></a>
                  <div class="product__content">
                        <a href="#" class="product__name">${title}</a>
                        <p class="product__price">$${price}</p>
                  </div>
                        <a href="#" class="product__add">Add to Cart</a>
                        <a href="#" class="product__add__XX"><img class="" src="img/men/1895.png"></a>
                        <a href="#" class="product__add__love"><img class="" src="img/men/1899.png"></a>
            </div>
        `;
};

const renderProductList = (list = [{ title: 'product', price: 0 }]) => {
  let productList = list.map(({ title, price }) => renderProductItem(title, price));
  document.querySelector('.product__box').innerHTML = productList.join(' ');

}
renderProductList(products)