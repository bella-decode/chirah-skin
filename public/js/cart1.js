// cart
let carts = document.querySelectorAll('.cart-btn1');


// fetch data from products 
let  products = [
    {
      "id": 1,
      "incart":0,
      "title": "hair",
      "price": 130,
      "url": "/public/img/chriah2.jpg",
      
    },
    {
      "id": 2,
      "incart":0,
      "title": "Hair",
      "price": 210,
      "url": "/public/img/chriah2.jpg",
      
    },
    {
      "id": 3,
      "incart":0,
      "title": "Hair",
      "price": 90,
      "url": "/public/img/chriah-cart5.jpg",
      
    },
    {
      "id": 4,
      "incart":0,
      "title": "Hair",
      "price": 100,
      "url": "/public/img/chirah-cart2.jpg",
      
    },
    {
      "id": 5,
      "incart":0,
      "title": "Body",
      "price": 100,
      "url": "/public/img/chirah-cart1.jpg",
      
    },
    {
      "id": 6,
      "incart":0,
      "title": "Red",
      "price": 50,
      "url": "/public/img/chriah-chart3.jpg",
      
    },
    {
      "id": 7,
      "incart":0,
      "title": "Hair cream",
      "price": 1560,
      "url": "/public/img/chriah2.jpg",
      
    },
    {
      "id": 8,
      "incart":0,
      "title": "Body cream",
      "price": 1500,
      "url": "/public/img/chriah2.jpg",
      
    },
    {
      "id": 9,
      "incart":0,
      "title": "Cream",
      "price": 300,
      "url": "public/img/chriah2.jpg",
      
    },
    {
      "id": 10,
      "incart":0,
      "title": "ROG",
      "price": 3000,
      "url": "/public/img/chriah3.jpg",
      
    },
    {
      "id": 11,
      "incart":0,
      "title": "Body-lotion",
      "price": 700,
      "url": "/public/img/chirah-cart2.jpg",
      
    },
    {
      "id": 12,
      "incart":0,
      "title": "Body-White",
      "price": 500,
      "url": "/public/img/chirah-cart2.jpg",
      
    },
    {
      "id": 13,
      "incart":0,
      "title": "Body-lotion",
      "price": 900,
      "url": "public/img/chriah5.jpg",
      
    },
    {
      "id": 14,
      "incart":0,
      "title": "Hair-cream",
      "price": 100,
      "url": "public/img/chirah-cart2.jpg",
      
    },
    {
      "id": 15,
      "incart":0,
      "title": "Hair-cream",
      "price": 250,
      "url": "/public/img/chirah-cart1.jpg",
      
    },
    {
      "id": 16,
      "incart":0,
      "title": "Body-lotion",
      "price": 350,
      "url": "/public/img/chirah-cart.jpg",
      
    }
  ]

 let basket = [{
    
 }] ;

for ( let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products [i]);
        totalCost(products[i]);
        
    })
}

// cart number
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.icons span').textContent = productNumbers ;
    }

}


// localstorage
function cartNumbers(product ) {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        //adding product number to cart
        document.querySelector('.icons span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        //cart no
        document.querySelector('.icons span').textContent = 1;
    }
   
   setItems(product);
}

// json is coded here
function setItems(product) {
    let cartItems = localStorage.getItem('productIsInCart');
    cartItems = JSON.parse(cartItems);
    if(!cartItems){
        cartItems = [];
    }

   if(cartItems != null){

      if(cartItems[product.title] === undefined){
        cartItems ={
            ...cartItems,
            [product.title]: product
         }
    }
     cartItems [product.title].incart += 1;
   }else{
        product.incart = 1;
        cartItems ={
          [product.title]: product
       }
    }

    
    localStorage.setItem('productIsInCart', JSON.stringify 
    (cartItems));
}

//total of cart
function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    
    
    if(cartCost != null) {
       
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + 
        product.price);
    }
    else{
        localStorage.setItem('totalCost', product.price);
 
    }
    
        
}

// display cart
function displayCart() {
    let cartItems = localStorage.getItem('productIsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.cart-items');
    //total cost
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
          productContainer.innerHTML += `
         
          <div class="cart-row">
          <div class="cart-item cart-column">
              <img class="cart-item-image" src= ${item.url} width="100" height="100">
              <span class="cart-item-title">${item.title}</span>
          </div>
          <span class="cart-price cart-column"> ₦${ item.price}</span>
          <div class="cart-quantity cart-column">
                <i   onclick="decrement(${item.id})" class='bx bx-left-arrow-circle arrow-left' ></i>
                <span id=${item.id}>${item.incart}</span>
                <i  onclick="increment(${item.id})" class='bx bx-right-arrow-circle arrow-right' ></i>
                <i  onclick="increment(e)" class="bx bxs-trash-alt  btn-danger"></i>
             
          </div>
      </div>
      </div>

      
        

          `;
        });
       //total cost fuction
       productContainer.innerHTML += `
       <div class="cart-total">
       <strong class="cart-total-title total">Total</strong>
       <span class="cart-total-price"> ₦${cartCost}.00</span>
   </div>
   <button class="btn-primary btn-purchase" type="button">PURCHASE</button>
       `;
    }
}






// calling this fuction
onLoadCartNumbers();
displayCart();

