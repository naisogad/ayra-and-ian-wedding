"use client"
import Image from 'next/image'
import React from 'react'

const Header = () => {

  return (
    <section className='min-h-screen pt-[5.5rem] pb-[2.5rem] mb-[1rem] relative justify-center flex flex-wrap mr-[15px] ml-[-15px]'>
        <div className='grow-0 shrink-0 basis-full max-w-full relative w-full min-h-[1px] pr-[15px] pl-[15px] block'>
            <div className='h-full justify-start flex flex-wrap mr-[-15px] ml-[-15px]'>
                <div className='grow-0 shrink-0 max-w-full relative w-full min-h-[1px] pr-[15px] pl-[15px] box-border'>
                    {/* IMAGE ROW 1 */}
                    <div className='mb-[2rem] min-h-[16rem] flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                        <div className='grow-0 shrink-0 basis-[33%] max-w-[33%] relative w-full min-h-[1px] pr-[15px] pl-[15px] block'></div>
                        <div className='grow-0 shrink-0 basis-[58%] max-w-[58%] relative w-full min-h-[1px] pr-[15px] pl-[15px] block h-100'>
                            <Image
                                alt=''
                                src={'./pictures/photo-1.jpg'}
                                fill
                                className='object-cover'
                            />
                        </div>    
                        <div className='w-[16rem] h-[19rem] top-[13rem] right-[2rem] absolute z-1 box-border'>
                            <Image
                                alt=''
                                src={'./flowers/floater_1.png'}
                                fill
                                className='object-cover'
                            />
                        </div>
                    </div>
                    {/* TITLE */}
                    <div className='absolute z-1 top-[10rem] flex flex-wrap mr-[-15px] ml-[15px] box-border'>
                        <h1 className='text-moss text-[5.6rem] drop-shadow-[3px_2px_rgba(255,255,255)]'>Ayra & Ian</h1>
                    </div>
                    {/* IMAGE ROW 2 */}
                    <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border '>
                        <div className='h-[300px] grow-0 shrink-0 basis-[16%] max-w-[16%] relative w-full min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                            {/* WEDDING DATE */}
                            <p className='text-moss w-[300px] h-[130px] -rotate-90 absolute top-[4rem] left-[3rem] text-[1.625rem] tracking-[1px] leading-[1.7] mt-[0] mb-[1rem] box-border block space-y-[1em] space-x-[0px]'>November 28, 2025</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header