type CartItem = { name: string; price: number };

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private orderStatus: 'open' | 'closed' = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
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

    this.orderStatus = 'closed';
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

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'T-Shirt', price: 49.9 });
shoppingCart.addItem({ name: 'Notebook', price: 15.9 });
shoppingCart.addItem({ name: 'Pencil', price: 1.49 });
// shoppingCart.clear();

// console.log(shoppingCart.items);
// console.log(shoppingCart.total());
shoppingCart.checkout();
