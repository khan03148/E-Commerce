import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Provider and consumer

export default class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
    cart: [],
    isModalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    //get fresh data without reference
    this.setProduct();
  }

  //setting product bcz its was passed by reference now we take copy of fresh data
  setProduct = () => {
    let tempProducts = [];

    storeProducts.forEach(item => {
      //we get single item and put it in tempProducts
      const singleItem = { ...item };

      //in tempProduct now we have 8 objects
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState(() => {
      return { prodcuts: tempProducts };
    });
  };

  //get specific item from products and pass it to diff funtions
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  //we get "id " from Product.js when click on image container
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let tempProduct = [...this.state.products];
    //get index only of specific product
    const index = tempProduct.indexOf(this.getItem(id));

    //put temProduct item with idex in product
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        //calback fun after adding to cart we call addtotals
        this.addTotals();
      }
    );
  };

  //model funtions start
  modalOpen = id => {
    const product = this.getItem(id);
    this.setState({
      modalProduct: product,
      isModalOpen: true
    });
  };
  modalClose = () => {
    this.setState(() => {
      return { isModalOpen: false };
    });
  };
  //model funtions Ends

  //cart funtions start
  increment = id => {
    //take cart copy from statee
    let tempProduct = [...this.state.cart];
    //onclick we get id from cart component and then get sepecific item
    const selectedProduct = tempProduct.find(item => item.id === id);
    
    const index = tempProduct.indexOf(selectedProduct);
    //after getting index we change it values in product.count etc
    const product = tempProduct[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    //set state after this and call addTotal() to update 
    this.setState(
      () => {
        return { cart: [...tempProduct] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    let tempProduct = [...this.state.cart];
    const selectedProduct = tempProduct.find(item => item.id === id);
    const index = tempProduct.indexOf(selectedProduct);
    const product = tempProduct[index];
    product.count = product.count -1;
    if(product.count ===0){
      this.removeItem(id);
    }
    else{
      product.total = product.count * product.price;

      this.setState(
        () => {
          return { cart: [...tempProduct] };
        },
        () => {
          this.addTotals();
        }
      );
    }

  };

  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    //get tempcart after remove item the id we get
    tempCart = tempCart.filter(item => item.id !== id);

    //we send id to getItem and get index and then change it using its index
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.total = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return {
          cart: tempCart,
          prodcuts: [...tempProducts]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        //both fun calls to reset products and addtotals to add again to cart
        this.setProduct();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    //convert string to float upto 2 points decimal using tofixed
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState({
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    });
  };

  //cart funtions End

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          modalOpen: this.modalOpen,
          modalClose: this.modalClose,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
