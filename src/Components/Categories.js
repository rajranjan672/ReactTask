import React from 'react'
import './Categories.css';

const Categories = (props) => {
  return (
    <>
    <div className='mainn'>

        {props.catProduct.map((currProd, index) => {
            return <button className='bt' key={index} onClick={() => props.filterProduct(currProd)}>{currProd}</button>
        })}
    {/* <button onClick={() => props.setProducts(Menu)}>All</button> */}
      {/* <button className='bt' onClick={() => props.filterProduct('smartphone')}>SmartPhones</button>
      <button className='bt' onClick={() => props.filterProduct('homeApplience')}>Home Applience</button>
      <button className='bt' onClick={() => props.filterProduct('fashion')}>Fashion</button> */}


    </div>
    </>
    )
}

export default Categories