/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import SingleProduct from "../../components/Products/SingleProduct";
// import Auth from "../../modules/Auth/Auth";
// import LoginRegister from "../../components/LoginRegisterModal/LoginRegister";
// import Filter from "./components/Filter";
import Product from "models/Product";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // products: this.props.products,
      // productsBAK: this.props.products,
      // departments: this.props.departments,
      modalShow: false,
      login: true
    };
    this.addToBag = this.addToBag.bind(this);
    this.products =[
      new Product(1, '', 'https://aladin.com.vn/media/product/3467_image_skincare_vital_c_antioxidant_hydrating_ace_serum_new2018.png', "BHA Silkygirl 55ml Gentle Eye & Lip", 499.000),
      new Product(2, '', 'https://bucket.nhanh.vn/4486ad-47955/ps/20210928_0UuDHNW2sPs18dXH8X7eHTYm.png', "Sữa rửa mặt L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml", 399.000),
      new Product(3, '', 'https://sacmoclan.net/wp-content/uploads/2021/03/chong-nang-laroche-posay-1024x1024.png', "Kem chống nắng Silkygirl 55ml Gentle Eye & Lip", 245.000),
      new Product(4, '', 'https://cdn.cocolux.com//2021/07/products/1626834812825-sua-rua-mat-jeju-innisfree-1-600x600.jpeg', "Kem chống nắng Innisfree  Mịn Lì 15 Fair Clair 6.8ml Fit Me Concealer #15", 319.000),
      new Product(5, '', 'https://bizweb.dktcdn.net/100/407/286/products/71jfsfnm0is-sl1500.jpg?v=1622199766320', "Nước Tẩy Trang Mắt Môi Silkygirl 55ml Gentle Eye & Lip", 199.000),
      new Product(6, '', 'https://aladin.com.vn/media/product/3467_image_skincare_vital_c_antioxidant_hydrating_ace_serum_new2018.png', "Serum Timeless Vitamin B5 Làm Dịu & Phục Hồi Da 30ml Vitamin B5 Serum", 176.000),
      new Product(7, '', 'https://beautyplaceblog.com/wp-content/uploads/2021/06/nuoc-tay-trang-LOreal-Paris-Micellar-Water-3-In-1-Moisturizing.jpg', "Nước Tẩy Trang L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml", 123.000),
      new Product(8, '', 'https://drceutics.vn/wp-content/uploads/2022/04/drceutics-serum-bha-30ml.png', "Serum Klairs Vitamin C Dưỡng Sáng Da, Mờ Thâm 35ml Freshly Juiced Vitamin Drop", 289.000),
      new Product(9, '', 'https://toplist.vn/images/800px/cover-girl-254197.jpg', "Kem Che Khuyết Điểm Maybelline Mịn Lì 15 Fair Clair 6.8ml Fit Me Concealer #15 Fair Clair", 119.000),
      new Product(10, '', 'https://bucket.nhanh.vn/4486ad-47955/ps/20210928_0UuDHNW2sPs18dXH8X7eHTYm.png', "Sữa rửa mặt Silkygirl 55ml Gentle Eye & Lip", 399.000),
      new Product(11, '', 'https://cdn.cocolux.com//2021/07/products/1626834812825-sua-rua-mat-jeju-innisfree-1-600x600.jpeg', "Kem chống nắng Klairs Vitamin C Dưỡng Sáng Da, Mờ Thâm 35ml ", 319.000),
      new Product(12, '', 'https://aladin.com.vn/media/product/3467_image_skincare_vital_c_antioxidant_hydrating_ace_serum_new2018.png', "BHA Silkygirl 55ml Gentle Eye & Lip", 499.000),
      new Product(13, '', 'https://bucket.nhanh.vn/4486ad-47955/ps/20210928_0UuDHNW2sPs18dXH8X7eHTYm.png', "Sữa rửa mặt L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml", 399.000),
      new Product(14, '', 'https://sacmoclan.net/wp-content/uploads/2021/03/chong-nang-laroche-posay-1024x1024.png', "Kem chống nắng Silkygirl 55ml Gentle Eye & Lip", 245.000),
      new Product(15, '', 'https://cdn.cocolux.com//2021/07/products/1626834812825-sua-rua-mat-jeju-innisfree-1-600x600.jpeg', "Kem chống nắng Innisfree  Mịn Lì 15 Fair Clair 6.8ml Fit Me Concealer #15", 319.000),
      new Product(16, '', 'https://bizweb.dktcdn.net/100/407/286/products/71jfsfnm0is-sl1500.jpg?v=1622199766320', "Nước Tẩy Trang Mắt Môi Silkygirl 55ml Gentle Eye & Lip", 199.000),
      ]  
  }
  // componentDidMount() {
  //   if (!this.props.products) {
  //     this.props.getAllProducts();
  //   }
  // }
  // showHideModal = () => {
  //   this.setState({ modalShow: false });
  // };

  // loginClicked = () => {
  //   this.setState({ modalShow: true, login: true });
  // };
  // registerClicked = () => {
  //   this.setState({ modalShow: true, login: false });
  // };

  addToBag = params => {
    // if (
    //   Auth.getUserDetails() !== undefined &&
    //   Auth.getUserDetails() !== null &&
    //   Auth.getToken() !== undefined
    // ) {
    //   let cart = this.props.postCart(params);
    //   cart.then(res => {
    //     console.log(res);
    //   });
    // } else {
      this.setState({ modalShow: true });
    // }
  };

  render() {
    // const { products, applyFilters } = this.props;
    // console.log(this.props);
    return (
      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">
            

            {/* <div className="sidebar">
              <Filter applyFilters={applyFilters} />
            </div> */}
            <div className="main_content">
              <div class="products_iso">
                <div class="row">
                  <div class="col">
                    <div class="product_sorting_container product_sorting_container_top">
                      <ul class="product_sorting">
                        <li>
                          <span class="type_sorting_text">Default Sorting</span>
                          <i class="fa fa-angle-down"></i>
                          <ul class="sorting_type">
                            <li
                              class="type_sorting_btn"
                              data-isotope-option='{ "sortBy": "original-order" }'
                            >
                              <span>Default Sorting</span>
                            </li>
                            <li
                              class="type_sorting_btn"
                              data-isotope-option='{ "sortBy": "price" }'
                            >
                              <span>Price</span>
                            </li>
                            <li
                              class="type_sorting_btn"
                              data-isotope-option='{ "sortBy": "name" }'
                            >
                              <span>Product Name</span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span>Show</span>
                          <span class="num_sorting_text">16</span>
                          <i class="fa fa-angle-down"></i>
                          <ul class="sorting_num">
                            <li class="num_sorting_btn">
                              <span>4</span>
                            </li>
                            <li class="num_sorting_btn">
                              <span>8</span>
                            </li>
                            <li class="num_sorting_btn">
                              <span>16</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div class="pages d-flex flex-row align-items-center">
                        <div class="page_current">
                          <span>1</span>
                          <ul class="page_selection">
                            <li>
                              <a href="#">1</a>
                            </li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                          </ul>
                        </div>
                        <div class="page_total">
                          <span>of</span> 3
                        </div>
                        <div id="next_page" class="page_next">
                          <a href="#">
                            <i class="fas fa-long-arrow-alt-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {this.products &&
                    this.products.slice(0, 16).map((item, index) => {
                      return (
                        <div
                          className="col-lg-3 col-sm-6"
                          key={index}
                          data-aos="zoom-in"
                        >
                          <SingleProduct
                            productItem={item}
                            addToBag={this.addToBag}
                          />
                        </div>
                      );
                    })}
                </div>
                <div class="product_sorting_container product_sorting_container_bottom clearfix">
                  <ul class="product_sorting">
                    <li>
                      <span>Show:</span>
                      <span class="num_sorting_text">04</span>
                      <i class="fa fa-angle-down"></i>
                      <ul class="sorting_num">
                        <li class="num_sorting_btn">
                          <span>01</span>
                        </li>
                        <li class="num_sorting_btn">
                          <span>02</span>
                        </li>
                        <li class="num_sorting_btn">
                          <span>03</span>
                        </li>
                        <li class="num_sorting_btn">
                          <span>04</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <span class="showing_results">Showing 1–3 of 12 results</span>
                  <div class="pages d-flex flex-row align-items-center">
                    <div class="page_current">
                      <span>1</span>
                      <ul class="page_selection">
                        <li>
                          <a href="#">1</a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                      </ul>
                    </div>
                    <div class="page_total">
                      <span>of</span> 3
                    </div>
                    <div id="next_page_1" class="page_next">
                      <a href="#">
                        <i
                          class="fas fa-long-arrow-right"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <LoginRegister
          show={this.state.modalShow}
          login={this.state.login}
          registerClicked={() => this.registerClicked()}
          loginClicked={() => this.loginClicked()}
          onHide={() => this.showHideModal()}
        /> */}
      </div>
    );
  }
}

export default Category;
