import Image from 'next/image'
import React from 'react'
    
const Couple = () => {
  return (
    <section id='couple' className='hidden md:flex pt-[8rem] pb-[2.5rem] mb-[1rem] relative justify-center flex-wrap mr-[-15px] ml-[-15px] box-border'>
        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
            <div className='justify-center flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                {/* FLOWER 1 */}
                <div className='top-[-14rem] left-[-3rem] w-[25rem] h-[21rem] absolute z-1 block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>
                    <Image
                        src={'/flowers/floater_2.png'}
                        alt=''
                        fill
                        className='object-cover'
                    />
                </div>
                {/* IMAGES/ROW 1 */}
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                    {/* ROW */}
                    <div className='mr-0 ml-0 flex flex-wrap box-border'>
                        {/* IMAGE 1 */}
                        <div className='pl-0 pr-0 grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] box-border block'>
                            <div className='justify-end flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                                <div className='grow-0 shrink-0 basis-[91.66%] max-w-[91.66%] relative w-[100%] min-h-[38rem] ml-[30px] mr-[30px] box-border block intersect-once intersect:motion-preset-slide-up motion-duration-1000'>
                                    <Image
                                        alt=''
                                        src={'/pictures/photo-3.jpg'}
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                        {/* IMAGE 2 */}
                        <div className='pl-0 pr-0 grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] box-border block'>
                            <div className='justify-center flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                                <div className='grow-0 shrink-0 basis-[91.66%] max-w-[91.66%] relative w-[100%] min-h-[38rem] ml-[30px] mr-[30px] box-border block intersect-once intersect:motion-preset-slide-up motion-duration-1000'>
                                    <Image
                                        alt=''
                                        src={'/pictures/photo-4.jpg'}
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                        {/* IMAGE 3 */}
                        <div className='pl-0 pr-0 grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] box-border block'>
                            <div className='justify-start flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                                <div className='grow-0 shrink-0 basis-[91.66%] max-w-[91.66%] relative w-[100%] min-h-[38rem] ml-[30px] mr-[30px] box-border block intersect-once intersect:motion-preset-slide-up motion-duration-1000'>
                                    <Image
                                        alt=''
                                        src={'/pictures/photo-5.jpg'}
                                        fill
                                        className='object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TEXT/ROW 2 */}
                <div className='grow-0 shrink-0 basis-[91.66%] max-w-[91.66%] relative w-[100%] min-h-[1px] ml-[30px] mr-[30px] box-border block'>
                    <div className='justify-between flex flex-wrap ml-[-15px] mr-[-15px] box-border'>
                        {/* CONTENT */}
                        <div className='grow-0 shrink-0 basis-[50%] max-w-[50%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                            <h3 className='text-moss text-[2rem] box-border block leading-[3] intersect-once intersect:motion-preset-slide-right motion-duration-1000'>&nbsp;Ayra <a className='font-greatVibesR'>&</a> Ian</h3>
                            <p className='bg-shadow text-moss leading-[1.7] text-[1.125rem] p-4 box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1000'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus. Nulla pellentesque mi turpis, vitae egestas turpis feugiat sed. Donec sit amet aliquet ipsum, sit amet sagittis dui. Morbi rutrum erat condimentum lorem sollicitudin, eu sodales mi laoreet.</p>
                        </div>
                        {/* TITLE */}
                        <div className='z-1 grow-0 shrink-0 basis-[50%] max-w-[50%] relative w-[100%] min-h-[1px] pr-[15px] box-border block'>
                            <h2 className='text-moss mt-[1.5rem] text-[4rem] leading-[2] text-center box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>&nbsp;The Couple</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Couple