import React from 'react'

const a =20;
const b = 40;

const isAdmin = true;

const users =["jhon","raju","david"];

const product = [
    {
        id:12,
        title:"product-1",
        image:"https://picsum.photos/id/124/600/600",
        price:1233
    }, {
        id:123,
        title:"product-2",
        image:"https://picsum.photos/id/154/600/600",
        price:5986
    }
]
const Ex3 = (props) => {
    return (
        <div>
            <h3>React const functional component</h3>

            <section className='productContainer'>
                {
                    product.map((item,index) => {
                        return (
                            <div key={index}>
                                
                                <img src="{item.image}" className='img-circle' alt="no image" />
                                <h4>{ item.title} </h4>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Ex3