// fetch data from products json

const getProducts = async () => {
  try {
    const results = await fetch('/public/data/products.json');
    const data = await results.json();
    const products = data.products;
    return products;
  } catch (err) {
    console.log(err);
  }
};
  
  const ProductsWrapper = document.getElementById('products');
  
  window.addEventListener('DOMContentLoaded', async function () {
    let products = await getProducts();
    products = products.filter((product) => product.category === 'Dresses');
    displayProductItems(products);
    loadData();
  });
  
  /* ========== Display Products =========== */
  const displayProductItems = (items) => {
    let displayProduct = items.map(
      (product) => `
                  <div class="swiper-slide">
                <div class="product">
                  <div class="top d-flex">
                    <img src=${product.url} alt="" />
                  </div>
                  <div class="bottom">
                  <div class="d-flex">
                    <h4 class"p-titles">${product.title}</h4>
                    <div class="btn cart-btn1">Add to Cart</div>
                    </div>
                    <div class="d-flex">
                      <div class="price">₦${product.price}</div>
                      <div class="rating">
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                    `
    );
  
    displayProduct = displayProduct.join('');
    ProductsWrapper.innerHTML = displayProduct;
  };
  
  
  
  
  /* ========== Categories Products =========== */
  
  const categoriesProducts = document.querySelector('.categories .products');
  const loadmore = document.querySelector('.loadmore');
  
  let currentIndex = 0;
  async function loadData() {
    let maxResult = 8;
    let products = await getProducts();
    if (currentIndex >= products.length) {
      loadmore.disabled = true;
      loadmore.innerText = 'No More Products';
      return;
    }
  
    for (var i = 0; i < maxResult; i++) {
      const product = products[i + currentIndex];
      categoriesProducts.insertAdjacentHTML(
        'beforeend',
        `<div class="product">
            <div class="top d-flex">
              <img src=${product.url}  alt="" />
            </div>
            <div class="bottom">
              <div class="d-flex">
                <h4 class"p-titles">${product.title}</h4>
                <div class="btn cart-btn1">Add to Cart</div>
              </div>
              <div class="d-flex">
                <div class="price">₦${product.price}</div>
                <div class="rating">
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </div>
              </div>
            </div>
          </div>`
      );
    }
  
    currentIndex += maxResult;
  }
  
  loadmore.addEventListener('click', loadData);
  