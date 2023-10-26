import {BiSearch,BiPrinter} from "react-icons/bi"

const SearchContainer = () => {
  return (
    <div className="flex items-center justify-between">
        <div className="relative flex w-[40%] items-center">
            <input type="text" placeholder="Search..." className='border border-gray-200 rounded-xl px-3 w-full text-sm h-[30px]' />
            <BiSearch  className="absolute right-3 top-2 text-gray-400" size={16}/>
        </div>
        <div className="flex gap-10">
            <button type="button" className="border-2 rounded-2xl px-3 border-green-800 text-green-800 font-medium">
                    Add item
            </button>
            <BiPrinter className="text-green-800" size={24} />
        </div>
    </div>
  )
}

export default SearchContainer