import React from 'react'
import Image from 'next/image'

const ThemeM = () => {
  return (
    <section className='min-h-[600px] pt-[12rem] pr-[0.5rem] pb-[4rem] relative justify-center flex flex-wrap box-border lg:hidden md:hidden'>
        <div className='w-[12rem] h-[12rem] top-[5%] left-[60%] absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
            <Image 
                alt=''
                src={'/flowers/floater_5.png'}
                fill
                className='object-cover'
            />
        </div>
        {/* TITLE */}
        <div className='absolute top-0 left-0 z-0 box-border block'>
            <h2 className='text-moss -rotate-90 absolute m-0 whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[22rem] left-[0rem] text-[3.2rem] leading-[0.9]'>Theme</h2>
        </div>
        {/* CONTENT */}
        <div id='themeM' className='z-0 pr-0 pl-0 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] relative w-[100%] min-h-[1px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
            <div className='ml-0 mr-0 justify-end flex flex-wrap box-border'>
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pt-[3rem] box-border block bg-amber-50'>
                    {/* ROW */}
                    <div className='mr-0 ml-0 flex flex-wrap box-border'>
                        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pr-[15px] box-border block'>
                            {/* TITLE */}
                            <div className='box-border block pl-[15px] pr-[15px]'>
                                <h3 className='text-moss text-[2rem] leading-[1] text-center'>Dress Code</h3>
                            </div>
                            {/* IMAGE */}
                            <div className='w-[100%] h-[15rem] relative z-1 pointer-events-none box-border block intersect-once'>
                                <Image 
                                    src={'/pictures/dc-1.png'}
                                    alt=''
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            {/* CONTENT */}
                            <div className='box-border block text-left pl-[15px] pr-[15px] mb-[1rem]'>
                                <p className='text-moss text-[1.125rem]'>We kindly ask our guests to dress in semi-formal or smart casual attire for our special day.</p>
                            </div>
                            <div className='box-border block text-left pl-[15px] pr-[15px] mb-[1rem]'>
                                <p className='text-moss text-[1.125rem]'><a className='font-semibold inline-block'>Ladies:</a> Floor-length gowns or elegant cocktail dresses.</p>
                            </div>
                            <div className='box-border block text-left pl-[15px] pr-[15px] mb-[4rem]'>
                                <p className='text-moss text-[1.125rem]'><a className='font-semibold inline-block'>Gentlemen:</a> Tuxedos or dark suits with tie.</p>
                            </div>
                            {/* TITLE */}
                            <div className='box-border block pl-[15px] pr-[15px]'>
                                <h3 className='text-moss text-[2rem] leading-[1.5] text-center'>Color Motif</h3>
                            </div>
                            {/* DETAIL */}
                            <div className='box-border block text-left pl-[15px] pr-[15px] mt-6'>
                                <p className='text-moss text-[1.125rem]'>Our wedding will feature these elegant colors. Feel free to incorporate them into your outfit! Lastly guests, wear your best accessories. Your smiles and lively personalities.    </p>
                            </div>
                            {/* COLORS */}
                            <div className='flex flex-wrap justify-center gap-[1.1rem] text-center mt-[2rem] mb-[3rem]'>
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
        </div>
    </section>
  )
}

export default ThemeM