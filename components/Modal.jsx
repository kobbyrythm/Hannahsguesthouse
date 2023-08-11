import React, { useState } from "react";
import { GrClose } from "react-icons/gr";


const Modal = ({visible, onClose}) => {
    if (!visible) return null;
   const handleonClose = ()=>{
    onClose()
   }

    return (
        <div>
            <div onClick={handleonClose}className=" fixed inset-0 bg-pink-50/50 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">

                <div className="bg-white rounded-xl p-8 ">
                    <div onClick={onClose} className="flex justify-end cursor-pointer">
                        <GrClose />
                    </div>
                    <h1 className="text-xl p-2 flex justify-center ">
                        Thank you for contacting us!
                    </h1>
                    <p className="p-2 text-center text-sm">
                        Your email has been received, and our team will respond soon.<br />
                         We look forward to assisting you.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
