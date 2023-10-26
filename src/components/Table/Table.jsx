import { useRef, useState } from "react"
import {BsCheck2} from "react-icons/bs"
import {RxCross1} from "react-icons/rx"
import { TableData } from "../../constants/AppConstants"
import Modal from "../Modal/Modal"
import EditModal from "../EditModal/EditModal"

const TableContainer = () => {
    const [tableData,setTableData]=useState(TableData)
    const [showModal,setShowModal]=useState(false)
    const itemData=useRef({})
    const handleCheck=(item)=>{
        const fileterData=tableData.map(data=>{
            if (data.id===item.id) {
                return {...data,status:"Approved"}
            }
            return data
        })
        setTableData(fileterData)
    }



    const handleMissing=missing=>{
            const data=itemData.current
            const fileterData=tableData.map(item=>{
                if (data.id===item.id) {
                    return {...item,status:missing?"Missing-Urgent":"Missing"}
                }
                return item
            })
            setTableData(fileterData)
    }

  return (
    <>
  
    <table className="w-full border  border-gray-300 ">
      <thead>
        <tr className="text-left border border-b-gray-300 h-8">
            <th className="w-[5%]"></th>
            <th className="w-[30%]">Product name</th>
            <th className="w-[10%]">Brand</th>
            <th className="w-[10%]">Price</th>
            <th className="w-[10%]">Quantity</th>
            <th className="w-[10%]">Total</th>
            <th className="w-[25%]">Status</th>
         
        </tr>
      </thead>
      <tbody>
       {
        tableData.map(item=>(
            <tr key={item.id} className="border border-b-gray-300">
                <td><img src={item.logo} alt="ProductImage" /></td>
                <td>{item.productName}</td>
                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.total}</td>
                <td>
                    <div className="flex items-center">
                    <p className={`${item.status==="Approved"?"bg-green-500":item.status==="Missing"?"bg-orange-500":item.status!=="" && "bg-red-500"} py-2 px-3 rounded-3xl text-white items-center `}>{item.status}</p>
                    <div className={`w-[50%] flex gap-5 ml-auto items-center`}>
                        <button type="button" className={`${item.status==="Approved" && "text-green-500"}`}>
                        <BsCheck2 size={20} onClick={()=>{
                            handleCheck(item)
                        }}/>
                        </button> 
                        <button type="button" className={`${item.status==="Missing"?"text-orange-500":item.status==="Missing-Urgent"?"text-red-500":""}`} onClick={()=>{
                            setShowModal(true)
                            itemData.current=item


                        }}>
                        <RxCross1 />
                        </button>
                       
                       <button type="button">Edit</button>
                    </div>
                    </div>
               
                    
                </td>
            </tr>
        ))
       }
     

      </tbody>
    </table>
    {showModal && <Modal handleClose={setShowModal} handleModal={handleMissing} /> } 
    <EditModal />
    </>
  )
}

export default TableContainer