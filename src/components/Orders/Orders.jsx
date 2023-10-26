import {AiOutlineRight} from "react-icons/ai"

const Orders = () => {
  return (
    <div className='px-5 sm:px-20 py-2 shadow-lg'>
        <div className="flex items-center gap-2 text-sm">
        <p>Orders</p> 
        <AiOutlineRight />
        <p className="underline">Order 32457ABC</p>
        </div>
        <div className="flex justify-between">
            <h2 className="font-bold text-lg">Order 32457ABC</h2>
            <div className="flex gap-3">
                <button type="button" className="text-green-800 border border-green-800 rounded-xl text-sm px-3">Back</button>
                <button type="button" className="bg-green-800 text-white rounded-xl px-3 text-sm">Approve Order</button>
            </div>
        </div>
    </div>
  )
}

export default Orders