import React from 'react'

const About = () => {
  return (
    <section className='hidden md:block min-h-[609px] pt-[2.5rem] pb-[2.5rem] justify-center flex-wrap ml-[-15px] mr-[-15px] box-border'>
        <div className='grow-0 shrink-0 basis-[100%] max-w-[100%] relative w-full min-h-[1px] pl-[15px] pr-[15px] box-border block'>
            {/* ROW CONTENT */}
            <div className='justify-between flex flex-wrap ml-[-15px] mr-[-15px] box-border'>
                {/* WELCOME */}
                <div className='h-[609px] grow-0 shrink-0 basis-[100%] max-w-[25%] relative w-full min-h-[1px] pl-[15px] pr-[15px] box-border block intersect-once intersect:motion-preset-slide-up motion-duration-1000'>
                    <div className='h-[609px] w-[609px] -rotate-90 absolute top-[-3rem] left-[8rem] box-border block'>
                        <h2 className='text-[6.87rem] relative z-2 text-moss text-right'>Welcome</h2>
                    </div>
                </div>
                {/* MESSAGE */}
                <div className='grow-0 shrink-0 basis-[66.66%] max-w-[66.66%] relative w-full min-h-[1px] pl-[15px] pr-[15px] box-border block'>
                    <p className='text-moss text-[1.125rem] leading-[1.7] mt-0 mb-[1rem] intersect-once intersect:motion-preset-slide-left motion-duration-1000'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus, lacus et porta faucibus, elit ante ultricies purus, eu suscipit arcu felis porta tellus. Nulla pellentesque mi turpis, vitae egestas turpis feugiat sed. Donec sit amet aliquet ipsum, sit amet sagittis dui. Morbi rutrum erat condimentum lorem sollicitudin, eu sodales mi laoreet. Pellentesque id scelerisque arcu. Sed viverra, dolor a pharetra congue, nisl urna congue justo, lobortis malesuada neque orci et risus. Quisque tincidunt odio vel nunc ullamcorper, eu commodo turpis tincidunt. Mauris lobortis lacinia volutpat. Aliquam lobortis bibendum urna, nec laoreet dolor pellentesque quis. Donec ac quam imperdiet, congue ligula a, tempus orci. Donec vehicula sem vitae ipsum ullamcorper, eu molestie mi consectetur. Integer sagittis vehicula posuere.</p>
                    <p className='text-moss text-[1.125rem] leading-[1.7] mt-0 mb-[1rem] font-semibold intersect-once intersect:motion-preset-slide-left motion-duration-1200'>- Ayra & Ian</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About