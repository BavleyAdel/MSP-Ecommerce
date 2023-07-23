import React from "react";
import './products.css'

const Products = ({products,addToCart}) => {
    return (
        <>
            <div className='products'>
                {
                    products?.map((p,idx) =>
                        <div className='product-card' key={idx}>
                            <img src={p.img} alt="" />
                            <div className="details">
                                <h3>{p.title}</h3>
                                <p><sub>EGP </sub>{p.price}</p>
                                <p><del>{p.old}</del>{p.off}% off</p>
                            </div>
                            <button className="btn" onClick={(e)=>addToCart(e,p)}>Add to Cart</button>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Products;
