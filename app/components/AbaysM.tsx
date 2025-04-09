import Image from 'next/image'
import React from 'react'

const AbaysM = () => {
  return (
    <section id='abaysM' className='flex min-h-[600px] pt-[15rem] pr-[0.5rem] pb-[3.5rem] relative justify-center flex-wrap box-border lg:hidden md:hidden'>
        {/* FLOWER 1 */}
        <div className='w-[18rem] h-[14rem] top-[6%] left-[30%] absolute z-1 pointer-events-none box-border block'>
            <Image 
                alt=''
                src={'/flowers/floater_3.png'}
                fill
                className='object-cover'
            />
        </div>
        {/* TITLE */}
        <div className='absolute top-0 left-0 z-1 box-border block'>
            <h2 className='text-moss -rotate-90 absolute m-0 whitespace-nowrap text-ellipsis z-2 pb-[0.5rem] top-[35rem] left-[-12rem] overflow-auto text-[4rem] leading-[0.9]'>Wedding Abays</h2>
        </div>
        {/* CONTENT */}
        <div className='z-0 pr-0 pl-0 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] relative w-[100%] min-h-[1px] box-border block'>
            <div className='ml-0 mr-0 justify-end flex flex-wrap box-border'>
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pt-[3rem] box-border block bg-amber-50'>
                    {/* ROW */}
                    <div className='mr-0 ml-0 flex flex-wrap box-border'>
                        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pr-[15px] box-border block'>
                            {/* LIST */}
                            <div className='box-border block text-right'>
                                <a href="#" className='text-moss text-[1.9rem] leading-[1] box-border\'>
                                    Primary Sponsors
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right'>
                                <a href="#" className='text-moss text-[1.9rem] leading-[1] box-border'>
                                    Secondary Sponsors
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right'>
                                <a href="#" className='text-moss text-[1.9rem] leading-[1] box-border'>
                                    Bridesmaids
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right'>
                                <a href="#" className='text-moss text-[1.9rem] leading-[1] box-border'>
                                    Groomsmen
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right'>
                                <a href="#" className='text-moss text-[1.9rem] leading-[1] box-border'>
                                    Bearers
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right'>
                                <a href="#" className='text-moss text-[1.9rem] leading-[1] box-border'>
                                    Parents
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AbaysM