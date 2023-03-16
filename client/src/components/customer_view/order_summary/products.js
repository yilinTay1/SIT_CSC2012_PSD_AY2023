// import product1 from "client/public/static/images/customer_view/cartlist/mcd/burger1.jpg"
// import product2 from "client/public/static/images/customer_view/cartlist/mcd/chickensalad1.jpg"
// import product3 from "client/public/static/images/customer_view/cartlist/mcd/pancake1.jpg"
// import product4 from "client/public/static/images/customer_view/cartlist/sushi/cali.jpg"
// import product5 from "client/public/static/images/customer_view/cartlist/sushi/handroll.jpg"
// import product6 from "client/public/static/images/customer_view/cartlist/sushi/maki.jpg"
import React from 'react';
import ReactDOM from 'react-dom';
import Cart1 from './Cart1';



export const PRODUCTS =[
{
    id:1,
    productName:"CheeseBurger",
    description: "cheese burger without cheese",
    restaurant: "McDonald",
    productImage: "/static/images/customer_view/cartlist/mcd/burger1.jpg",
    price:2.5,
},
{
    id:2,
    productName:"ChickenSalad",
    description: "Chicken Salad without chicken",
    restaurant: "McDonald",
    productImage: "/images/customer_view/cartlist/mcd/chickensalad1.jpg",
    price:7.0,
},
{
    id:3,
    productName:"Pancake",
    description: "Pancake without sausages",
    restaurant: "McDonald",
    productImage: "/static/images/customer_view/cartlist/mcd/pancake1.jpg",
    price:6.0,
},
{
    id: 4,
    name: "California Roll",
    description: "All time favourite california roll without crabstick",
    restaurant: "Sushi Express",
    productImage: "/static/images/customer_view/cartlist/sushi/cali.jpg",
    price: 7.8,
  },
  {
    id: 5,
    name: "Handroll Sushi",
    description: "Our signature handroll sushi without tuna",
    restaurant: "Sushi Express",
    productImage: "/static/images/customer_view/cartlist/sushi/handroll.jpg",
    price: 6.5,
  },
  {
    id: 6,
    name: "Maki Sushi",
    description: "Maki sushi! One of our most popular sushi but without avocado",
    restaurant: "Sushi Express",
    productImage: "/static/images/customer_view/cartlist/sushi/maki.jpg",
    price: 6.9,
}
]
ReactDOM.render(
    <Cart1 items={PRODUCTS} />,
    document.getElementById('root')
  );