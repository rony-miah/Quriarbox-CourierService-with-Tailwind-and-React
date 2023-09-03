import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai";
import banner from '../../assets/banner-img.png';
import cloud from '../../assets/cloud.png';

const Banner = () => {
  return (
    <>
        <section className='py-[170px]'>
            <div className=''>
                <img src={cloud} alt="cloud-img" />
            </div>
            <div className='max-w-container mx-auto flex'>
                <div className='banner-text'>
                    <h1 className='font-raleway text-[#261134] font-normal text-[49px] leading-[58.8px] w-[516px]'>A trusted provider of <span className='font-raleway text-[#261134] font-bold text-[49px] leading-[58.8px]'>courier services.</span></h1>
                    <p className='font-raleway text-[#4D4D4D] font-normal text-xl leading-6 w-[330px] mt-4 mb-[41px]'>We deliver your products safely to your home in a reasonable time.</p>
                    <a href="" className='py-3 px-5 border-2 rounded-[5px] border-primary font-oxanium text-primary font-bold text-xl hover:bg-primary hover:text-white'>Get started</a>
                </div>
                <div className=''>
                    <img src={banner} alt="banner-img"/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner