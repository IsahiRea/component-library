import React from 'react';
import { HiOutlineCloudUpload } from "react-icons/hi";

export default function Card({children}) {

    return (
        <div className="card">
            <div className="card-brand">
                <HiOutlineCloudUpload className='card-icon'/>
            </div>
            <div>
                <h1 className='card-header'>Easy Deployment</h1>
                <p className='card-body'>{children}</p>
            </div>
        </div>
    );
    
}