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
        <div className='absolute top-0 left-0 z-0 box-border block'>
            <h2 className='-rotate-90 text-moss absolute whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[17rem] left-[-8.5rem] text-[4rem] leading-[0.9] intersect-once intersect:motion-preset-slide-up motion-duration-1000'>The Couple</h2>
        </div>
        {/* IMAGES CONTAINER */}
        <div className='z-0 ml-auto grow-0 shrink-0 basis-[75%] max-w-[75%] min-h-[1px] box-border block'>
          <div className='justify-end flex flex-wrap box-border'>
            {/* IMAGE COLUMN */}
            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pr-[15px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
              <div className='flex flex-wrap box-border'>
                {/* IMAGE 1 */}
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pl-[15px] pr-[15px] box-border block'>
                  <Image 
                    src={'/pictures/photo-3.jpg'}
                    alt=''
                    fill
                    className='object-cover'
                  />
                </div>
                {/* IMAGE 2 */}
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pl-[15px] pr-[15px] box-border block'>
                  <Image 
                    src={'/pictures/photo-4.jpg'}
                    alt=''
                    fill
                    className='object-cover'
                  />
                </div>
                {/* IMAGE 3 */}
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[30rem] pl-[15px] pr-[15px] box-border block'>
                  <Image 
                    src={'/pictures/photo-5.jpg'}
                    alt=''
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
            {/* CONTENT COLUMN */}
            <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pr-[15px] box-border block'>
              <div className='flex flex-wrap box-border'>
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] box-border block bg-amber-50 pr-[15px] pl-[15px] mt-[0rem] intersect-once intersect:motion-preset-fade motion-duration-1000'>
                  {/* TITLE */}
                  <h3 className='text-moss text-[2rem] leading-[1.7] mt-[1rem] mb-[0.5rem] overflow-hidden text-ellipsis relative z-0 text-center box-border'>Ayra & Ian</h3>
                  <p className='mt-[0.5rem] mb-[1rem] text-[1.125rem] leading-[1.7] break-normal overflow-hidden relative z-0 text-moss text-left box-border block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus. Nulla pellentesque mi turpis, vitae egestas turpis feugiat sed. Donec sit amet aliquet ipsum, sit amet sagittis dui. Morbi rutrum erat condimentum lorem sollicitudin, eu sodales mi laoreet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default CoupleM