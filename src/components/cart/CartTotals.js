import React from "react";
import { Link } from "react-router-dom";
import PaypalButton from './PaypalButton';


export default function CartTotals({ value,history }) {
  const { cartTax, cartSubTotal, cartTotal, clearCart } = value;
  console.log('history' ,history);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              onClick={() => clearCart()}
            >
              Clear Cart
            </button>
          </Link>
          <h5>
            <span className="text-title">Sub-total:</span>
            <strong>${cartSubTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">Tax:</span>
            <strong>${cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">Total:</span>
            <strong>$ {cartTotal}</strong>
            
          </h5>
          <PaypalButton history={history} cartTotal={cartTotal} clearCart={clearCart}/>
        </div>
      </div>
    </div>
  );
}

