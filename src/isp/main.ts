/*
  Interface Segregation Principle (Princípio da Segregação de Interface) -
  Os clientes não devem ser forçados a depender de interfaces que não utilizam
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercenteDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

// const noDiscount = new NoDiscount();
const fiftyPercenteDiscount = new FiftyPercenteDiscount();
// const tenPercenteDiscount = new TenPercenteDiscount();
const shoppingCart = new ShoppingCart(fiftyPercenteDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const customer = new IndividualCustomer('Gabriel', 'Lucas', '111.111.111-11');
const order = new Order(shoppingCart, messaging, persistency, customer);

shoppingCart.addItem(new Product('T-Shirt', 49.9));
shoppingCart.addItem(new Product('Notebook', 15.9));
shoppingCart.addItem(new Product('Pencil', 1.49));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
