"use client"
import React from 'react'
import Image from 'next/image'

const HeaderM = () => {
  return (
    <section className='mb-0 pr-0 h-auto pt-0 min-h-[92vh] pb-[3.5rem] relative ml-0 mr-0 mt-15 justify-center flex flex-wrap box-border lg:hidden md:hidden'>
        <div className='left-0 top-0 absolute w-[7rem] h-[7rem] z-1 box-border block pointer-events-none'></div>
        <div className='right-0 top-0 absolute w-[7rem] h-[7rem] z-1 box-border block pointer-events-none'></div>
        <div className='bg-[left_0.5rem] top-[5rem] h-auto min-h-[100vh] z-1 pr-0 pl-0 relative w-full box-border block'>
            {/* HEADER 1 */}
            <div className='left-[2rem] relative mb-[92px] w-[100%] text-right box-border block h-auto min-h-[20rem]'>
                {/* IMAGE 1 */}
                <div className='box-border block text-right'>
                    <Image
                        alt=''
                        src={'/pictures/photo-1.jpg'}
                        fill
                        className='object-cover'
                    />
                </div>
            </div>
            {/* DATE */}
            <div className='relative w-full mt-[5rem] box-border block break-words text-right'>
                <p className='top-[86px] left-[-45px] block text-[1.4rem] text-moss transform -rotate-90 absolute overflow-hidden z-2 mt-0 mb-[1rem]
                space-y-[1em] space-x-[0px] break-words text-right'>November 28, 2025</p>
            </div>
            {/* IMAGE 2 */}
            <div className='left-[2rem] text-right w-[80%] max-w-[100%] h-[0%] relative ml-auto box-border block break-words min-h-[25%] align-middle'>
                <Image 
                    alt=''
                    src={'/pictures/photo-2.jpg'}
                    fill
                    className='object-cover'
                />
            </div>
            {/* IMAGE 3 */}
            <div className='w-[12rem] h-[14rem] bottom-[1.8rem] right-[-2rem] absolute z-1 box-border'>
                <Image 
                    alt=''
                    src={'/flowers/floater_1.png'}
                    fill
                    className='object-cover'
                />
            </div>
            {/* TITLE */}
            <div className='left-[0rem] absolute top-[0px] w-[100% - 2rem] text-left box-border block inert:h-auto min-h-[100vh]'>
                <h1 className='relative z-2 mt-[6rem] min-h-[7rem] drop-shadow-[3px_2px_rgba(255,255,255)] text-[3.25rem] leading-[1.2] text-moss mb-[0.5rem] box-border
                block space-x-[0px] text-left'>
                Ayra
                <br />
                &
                <br />
                Ian
                </h1>
            </div>
        </div>
    </section>
  )
}

export default HeaderM