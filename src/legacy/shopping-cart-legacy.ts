type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty!!');
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `Your order has been received.. The total is $${this.total()}`,
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Message:', msg);
  }

  saveOrder(): void {
    console.log('Order successfully saved !!');
  }

  clear(): void {
    console.log('Shopping Cart has been cleared...');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'T-Shirt', price: 49.9 });
shoppingCart.addItem({ name: 'Notebook', price: 15.9 });
shoppingCart.addItem({ name: 'Pencil', price: 1.49 });
// shoppingCart.clear();

// console.log(shoppingCart.items);
// console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
