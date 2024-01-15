import React from "react"
import Ndata from "./Ndata"

const Cart = () => {
  return (
    <>
      <div className='content grid product'>
        {Ndata.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <h4>{val.name}</h4>
              <span><i className="fa-solid fa-indian-rupee-sign" style={{color: "#ed355a"}}></i> {val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart
