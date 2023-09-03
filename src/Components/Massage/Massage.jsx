import React from 'react'
import massageImg from '../../assets/massage-img.png';
const Massage = () => {
  return (
    <>
        <section>
            <div className='max-w-container mx-auto'>
                <div className='w-[872px] flex mx-auto pt-[172px] pb-[170px]'>
                    <div className='w-1/2'>
                        <img src={massageImg} alt="Image" />
                        <h2 className='font-oxanium text-primary font-bold text-2xl mt-[13px]'>REQUEST A CALLBACK</h2>
                        <h3 className='font-raleway text-[#222132] font-extrabold text-[39px] leading-[42.9px] mt-5'>We will contact in the shortest time.</h3>
                        <p className='font-raleway text-[#9291A1] font-semibold text-[25px] leading-[30px] mt-[9px]'>Monday to Friday, 9am-5pm.</p>
                    </div>
                    <div className='w-1/2 mt-[25px]'>
                        <input className='w-full font-raleway text-[#9291A1] font-normal text-base leading-[19.2px] py-[15px] pl-[19px] bg-[#FFF3DF] border-2 border-[#C5C5D2] rounded-2' type="text" placeholder="Name" />

                        <input className='w-full font-raleway text-[#9291A1] font-normal text-base leading-[19.2px] py-[15px] pl-[19px] bg-[#FFF3DF] border-2 border-[#C5C5D2] rounded-2 mt-4' type="email" placeholder="Email" />

                        <input className='block w-full font-raleway text-[#9291A1] font-normal text-base leading-[19.2px] pt-[13px] pb-[118px] pr-[337px] pl-5 bg-[#FFF3DF] border-2 border-[#C5C5D2] rounded-2 mt-4' placeholder="Message"></input>
                        
                        <div className='w-full py-3 px-5 border-2 border-primary rounded-[5px] font-oxanium text-primary font-bold text-xl text-center mt-[54px] hover:bg-primary hover:text-white'>
                            <a href="" >Send Message</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Massage