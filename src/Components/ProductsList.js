import React from 'react'
import Product from './Product'

function ProductsList({ProductsData}) {
  return (
    <div className='list'>
        {ProductsData.map((el)=>(<Product el={el} />))}
    </div>
  )
}

export default ProductsList