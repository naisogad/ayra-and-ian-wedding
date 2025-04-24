import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'


const AbaysM = () => {

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
    <section id='abaysM' className='flex min-h-[600px] pt-[12rem] pr-[0.5rem] pb-[4rem] relative justify-center flex-wrap box-border lg:hidden md:hidden'>
        {/* FLOWER 1 */}
        <div className='w-[18rem] h-[14rem] top-[2%] left-[30%] absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
            <Image 
                alt=''
                src={'/flowers/floater_3.png'}
                fill
                className='object-cover'
            />
        </div>
        {/* TITLE */}
        <div className='absolute top-0 left-0 z-0 box-border block intersect-once intersect:motion-preset-slide-up motion-duration-1000'>
            <h2 className='text-moss -rotate-90 absolute m-0 whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[30rem] left-[-11.5rem] text-[4rem] leading-[0.9]'>Wedding Abays</h2>
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
                                <a onClick={toggleNav} onClickCapture={() => handleNavigation('ps')} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline'>
                                    Primary Sponsors
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right'>
                                <a onClick={toggleNav} onClickCapture={() => handleNavigation('ss')} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline'>
                                    Secondary Sponsors
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right'>
                                <a onClick={toggleNav} onClickCapture={() => handleNavigation('bridesmaids')} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline'>
                                    Bridesmaid
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right'>
                                <a onClick={toggleNav} onClickCapture={() => handleNavigation('groomsmen')} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline'>
                                    Groomsmen
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right'>
                                <a onClick={toggleNav} onClickCapture={() => handleNavigation('bearers')} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline'>
                                    Bearers
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                            <div className='box-border block text-right'>
                                <a onClick={toggleNav} onClickCapture={() => handleNavigation('parents')} className='text-moss text-[1.9rem] leading-[1] box-border hover:underline'>
                                    Parents
                                    <p className='text-moss text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-2 mt-0 mb-[2.5rem] block font-medium'>+ View Details</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* ABAY DETAILS */}
        <div className={`${toggleMenu? '': 'hidden'} z-4 md:hidden size-full fixed top-0 right-0 m-0 bg-white overflow-x-hidden`}>
            {/* CLOSE BUTTON */}
            <button className='space-y-1 fixed top-[2%] right-[3%] z-5 md:hidden' onClick={toggleNav}>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? 'rotate-45 translate-y-3': ''}`}></span>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? 'scale-0 opacity-0': ''}`}></span>
                <span className={`block h-1 w-7 bg-moss ${toggleMenu? '-rotate-45 -translate-y-1': ''}`}></span>
            </button>
            <div className='relative flex flex-col bg-clip-padding box-border'>
                {/* TITLE */}
                <div className='relative z-1 h-[4.3rem] flex items-center justify-between p-[15px box-border]'>
                    <h1 className='text-moss text-[2.5rem] pt-[50px] ml-[15px] font-medium'>Wedding Abays</h1>
                </div>
                <div className='w-[10rem] h-[8rem] top-[2%] left-[65%] rotate-10 absolute z-1 pointer-events-none box-border block'>
                    <Image 
                        alt=''
                        src={'/flowers/floater_3.png'}
                        fill
                        className='object-cover'
                    />
                </div>
                {/* CONTENT */}
                <div className='pt-[4rem] relative grow-1 shrink-1 basis-auto p-[15px] box-border block'>
                    {/* NAV */}
                    <div className='mr-0 ml-0 justify-center flex flex-wrap box-border pb-[40px]'>
                        <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                            <a onClick={() => handleNavigation('ps')} className='text-[1.7rem] leading-[1.5] font-medium hover:underline'>Principal Sponsors</a>
                            <span className='pl-[0.25rem] pr-[0.25rem] leading-[1] text-[1.5rem] font-bold'> | </span>
                            <a onClick={() => handleNavigation('ss')} className='text-[1.7rem] leading-[1.5] font-medium hover:underline'>Secondary Sponsors</a>
                            <span className='pl-[0.25rem] pr-[0.25rem] leading-[1] text-[1.5rem] font-bold'> | </span>
                            <a onClick={() => handleNavigation('bridesmaids')} className='text-[1.7rem] leading-[1.5] font-medium hover:underline'>Bridesmaids</a>
                            <span className='pl-[0.25rem] pr-[0.25rem] leading-[1] text-[1.5rem] font-bold'> | </span>
                            <a onClick={() => handleNavigation('groomsmen')} className='text-[1.7rem] leading-[1.5] font-medium hover:underline'>Groomsmen</a>
                            <span className='pl-[0.25rem] pr-[0.25rem] leading-[1] text-[1.5rem] font-bold'> | </span>
                            <a onClick={() => handleNavigation('bearers')} className='text-[1.7rem] leading-[1.5] font-medium hover:underline'>Bearers</a>
                            <span className='pl-[0.25rem] pr-[0.25rem] leading-[1] text-[1.5rem] font-bold'> | </span>
                            <a onClick={() => handleNavigation('parents')} className='text-[1.7rem] leading-[1.5] font-medium hover:underline'>Parents</a>
                        </div>
                    </div>
                    {/* ITEMS */}
                    {/* PRIMARY SPONSORS */}
                    {activeSection === 'ps' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-1.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px  ] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-2.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-3.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-4.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                        </div>
                    )}
                    {/* SECONDARY SPONSORS */}
                    {activeSection === 'ss' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-5.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px  ] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-6.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-7.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-8.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                        </div>
                    )}
                    {/* BRIDESMAIDS */}
                    {activeSection === 'bridesmaids' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-20.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px  ] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-21.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-22.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-23.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                        </div>
                    )}
                    {/* GROOMSMEN */}
                    {activeSection === 'groomsmen' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-16.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px  ] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-17.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-18.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-19.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                        </div>
                    )}
                    {/* BEARERS */}
                    {activeSection === 'bearers' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-13.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px  ] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-14.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-15.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-24.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                        </div>
                    )}
                    {/* PARENTS */}
                    {activeSection === 'parents' && (
                        <div className='ml-0 mr-0 justify-center flex flex-wrap box-border'>
                            {/* ITEM 1 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-9.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 1 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px  ] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 2 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-12.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 2 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 3 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-10.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 3 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                            {/* ITEM 4 */}
                            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pr-[15px] pl-[15px] box-border block'>
                                <Image 
                                    alt=''
                                    src={'/pictures/abays/a-photo-11.jpg'}
                                    fill
                                    className='object-cover'
                                    loading='eager'
                                />
                            </div>
                            {/* ITEM 4 DETAILS */}
                            <div className='bg-amber-50 text-left text-moss grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pr-[15px] pl-[15px] box-border block'>
                                <h3 className='text-[2rem] mt-[0.75rem] mb-[0.75rem] leading-[1.5] overflow-hidden text-ellipsis relative z-2'>Pellentesque Id</h3>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem Ipsum: Muspi Merol</p>
                                <p className='text-[1.125rem] leading-[1.7] overflow-hidden relative z-2 mt-0 mb-[1rem] box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AbaysM