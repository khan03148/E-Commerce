import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonComponent} from './ButtonComponent';
import {ProductConsumer} from '../Context';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                
                {(value) =>{
                 const {id,title,img,price,company,info,inCart} = value.detailProduct;
                return(
                <div className="container py-5">
                    {/* title */}
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                            <h1>{title}</h1>
                            </div>
                            
                        </div>
                     {/* end title */}

                    {/* product img */}
                    <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alt="product"/>

                            </div>

                        
                     {/* End product img */}
                      {/* product info */}
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2>Model : {title}</h2>
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">Made By: {company}</h4>
                            <h3 className="text-blue">Price:$ {price}</h3>
                            <p className="text-capitalize font-weight-bold mb-3 mb-1"><strong>Some infor about product:</strong> </p>
                            <p className="text-capitalize text-muted font-weight-bold mb-3 mb-1">{info} </p>
                      
                       {/* buttons */}
                       <Link to="/">
                       <ButtonComponent>Back to Home</ButtonComponent></Link>
                        
                       {/* send cart as props to styled ButtonComponent */}
                       <ButtonComponent cart disabled={inCart? true: false} onClick={ () => { value.addToCart(id);
                    value.modalOpen(id);}}>
                           {inCart?"InCart" : "Add to Cart"}
                       </ButtonComponent>
                        
                        {/* buttons */}
                        </div>
                        
                        

                    </div> 
                      {/* end product info */}
                </div>
                );
                }}
            </ProductConsumer>
        )
    }
}


