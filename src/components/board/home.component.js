import React, { Component } from "react";

import HomeBanner from "../../components/HomeBanner";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import NewArrivals from "../../components/Products/NewArrivals";
import BestSeller from "../../components/Products/BestSeller";
import Benefit from "../../components/Benefit";
import Advertisement from "../../components/Advertisement";
import Product from "models/Product";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      modalShow: false,
      login: true, 
    
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
    
  ] 
  
    
  }
  

  componentDidMount() {
    // if (!this.props.products) {
      // this.props.getAllProducts();
      this.props = {
        products :[new Product(1, 'Áo Sơ mi', 'https://aladin.com.vn/media/product/3467_image_skincare_vital_c_antioxidant_hydrating_ace_serum_new2018.png', "Serum1", 123.000),
        new Product(2, 'Áo Sơ mi', 'https://aladin.com.vn/media/product/3467_image_skincare_vital_c_antioxidant_hydrating_ace_serum_new2018.png', "Serum1", 123.000)] 
      }
    // }
  }

  showHideModal = () => {
    this.setState({ modalShow: false });
  };

  loginClicked = () => {
    this.setState({ modalShow: true, login: true });
  };
  registerClicked = () => {
    this.setState({ modalShow: true, login: false });
  };

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
    const { products, departments } = this.props;
    console.log(this.products)
    return (
      <div>
        <HomeBanner />
        <CategoryBanner />
        {this.products ? (
          <NewArrivals
            products={this.products}
            departments={departments}
            addToBag={this.addToBag}
          />
        ) : null}
        <Benefit />
        <Advertisement />
        {this.products ? (
          <BestSeller
            products={this.products}
            departments={departments}
            addToBag={this.addToBag}
          />
        ) : null}
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