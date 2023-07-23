import React from "react";
import './orders.css'

const Orders = ({ orders, deleteOrder }) => {
    return (
        <>
            <span className="cart material-symbols-rounded">
                shopping_cart</span>
            <div className='selected-products'>
                {
                    orders?.map((sp, idx) =>
                        <div key={idx}>
                            <img src={sp.img} alt='' />
                            <div className="details">
                                <h3>{sp.title}</h3>
                                <p><sub>EGP </sub>{sp.price}</p>
                                <p><del>{sp.old}</del>{sp.off}% off</p>
                            </div>
                            <button className="btn" onClick={(e) => deleteOrder(sp, e, idx)}>Delete</button>
                            <hr />
                        </div>
                    )
                }
            </div>

        </>
    )
}
export default Orders;
