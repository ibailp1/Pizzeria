export class Pizza {
  public name: string;
  public price: number;
  public ingredients: string[];
  public image: string;
  public amount: number;

  constructor(name: string, price: number, ingredients: string[], image: string, amount: number) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.image = image;
    this.amount = amount;
  }
}