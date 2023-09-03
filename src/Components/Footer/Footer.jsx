import React from 'react'
import logo from '../../assets/Logo.png';

const Footer = () => {
  return (
    <>
        <section className='bg-[#2F2E41]'>
            <div className='max-w-container mx-auto pt-[50px] pb-[56px]'>
                <div className='flex'>
                    <div className='w-1/5'>
                        <a href="">
                            <img src={logo} alt="logo" />
                        </a>
                        <p className='w-[190px] font-raleway text-[#9291A1] font-semibold text-base leading-[22px] mt-[18px]'>The most trusted Courier company in your area.</p>
                    </div>
                    <div className='w-4/5 flex justify-end'>
                        <div className='w-1/4'>
                            <h3 className='font-oxanium text-white font-bold text-xl mb-[22px]'>Other links</h3>
                            <p className='font-raleway text-[#9291A1] font-semibold text-base leading-[22px] mb-[7px]'><a href="">Blogs</a></p>
                            <p className='font-raleway text-[#9291A1] font-semibold text-base leading-[22px] mb-[7px]'><a href="">Movers website</a></p>
                            <p className='font-raleway text-[#9291A1] font-semibold text-base leading-[22px]'><a href="">Traffic Update</a></p>                            
                        </div>
                        <div className='w-1/4'>
                            <h3 className='font-oxanium text-white font-bold text-xl mb-[22px]'>Services</h3>
                            <p className='font-raleway text-[#9291A1] font-semibold text-base leading-[22px] mb-[7px]'><a href="">Corporate goods</a></p>
                            <p className='font-raleway text-[#9291A1] font-semibold text-base leading-[22px] mb-[7px]'><a href="">Artworks</a></p>
                            <p className='font-raleway text-[#9291A1] font-semibold text-base leading-[22px]'><a href="">Documents</a></p>                            
                        </div>
                        <div className='w-1/4'>
                            <h3 className='font-oxanium text-white font-bold text-xl mb-[22px]'>Customer Care</h3>
                            <p className='font-raleway text-[#9291A1] font-semibold text-base leading-[22px] mb-[7px]'><a href="">About Us</a></p>
                            <p className='font-raleway text-[#9291A1] font-semibold text-base leading-[22px] mb-[7px]'><a href="">Contact US</a></p>
                            <p className='font-raleway text-[#9291A1] font-semibold text-base leading-[22px]'><a href="">Get Update</a></p>                            
                        </div>                    
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer