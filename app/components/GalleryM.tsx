import Image from 'next/image'
import ImageFlip from './small_components/ImageFlip';

const PhotosM = () => {



  return (
        <section id='galleryM' className='min-h-[600px] pt-[4rem] pb-[4rem] relative justify-center flex flex-wrap box-border mt-[8rem] mb-[6rem] z-0 lg:hidden md:hidden'>\
            {/* FLOWER */}
            <div className='w-[12rem] h-[14rem] top-[-3%] left-[50%] rotate-275 absolute z-1 pointer-events-none box-border block intersect-once intersect:motion-preset-slide-down motion-duration-1000'>
                <Image 
                    src={'/flowers/floater_6.png'}
                    alt=''
                    fill
                    className='object-cover'
                />
            </div>
            {/* TITLE */}
            <div className='absolute top-0 left-0 z-0 box-border block'>
                <h2 className='-rotate-90 text-moss absolute whitespace-nowrap text-ellipsis z-0 pb-[0.5rem] top-[17rem] left-[-5.5rem] text-[4rem] leading-[0.9] intersect-once intersect:motion-preset-slide-up motion-duration-1000'>Our Story</h2>
            </div>
            {/* IMAGES CONTAINER */}
            <div className='z-0 ml-auto grow-0 shrink-0 basis-[75%] max-w-[75%] min-h-[1px] box-border block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>
              <div className='justify-end flex flex-wrap box-border'>
                {/* IMAGE COLUMN */}
                <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-[100%] min-h-[1px] pl-[15px] pr-[15px] bg-amber-50 box-border block'>
                  <div className='flex flex-wrap box-border pt-[2rem] pb-[2rem]'>
                     <ImageFlip frontImageSrc={'/pictures/couple-1.jpg'} backContent={undefined} />
                     <ImageFlip frontImageSrc={'/pictures/couple-2.jpg'} backContent={undefined} />
                     <ImageFlip frontImageSrc={'/pictures/couple-3.jpg'} backContent={undefined} />
                     <ImageFlip frontImageSrc={'/pictures/couple-4.jpg'} backContent={undefined} />
                     <ImageFlip frontImageSrc={'/pictures/couple-5.jpg'} backContent={undefined} />
                  </div>
                </div>
              </div>
            </div>
        </section>
  )
}

export default PhotosM