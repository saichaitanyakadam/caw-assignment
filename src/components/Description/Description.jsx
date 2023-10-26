import {BsFillBrightnessHighFill} from "react-icons/bs"
import SearchContainer from "../SearchContainer/SearchContainer"
import TableContainer from "../Table/Table"


const Description = () => {
  return (
    <div className='px-5 sm:px-20 py-3'>
        <div className='flex border border-1-gray-700  p-5 rounded mb-3'>
                <div className='border-r-2 flex flex-col justify-center p-2 flex-1'>
                <p className='text-gray-700 text-sm'>Supplier</p>
                <p className='font-semibold text-m'>East coast fruits & vegetables</p>
                </div>
                <div className=' border-r-2 flex-1 flex flex-col p-2'>
                <p className='text-gray-700 text-sm'>Shipping date</p>
                <p className='font-semibold text-m'>Tue,Feb 10</p>
                </div>
                <div className=' border-r-2 flex-1 flex flex-col p-2'>
                <p className='text-gray-700 text-sm'>Total</p>
                <p className='font-semibold text-m'>$15,028.3</p>  
                </div>
                <div className=' border-r-2 flex-1 flex flex-col p-2'>
                <p className='text-gray-700 text-sm'>Category</p>
                <div className="flex gap-2 flex-wrap">

                <BsFillBrightnessHighFill />  
                <BsFillBrightnessHighFill />
                <BsFillBrightnessHighFill />
                <BsFillBrightnessHighFill />
                <BsFillBrightnessHighFill />
                <BsFillBrightnessHighFill />  
                <BsFillBrightnessHighFill />
                <BsFillBrightnessHighFill /><BsFillBrightnessHighFill />
                <BsFillBrightnessHighFill />
                </div>
                </div>
                <div className=' border-r-2 flex-1 flex  flex-col p-2'>        
                    <p className='text-gray-700 text-sm'>Department</p>
                    <p className='font-semibold text-m'>300-444-678</p>   
                </div>
                <div className='flex-1 flex flex-col p-2'>
                    <p className='text-gray-700 text-sm'>Status</p>
                    <p className='font-semibold text-m'>Awaiting for approval</p>   
                    
                </div>
        </div>
        <div className="p-5 border border-gray-200 rounded flex flex-col gap-4">
            <SearchContainer  />
           
            <TableContainer />
        </div>
    </div>
  )
}

export default Description