import React from 'react'

const Subscription = () => {
  return (
    <>
        <section className='bg-[#222132]'>
            <div className='max-w-container mx-auto py-[84px]'>
                <div className='flex'>
                    <div className='w-1/2'>
                        <h2 className='font-raleway text-white font-extrabold text-[39px] leading-[42.9px] mb-[13px]'>Get an update every week</h2>
                        <p className='w-[500px] font-raleway text-[#C5C5D2] font-normal text-base leading-[23.2px]'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
                    </div>
                    <div className='w-1/2 justify-end'>
                        <h2 className='font-oxanium text-primary font-bold text-[18px] mb-[13px]'>SUBSCRIBE TO NEWSLETTER</h2>
                        <div className='flex'>
                            <input className='w-[386px] font-raleway text-[#9291A1] font-normal text-base leading-[19.2px] py-[15px] pl-[18px] bg-transparent border-2 border-[#C5C5D2] rounded-[5px]' type="email" placeholder="Enter your mail" />
                            <div className='py-3 px-5 border-2 border-primary rounded-[5px] ml-4 font-oxanium text-primary font-bold text-xl text-center hover:bg-primary hover:text-white'>
                                <a href="" >Subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Subscription