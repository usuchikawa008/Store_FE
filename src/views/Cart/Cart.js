/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import Heading from "../../components/Heading/Heading";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";
import CalculateTax from "../../utils/CalculateTax";
import EmptyCart from "../../assets/images/empty_cart.png";
import CartModel from "models/CartModel";
import Product from "models/Product";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.product1 = new Product(1, '', 'https://aladin.com.vn/media/product/3467_image_skincare_vital_c_antioxidant_hydrating_ace_serum_new2018.png', "BHA Silkygirl 55ml Gentle Eye & Lip", 499.000);
    this.product2 = new Product(2, '', 'https://bucket.nhanh.vn/4486ad-47955/ps/20210928_0UuDHNW2sPs18dXH8X7eHTYm.png', "Sữa rửa mặt L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml", 399.000);
      
    this.products =[ this.product1, this.product2]  
    this.cart = [
      new CartModel(this.product1, 2, 400.00, 'Tien'),
      new CartModel(this.product2, 1, 299.00, 'Tien')
    ]
    this.items = this.cart;
    this.totalPrice = 690.000
  }
  render() {
    const { postCart } = this.props;
    console.log(this.items);
    return (
      <div className="shopping--cart" data-aos="fade-up">
        <div className="container">
          <div className="shopping--cart--container">
            <div className="row ">
              <Heading title="Your Shopping Cart" data-aos="fade-up" />
            </div>
            <div style={{ height: 30 }}></div>
            <CartItem
              items={this.items || {}}
              handleClick={(pid, increase, decrease) =>
                postCart(pid, increase, decrease)
              }
            />
            {this.items !== undefined && this.items !== null ? (
              <div
                className="d-flex flex-column justify-content-end align-items-end"
                style={{ paddingRight: 50 }}
              >
                <p>
                  SubTotal :{" "}
                  <span style={{ color: "#FE4C50" }}>{this.totalPrice} VNĐ</span>
                </p>
                <p>
                  Shipping : <span style={{ color: "#FE4C50" }}>Free</span>
                </p>

                <p>
                  Taxes :{" "}
                  <span style={{ color: "#FE4C50" }}>
                    {CalculateTax(this.totalPrice).taxes} VNĐ
                  </span>
                </p>

                <h3 style={{ textAlign: "center" }}>
                  Total:{" "}
                  <span style={{ color: "#FE4C50" }}>
                    {CalculateTax(this.totalPrice).total} VNĐ
                  </span>
                </h3>
                <hr />

                <Button variant="danger" size="sm" style={{ marginTop: 30 }}>
                  Confirm Checkout
                </Button>
              </div>
            ) : (
              <div style={{ textAlign: "center" }}>
                <img
                  src={EmptyCart}
                  alt=""
                  style={{ maxHeight: 400, maxWidth: 400 }}
                  className="img-fluid"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
