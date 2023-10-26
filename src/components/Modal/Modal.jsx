import {RxCross2} from "react-icons/rx"

export default function Modal({handleClose,handleModal}) {


  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            
            <div className="mt-3 text-center sm:mx-auto sm:mt-0 sm:text-left">
            <div className="flex justify-between">
            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Missing Product</h3>
       <button type="button" onClick={()=>{
        handleClose(false)
       }}>
            <RxCross2 />
       </button>
            </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Is "Chicken Breast  Fillets,Boneless..."urgent?</p>
              </div>
              <div className=" flex justify-end gap-5 mt-5">
          <button type="button" onClick={()=>{
            handleModal(false)
            handleClose(false)
          }}>No</button>
          <button type="button" onClick={()=>{
            handleModal("yes")
            handleClose(false)
          }}>Yes</button>
        </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

  )
}
