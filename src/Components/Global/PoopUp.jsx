import React from 'react'
import AddOrder from '../Tools/orders/AddOrder'
// import UpdateOrder from '../Tools/orders/UpdateOrder '
// import OrderInfo from '../Tools/orders/OrderInfo'

const PoopUp = () => {
  return (
    <div className='w-[100%] h-[100%] bg-black/10 absolute z-50 flex items-center justify-center' onClick={(e) => e.stopPropagation()}>
        <div className="w-3/5 h-7/8 bg-white rounded-md shadow-sm">
        <AddOrder />
        {/* <OrderInfo /> */}
        {/* <UpdateOrder /> */}
        </div>
    </div>
  )
}

export default PoopUp