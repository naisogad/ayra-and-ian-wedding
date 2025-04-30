import React from 'react'

const AboutM = () => {
  return (
    <section className='pt-[4rem] pb-[4rem] pr-[0.5rem] relative flex flex-wrap box-border lg:hidden md:hidden'>
        {/* WELCOME */}
        <div className='absolute top-35 left-[-6rem] z-1 box-border block'>
            <h2 className='text-moss absolute -rotate-90 m-0 whitespace-nowrap z-2 text-ellipsis pb-[0.5rem] top-[6rem] text-[4rem] leading-[0.9] text-right box-border block intersect-once intersect:motion-preset-slide-up motion-duration-1000'>Welcome</h2>
        </div>
        {/* CONTAINER */}
        <div className='z-1 ml-auto grow-0 shrink-0 basis-[73%] max-w-[73%] relative w-full min-h-[1px] pl-[0px] pr-[0px] box-border block'>
            {/* MESSAGE */}
            <div className='justify-end flex flex-wrap box-border'>
                <div className='ml-auto grow-0 shrink-0 basis-[100%] max-w-[100%] pl-[15px] pr-[15px] box-border block bg-amber-50'>
                    <div className='text-[1.125rem] leading-[1.5] text-moss box-border block'>
                        <p className='mt-[0.5rem] break-words relative z-2 text-left mb-[1rem] block intersect-once intersect:motion-preset-slide-left motion-duration-1000'>Hello everyone! <br /> <br />Get ready to celebrate! We are beyond excited to be getting married and couldn't be happier to share this journey with all of you, our favorite people. Your presence in our lives is a gift, and we can't wait to have you there as we start this new chapter. <br /> <br />This site is your go-to spot for everything about our wedding. We've included all the details and other helpful information to make your planning easy. <br /> <br />We are so grateful for your love and support and are incredibly excited to celebrate with you! See you on the big day!</p>
                        <p className='mt-[0.5rem] whitespace-normal text-clip break-words relative z-2 text-left mb-[1rem] box-border block font-semibold intersect-once intersect:motion-preset-slide-left motion-duration-1000'>- Ayra & Ian</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default AboutM