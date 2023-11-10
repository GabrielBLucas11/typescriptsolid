export abstract class Discount {
  protected discount = 0;

  calculateDiscount(price: number): number {
    return price - price * this.discount;
  }
}

export class FiftyPercenteDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercenteDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}
