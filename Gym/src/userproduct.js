
import React, { useState, useEffect } from 'react';


const Userproducts = () => {

    let [productlist, updateProduct] = useState([]);

    const getProduct = () => {
        var url = "http://localhost:12345/gymProduct";
        fetch(url)
            .then(response => response.json())
            .then(productArray => {
                updateProduct(productArray);
            })
    }

    useEffect(() => {
        getProduct();
    }, [1]);


    const a2c=(aditem)=>{
        alert('added succesfully !')
            var url="http://localhost:12345/cartProduct";
            var postData={
                headers:{'Content-Type':'application/json'},
                method:'POST',
                body:JSON.stringify(aditem)
            }
                       fetch(url,postData)
                       .then(response=>response.json())
                       .then(tempfile=>{
                        getProduct();
                       }) 


        
    }

    return (
        <>
          <div className='container mt-3 bg-secondary pb-3 pt-3'>
            <div className='row'>
                {
                    productlist.map((product,index)=>{
                        return(
                            <div className='col-lg-3 ' key={index}>
                                <img src={product.image} width="100%" height="250px" id='img1'/>
                                <i>{product.name}</i><br />
                                <ii class='fa fa-rupee'>{product.price}</ii><br />
                                <button className='btn btn-warning btn-sm' onClick={a2c.bind(this,product)}>Add to cart</button>



                            </div>
                        )
                    })
                }
            </div>
          </div>



        </>
    )
}
export default Userproducts;