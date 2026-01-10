"use client";
import React from 'react'
import { Toaster } from 'sonner'

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Toaster position="top-center" />
            {children}
        </>
    )
}

export default ToastProvider
