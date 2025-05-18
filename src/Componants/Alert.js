// import React from 'react'
import { useEffect } from "react";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; // Ensure CSS is imported


export default function Alert({ alert }) {
    useEffect(() => {
        if (alert) {
            toast(alert, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            });
        }
    }, [alert]);


}
