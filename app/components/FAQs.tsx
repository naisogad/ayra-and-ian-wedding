import React, { useState } from 'react'
import Image from 'next/image'
import DropdownButton from './small_components/DropdownButton';

const FAQs = () => {

  return (
    <section id='faqsM' className='min-h-[315px] pb-[1rem] mt-[8rem] relative justify-center flex flex-wrap box-border lg:hidden md:hidden'>
        {/* FLOWER */}
        <div className='w-[12rem] h-[10rem] top-[95%] left-[-8%] rotate-275 absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-down motion-duration-1000'>
            <Image 
                src={'/flowers/floater_8.png'}
                alt=''
                fill
                className='object-cover'
            />
        </div>
            <div className='box-border absolute top-0 left-0 z-0 block'>
                {/* TITLE */}
                <h2 className='-rotate-90 absolute margin-0 whitespace-nowrap text-ellipsis z-2 pb-[0.5rem] top-[8rem] left-[-3rem] text-[4rem] leading-[0.9] text-moss'>FAQs</h2>
            </div>
        {/* CONTENT CONTAINER */}
        <div className='ml-auto pl-0 pr-0 z-0 grow-0 shrink-0 basis-[75%] max-w-[75%] absolute w-[100%] min-h-[1px] left-[25%] box-border block bg-amber-50'>
            {/* ROW CONTAINTER */}
            <div className='mr-0 ml-0 box-border justify-end flex flex-wrap intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
              {/* FAQs */}
              <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pt-[1rem] box-border block'>
                  <div className='w-[100%] box-border block'>
                        <div className='text-left text-moss pb-[1.5em] relative box-border text-[1.125rem] leading-[1.5]'>
                            <span className='whitespace-normal inline text-ellipsis overflow-hidden'>
                                <div className="h-max-[90rem] w-[100%] mb-3">
                                    <DropdownButton question={'Do I have a plus-one?'} answer={'Lorem Ipsum'} />
                                    <DropdownButton question={'Are children invited?'} answer={'Lorem Ipsum'} />
                                    <DropdownButton question={'When do I need to RSVP by?'} answer={'Lorem Ipsum'} />
                                    <DropdownButton question={"What if I can no longer attend after I've RSVP'd yes?"} answer={'Lorem Ipsum'} />
                                    <DropdownButton question={"What time should I arrive?"} answer={'Lorem Ipsum'} />
                                    <DropdownButton question={"Where are the ceremony and reception located?"} answer={'Lorem Ipsum'} />
                                    <DropdownButton question={"Can I take photos during the ceremony or reception?"} answer={'Lorem Ipsum'} />
                                    <DropdownButton question={"Do I need to bring a gift?"} answer={'We are truly blessed for all we have, so your presence and prayers are all we request. If you desire to give nonetheless, we suggest monetary gift.'} />
                                </div>
                            </span>               
                        </div>
                  </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default FAQs