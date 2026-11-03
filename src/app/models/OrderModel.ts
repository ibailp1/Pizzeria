import { ItemPedido } from "./ItemPedidoModel";

export class Order {
  public items: ItemPedido[];

  constructor(items: ItemPedido[]) {
    this.items = items;
  }
}