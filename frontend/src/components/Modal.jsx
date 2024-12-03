import React from "react";

const Modal = ({isOpen, children}) => {
    if(!isOpen) return null;
    return (
    <div className="bg-black bg-opacity-60 h-full w-full fixed flex items-center justify-center">
        <div className="border rounded-lg bg-white p-4 shadow-lg relative w-80">
            <div className="text-lg absolute top-0 right-3 cursor-pointer hover:bg-gray-300">&times;</div>
        {children}
        </div>
    </div>
    )
}

export default Modal