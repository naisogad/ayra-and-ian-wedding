import React from 'react'
import Image from 'next/image'

const Theme = () => {
  return (
    <section className='hidden md:flex min-h-[600px] relative flex-wrap justify-center -mr-4 -ml-4 box-border text-moss mt-[25rem]'>
        {/* MAIN CONTAINER */}
        <div className='z-1 grow-0 shrink-0 basis-full max-w-full relative w-full min-h-[1px] pr-4 pl-4 block box-border'>
            {/* FLOWER */}
            <div className='z-2 w-[22rem] h-[20rem] left-[62rem] top-[-15rem] absolute block box-border rotate-12'>
                <Image 
                    src={'/flowers/floater_5.png'}
                    alt=''
                    fill
                    className='object-cover'
                />
            </div>
            {/* INNTER CONTAINER */}
            <div className='justify-around flex flex-wrap -mr-4 -ml-4 box-border'>
                {/* LEFT CONTAINER */}
                <div className='grow-0 shrink-0 basis-[33%] max-w-[33%] relative w-full pr-4 pl-4 box-border block'>
                    <h2 className='top-[20rem] left-0 text-[6rem] relative z-0 leading-[1.1] text-right -rotate-90'>Theme</h2>
                </div>
                {/* RIGHT CONTAINER */}
                <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-full pr-4 pl-4 box-border block bg-amber-50'>
                    {/* INNER CONTAINER */}
                    <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pr-[15px] box-border block'>
                        {/* TITLE */}
                        <div className='box-border block pl-[15px] pr-[15px]'>
                            <h3 className='text-moss text-[3.5rem] leading-[3] text-center'>Dress Code</h3>
                        </div>
                        {/* IMAGE */}
                        <div className='w-[100%] h-[22rem] relative z-1 pointer-events-none box-border block intersect-once'>
                            <Image 
                                src={'/pictures/dc-1.png'}
                                alt=''
                                fill
                                className='object-cover'
                            />
                        </div>
                        {/* CONTENT */}
                        <div className='box-border block text-left pl-[15px] pr-[15px] mb-[2.5rem] mt-[3.5rem]'>
                            <p className='text-moss text-[1.125rem]'>We kindly ask our guests to dress in semi-formal or smart casual attire for our special day.</p>
                        </div>
                        {/* TITLE */}
                        <div className='box-border block pl-[15px] pr-[15px]'>
                            <h3 className='text-moss text-[3.5rem] leading-[3] text-center'>Color Motif</h3>
                        </div>
                        {/* COLORS */}
                        <div className='flex flex-wrap justify-center gap-[4rem] text-center mt-[1.5rem] mb-[3rem]'>
                            {/* COLOR 1 */}
                            <div className='items-center flex flex-col box-border'>
                                <div className='bg-moss rounded-full w-[4rem] h-[4rem]'></div>
                                <p className='text-moss text-[1.125rem] mt-[0.5rem]'>Moss</p>
                            </div>
                            {/* COLOR 2 */}
                            <div className='items-center flex flex-col box-border]'>
                                <div className='bg-stain rounded-full w-[4rem] h-[4rem]'></div>
                                <p className='text-moss text-[1.125rem] mt-[0.5rem]'>Stain</p>
                            </div>
                            {/* COLOR 3 */}
                            <div className='items-center flex flex-col box-border]'>
                                <div className='bg-yellow-200 rounded-full w-[4rem] h-[4rem]'></div>
                                <p className='text-moss text-[1.125rem] mt-[0.5rem]'>Yellow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Theme