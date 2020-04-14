import React, { Component } from "react";

import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import { ButtonComponent } from "./ButtonComponent";

import styled from "styled-components";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { isModalOpen, modalClose } = value;
          const { img, title, price } = value.modalProduct;
          if (!isModalOpen ) {
            return null;
          } else {
            return (
              <ModalWrapper>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h4>{title}</h4>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">Price: $ {price}</h5>
                      <Link to="/">
                        <ButtonComponent onClick={()=> modalClose()}>Store</ButtonComponent>
                      </Link>
                      <Link to="/cart">
                        <ButtonComponent cart onClick={()=> modalClose()}>To Cart</ButtonComponent>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalWrapper>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
//use capital letter for Styled components
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  #modal {
    background: var(--mainWhite);
  }
`;
