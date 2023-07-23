import React, { useState } from "react";
import './ecommerce.css'
import mspLogo from '../images/MSPLogo.svg'
import bag from '../images/bag.jpg'
import camera from '../images/camera.jpg'
import chairs from '../images/chairs.jpg'
import coffeeCups from '../images/coffeeCups.jpg'
import curtain from '../images/curtain.jpg'
import cushion from '../images/cushion.jpg'
import dress from '../images/dress.jpg'
import gloves from '../images/gloves.jpg'
import hat from '../images/hat.jpg'
import lamp from '../images/lamp.jpg'
import pants from '../images/pants.jpg'
import shoes from '../images/shoes.jpg'
import sunglasses from '../images/sunglasses.jpg'
import towel from '../images/towel.jpg'
import t_shirts from '../images/t-shirts.jpg'
import Products from "../Products/products";
import Orders from "../orders/orders";
const Ecommerce = () => {

    let products = [
        { title: "Chairs", img: chairs, price: 200, old: 30, off: 10 },
        { title: "Coffee Cups", img: coffeeCups, price: 100, old: 20, off: 10 },
        { title: "Curtain", img: curtain, price: 210, old: 32, off: 15 },
        { title: "Cushion", img: cushion, price: 370, old: 50, off: 27 },
        { title: "Dress", img: dress, price: 250, old: 30, off: 18 },
        { title: "Gloves", img: gloves, price: 120, old: 40, off: 7 },
        { title: "Hat", img: hat, price: 150, old: 20, off: 5 },
        { title: "Lamp", img: lamp, price: 210, old: 30, off: 10 },
        { title: "Pants", img: pants, price: 300, old: 40, off: 25 },
        { title: "Shoes", img: shoes, price: 200, old: 30, off: 20 },
        { title: "Sunglasses", img: sunglasses, price: 150, old: 27, off: 13 },
        { title: "Towel", img: towel, price: 100, old: 20, off: 10 },
        { title: "t-shirts", img: t_shirts, price: 250, old: 25, off: 18 },
        { title: "Bag", img: bag, price: 150, old: 40, off: 18 },
        { title: "Camera", img: camera, price: 350, old: 40, off: 25 },
    ];
    let [orders, setOrders] = useState([]);
    let [totalPrice, updateTotalPrice] = useState(0);
    let [orderLength, updateLength] = useState(0);
    let addToCart = (e, p) => {
        setOrders([...orders, { title: p.title, img: p.img, price: p.price, old: p.old, off: p.off }])
        orders.push({ title: p.title, img: p.img, price: p.price, old: p.old, off: p.off });
        updateTotalPrice(totalPrice += p.price);
        updateLength(orderLength = orders.length);
        console.log(orders);
    }
    let deleteOrder = (p, e, deletedIndex) => {
        setOrders(orders.filter((obj, idx) => deletedIndex !== idx));
        orders.splice(deletedIndex, 1);
        updateTotalPrice(totalPrice -= p.price);
        updateLength(orderLength = orders.length);
        console.log(orders);
    }

    let afterStyle = document.createElement("style");
    afterStyle.innerHTML =
        `.selected-products::after{
        content: '${orderLength}';
        background-color: #eee;
        color: black;
        border-radius: 50%;
        position: absolute;
        padding: 1px 5px;
        font-size: 10px;
        top: 25px;
        right: 5px;
    }`;
    document.head.appendChild(afterStyle);


    
        // const goUpBtn = document.getElementsByClassName('.myBtn');
        // document.ready(function () {
        //     goUpBtn.hide();
        
        //     window.scroll(function () {
        //         if (this.scrollTop() > 100) {
        //             goUpBtn.show('fade');
        //         } else {
        //             goUpBtn.hide('fade');
        //         }
        //     });
        
        //     goUpBtn.click(function () {
        //         (document.html, document.body).animate({
        //             scrollTop: 0
        //         }, 1000);
        
        //     });
        
        // })
    
    return (
        <>
            <main className='main'>
                <div className='heading'>
                    <img src={mspLogo} alt=''></img>
                    <p>MSP E-Commerce</p>
                </div>
                <div className='heading'>
                    <p>{products.length}</p>
                    <p>Top Home Pics</p>
                </div>
                <section>

                    <Products products={products} addToCart={addToCart} />
                    <div className="orders">
                        <Orders orders={orders} deleteOrder={deleteOrder} />
                        <div className="total-price"> <p><span>Total Price</span> <sub>EGP </sub> {totalPrice}</p></div>
                    </div>
                </section>
                {/* <button class="goUp myBtn"> <span class="material-symbols-outlined">
                    keyboard_control_key
                </span></button> */}

            </main>
        </>
    )
}
export default Ecommerce;
