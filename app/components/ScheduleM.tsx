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
                                <a onClick={toggleNav} onClickCapture={() => handleNavigation('rc')} className='text-moss text-[1.9rem] leading-[1] box-border'>
                                    Reception
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* SCHEDULE DETAILS */}
        <div className={`${toggleMenu? '': 'hidden'} z-4 md:hidden size-full fixed top-0 right-0 m-0 bg-white overflow-y-scroll`}>
            {/* CLOSE BUTTON */}
            <button className='space-y-1 fixed top-[2%] right-[3%] z-5 md:hidden' onClick={toggleNav}>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? 'rotate-45 translate-y-3': ''}`}></span>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? 'scale-0 opacity-0': ''}`}></span>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? '-rotate-45 -translate-y-1': ''}`}></span>
            </button>
            <div className='relative flex flex-col bg-clip-padding box-border'>
                {/* TITLE */}
                <div className='relative z-1 h-[4.3rem] flex items-center justify-between p-[15px box-border]'>
                    <h1 className='text-moss text-[2.5rem] pt-[50px] ml-[15px] font-medium'>Schedule</h1>
                </div>
                {/* FLOWER 1 */}
                <div className='w-[6rem] h-[10rem] top-[1.5rem] left-[18rem] rotate-x-180 rotate-115 absolute z-1 pointer-events-none box-border block'>
                    <Image 
                        alt=''
                        src={'/flowers/floater_4.png'}
                        fill
                        className='object-cover'
                    />
                </div>
                {/* CONTENT */}
                <div className='pt-[40px] relative grow-1 shrink-1 basis-auto p-[15px] box-border block'>
                    {/* NAV */}
                    <div className='mr-0 ml-0 justify-center flex flex-wrap box-border pb-[30px]'>
                        <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                            <a onClick={() => handleNavigation('ps')} className='text-[1.7rem] leading-[1.5] font-medium'>Preparation</a>
                            <span className='pl-[0.25rem] pr-[0.25rem] leading-[1] text-[1.5rem] font-bold'> | </span>
                            <a onClick={() => handleNavigation('ss')} className='text-[1.7rem] leading-[1.5] font-medium'>Ceremony</a>
                            <span className='pl-[0.25rem] pr-[0.25rem] leading-[1] text-[1.5rem] font-bold'> | </span>
                            <a onClick={() => handleNavigation('rc')} className='text-[1.7rem] leading-[1.5] font-medium'>Reception</a>
                            <span className='pl-[0.25rem] pr-[0.25rem] leading-[1] text-[1.5rem] font-bold'> | </span>
                        </div>
                    </div>
                    {/* ITEMS */}
                    {/* PREPARATION SCHEDULE */}
                    {activeSection === 'ps' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            <div className='z-1 grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                                    {/* DATE */}
                                    <div className='grow-0 shrink-0 basis-[91%] max-w-[91%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                        <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                                            <div className='text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] box-border block'>
                                                <h3 className='text-[1.8rem]'>Sunday, November 28</h3>
                                            </div>
                                        </div>   
                                    </div>
                                    {/* TIME 1 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>9:00am</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Lorem</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    {/* TIME 2 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>10:00am</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Ipsum</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    {/* TIME 3 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>11:00am</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Dolor</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    {/* TIME 4 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>12:00nn</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Sit</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    {/* TIME 5 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>1:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Amet</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    {/* TIME 6 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>2:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Consectetur</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    {/* TIME 4 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>3:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Adipiscing</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* CEREMONY SCHEDULE */}
                    {activeSection === 'ss' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            <div className='z-1 grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                                    {/* DATE */}
                                    <div className='grow-0 shrink-0 basis-[91%] max-w-[91%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                        <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                                            <div className='text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] box-border block'>
                                                <h3 className='text-[1.8rem]'>Sunday, November 28</h3>
                                            </div>
                                        </div>   
                                    </div>
                                    {/* TIME 1 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>4:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Lorem</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    {/* TIME 2 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>5:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Ipsum</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* RECEPTION SCHEDULE */}
                    {activeSection === 'rc' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            <div className='z-1 grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                                    {/* DATE */}
                                    <div className='grow-0 shrink-0 basis-[91%] max-w-[91%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                        <div className='flex flex-wrap mr-[-15px] ml-[-15px] box-border'>
                                            <div className='text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] box-border block'>
                                                <h3 className='text-[1.8rem]'>Sunday, November 28</h3>
                                            </div>
                                        </div>   
                                    </div>
                                    {/* TIME 1 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>6:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Lorem</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    {/* TIME 2 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>7:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Ipsum</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    {/* TIME 3 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>8:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Dolor</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    {/* TIME 4 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>9:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Amet</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    {/* TIME 5 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>10:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Consectetur</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                    {/* TIME 6 */}
                                    <div className='text-right grow-0 shrink-0 basis-[33.33%] max-w-[33.33%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block border-r-1 divide-solid border-moss'>
                                        <p className='text-moss text-[1.125rem] leading-[1.7]'>11:00pm</p>
                                    </div>
                                    {/* ACTIVITY */}
                                    <div className='grow-0 shrink-0 basis-[66%] max-w-[66%] relative w-[100%] min-h-[1px]  box-border block'>
                                        <div className='box-border block text-moss bg-amber-50 pr-[15px] pl-[15px]'>
                                            <h3 className='text-2xl mb-[0.5rem]'>Adipiscing</h3>
                                            <p className='text-[1.125rem] leading-[1.5] mb-[0.5rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        {/* FLOWER 1 */}
        <div className='w-[9rem] h-[13rem] bottom-[10%] left-[4.2%] absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-up motion-duration-1000'>
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