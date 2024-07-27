import Image from 'next/image'
import React from 'react'
import MyImage from "@/public/manish.jpeg"

export default function Intro() {
    return (
        <section>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <Image src={MyImage} alt='my-image' width={192} height={192} quality={95} priority={true} className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white
                    shadow-xl' />
                    <span className='absolute text-2xl bottom-0 right-0 '>👋</span>
                </div>
            </div>
        </section>
    )
}
