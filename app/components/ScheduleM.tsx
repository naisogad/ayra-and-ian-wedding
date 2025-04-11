import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'


const ScheduleM = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    
        const toggleNav = () => {
          setToggleMenu(!toggleMenu);
          // if (!toggleMenu) {
          //   document.body.style.overflow = 'hidden';
          //   document.body.style.paddingRight = '15px'
          // } else {
          //   document.body.style.overflow = '';
          //   document.body.style.paddingRight = ''
          // }
        }

        const [activeSection, setActiveSection] = useState('ps');

        const handleNavigation = (section) => {
        setActiveSection(section);
  };

  return (
    <section className='flex min-h-[600px] pt-[4rem] pr-[0.5rem] pb-[4rem] relative justify-center flex-wrap box-border lg:hidden md:hidden'>
        {/* TITLE */}
        <div className='absolute top-0 left-0 z-0 box-border block intersect-once intersect:motion-preset-slide-up motion-duration-1000'>
            <h2 className='text-moss -rotate-90 absolute m-0 whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[16rem] left-[-6rem] overflow-auto text-[4rem] leading-[0.9]'>Schedule</h2>
        </div>
        {/* CONTENT */}
        <div id='abaysM' className='z-0 pr-0 pl-0 ml-auto grow-0 shrink-0 basis-[70%] max-w-[70%] relative w-[100%] min-h-[1px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
            <div className='ml-0 mr-0 justify-end flex flex-wrap box-border'>
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pt-[3rem] box-border block bg-amber-50'>
                    {/* ROW */}
                    <div className='mr-0 ml-0 flex flex-wrap box-border'>
                        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pr-[15px] box-border block'>
                            {/* LIST */}
                            <div className='box-border block text-right'>
                                <p className='text-moss text-[1.2rem]'>Sunday, November 28 <br /> 9:00 am</p>
                                <a onClick={toggleNav} onClickCapture={() => handleNavigation('ps')} className='text-moss text-[1.9rem] leading-[1] box-border\'>
                                    Preparation
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right'>
                            <p className='text-moss text-[1.2rem]'>Sunday, November 28 <br /> 4:00 pm</p>
                                <a onClick={toggleNav} onClickCapture={() => handleNavigation('ss')} className='text-moss text-[1.9rem] leading-[1] box-border'>
                                    Ceremony
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right'>
                            <p className='text-moss text-[1.2rem]'>Sunday, November 28 <br /> 6:00 pm</p>
                                <a onClick={toggleNav} onClickCapture={() => handleNavigation('bridesmaids')} className='text-moss text-[1.9rem] leading-[1] box-border'>
                                    Reception
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* FLOWER 1 */}
        <div className='w-[9rem] h-[13rem] bottom-[10%] left-[4.2%] absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
            <Image 
                alt=''
                src={'/flowers/floater_4.png'}
                fill
                className='object-cover'
            />
        </div>
    </section>
  )
}

export default ScheduleM