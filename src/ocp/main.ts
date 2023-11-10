/*
  Open/closed Principle
  Entidades dvevem estar abertas para extensão, mas fechadas para modificação.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercenteDiscount } from './classes/discount';

// const noDiscount = new NoDiscount();
const fiftyPercenteDiscount = new FiftyPercenteDiscount();
// const tenPercenteDiscount = new TenPercenteDiscount();
const shoppingCart = new ShoppingCart(fiftyPercenteDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('T-Shirt', 49.9));
shoppingCart.addItem(new Product('Notebook', 15.9));
shoppingCart.addItem(new Product('Pencil', 1.49));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
