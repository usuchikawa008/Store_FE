export class CartModel{
  constructor(item,totalQty, totalPrice, userId) {
    this.item = item;
    this.totalPrice = totalPrice;
    this.totalQty = totalQty;
    this.userId = userId;
  }
}
export default CartModel;
