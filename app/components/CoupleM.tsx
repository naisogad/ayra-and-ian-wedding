import Image from 'next/image'
import React from 'react'

const CoupleM = () => {
  return (
    <section id='coupleM' className='min-h-[503px] pt-[4rem] pb-[4rem] relative justify-center flex flex-wrap box-border mt-[8rem] z-0 lg:hidden md:hidden'>\
        {/* FLOWER */}
        <div className='w-[13rem] h-[12rem] top-[-3%] left-[1%] rotate-275 absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-down motion-duration-1000'>
            <Image 
                src={'/flowers/floater_2.png'}
                alt=''
                fill
                className='object-cover'
            />
        </div>
        {/* TITLE */}
        <div className='absolute top-0 left-0 z-0 box-border block intersect-once intersect:motion-preset-slide-right motion-duration-1200'>
            <h2 className='-rotate-90 text-moss relative whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[17rem] left-[-4rem] text-[3.2rem] leading-[0.9]'>The Couple</h2>
        </div>
        {/* IMAGES CONTAINER */}
        <div className='z-0 ml-auto grow-0 shrink-0 basis-[75%] max-w-[75%] min-h-[1px] box-border block'>
          <div className='justify-end flex flex-wrap box-border'>
            {/* IMAGE COLUMN */}
            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pr-[5px] box-border block'>
              <div className='flex flex-wrap box-border'>
                {/* IMAGE 1 */}
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pl-[15px] pr-[5px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                  <Image 
                    src={'/pictures/photo-3.jpg'}
                    alt=''
                    fill
                    className='object-cover object-[45%_0%]'
                  />
                </div>
                {/* IMAGE 2 */}
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pl-[15px] pr-[5px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1500'>
                  <Image 
                    src={'/pictures/photo-4.jpg'}
                    alt=''
                    fill
                    className='object-none object-[35%_100%]'
                  />
                </div>
                {/* IMAGE 3 */}
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pl-[15px] pr-[5px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-2000'>
                  <Image 
                    src={'/pictures/photo-5.jpg'}
                    alt=''
                    fill
                    className='object-cover object-[53%_0%]'
                  />
                </div>
              </div>
            </div>
            {/* CONTENT COLUMN */}
            <div className='z-0 ml-auto grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-full min-h-[1px] pl-[15px] pr-[5px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
                {/* MESSAGE */}
                <div className='justify-end flex flex-wrap box-border'>
                    <div className='ml-auto grow-0 shrink-0 basis-[100%] max-w-[100%] pl-[15px] pr-[5px] box-border block bg-amber-50'>
                        <div className='text-[1.125rem] leading-[1.5] text-moss box-border block'>
                            <p className='mt-[0.5rem] break-words relative z-2 text-left mb-[1rem] block intersect-once intersect:motion-preset-slide-left motion-duration-1200'>Hello everyone! <br /> </p>
                            <p className='mt-[0.5rem] break-words relative z-2 text-left mb-[1rem] block intersect-once intersect:motion-preset-slide-left motion-duration-1400'>Get ready to celebrate! We are beyond excited to be getting married and couldn't be happier to share this journey with all of you, our favorite people. Your presence in our lives is a gift, and we can't wait to have you there as we start this new chapter. <br /> </p>
                            <p className='mt-[0.5rem] break-words relative z-2 text-left mb-[1rem] block intersect-once intersect:motion-preset-slide-left motion-duration-1600'>This site is your go-to spot for everything about our wedding. We've included all the details and other helpful information to make your planning easy. <br /> </p>
                            <p className='mt-[0.5rem] break-words relative z-2 text-left mb-[1rem] block intersect-once intersect:motion-preset-slide-left motion-duration-1800'>We are so grateful for your love and support and are incredibly excited to celebrate with you! See you on the big day!</p>
                            <p className='mt-[0.5rem] whitespace-normal text-clip break-words relative z-2 text-left mb-[1rem] box-border block font-semibold intersect-once intersect:motion-preset-slide-left motion-duration-2000'>- Ayra & Ian</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default CoupleM