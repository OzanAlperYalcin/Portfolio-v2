import LoginForm from '@/components/admin/auth/LoginForm'
import Social from '@/components/social'
import React from 'react'

export default function AuthLayout({ children }) {
    return (
        <div className='h-full flex flex-col items-center justify-center'>
            <div className='grid grid-cols-3 shadow-lg bg-white'>
                <div className='col-span-3 md:col-span-1 rounded-t-lg md:rounded-tr-none md:rounded-l-lg overflow-hidden relative'>
                    <div className='absolute border inset-0 bg-black/10 z-10' />
                    <video
                        className='h-40 md:h-[450px] w-96 object-cover object-center'
                        src="https://probamedia.com.tr/ozanalperyalcin-code.mp4"
                        role="presentation" playsInline preload="auto" autoPlay muted loop tabIndex="-1"
                    />
                </div>
                <div className='col-span-3 md:col-span-2 rounded-b-lg md:rounded-bl-none md:rounded-r-lg'>
                    <div className='h-full flex flex-col gap-5 p-5'>
                        <h1 className='text-xl font-bold tracking-wide border-b border-black pb-5'>{process.env.BRAND_NAME} - Dashboard Giriş</h1>
                        <Social />
                        <div className='w-full md:w-96 m-auto'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}