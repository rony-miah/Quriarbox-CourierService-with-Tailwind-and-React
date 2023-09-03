import React from 'react'
// import {FaSquareFacebook} from "react-icons/fa";

const Contact = () => {
  return (
    <>
        <section>
            <div className='max-w-container mx-auto pb-[182px]'>
                <div className='mb-[85px]'>
                    <h2 className='font-oxanium text-primary font-bold text-[31.25px] text-center mb-[13px]'>FIND US</h2>
                    <h4 className='font-raleway text-[#222132] font-extrabold text-[39px] leading-[42.9px] text-center'>Access us easily</h4>
                </div>
                <div className='flex'>
                    <div className='w-3/5'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.091442450045!2d90.41717567455608!3d23.998916679191737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dbe88b88f36b%3A0xbd3e415ec500b0fc!2sMojlishpur%20Bridge!5e1!3m2!1sen!2sbd!4v1691171104901!5m2!1sen!2sbd"className="w-full h-[428px]"></iframe>
                    </div>
                    <div className='w-2/5 p-[80px] [88px] [113px] [88px]'>                        
                        <h2 className='font-raleway text-[#464558] font-bold text-xl leading-6 mb-[39px]'>Contact with us</h2>
                        <div className='flex mb-[18px] ml-[-4px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <path d="M13.5 14.625C15.364 14.625 16.875 13.114 16.875 11.25C16.875 9.38604 15.364 7.875 13.5 7.875C11.636 7.875 10.125 9.38604 10.125 11.25C10.125 13.114 11.636 14.625 13.5 14.625Z" stroke="#FFAF0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.5 2.25C11.1131 2.25 8.82387 3.19821 7.13604 4.88604C5.44821 6.57387 4.5 8.86305 4.5 11.25C4.5 13.3785 4.95225 14.7712 6.1875 16.3125L13.5 24.75L20.8125 16.3125C22.0478 14.7712 22.5 13.3785 22.5 11.25C22.5 8.86305 21.5518 6.57387 19.864 4.88604C18.1761 3.19821 15.8869 2.25 13.5 2.25V2.25Z" stroke="#FFAF0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h6 className='font-raleway text-[#5C5B6C] font-normal text-base leading-[19.2px] ml-[10px]'>2277 Lorem Ave, San Diego, CA 22553</h6>
                        </div>
                        <div className='flex mb-[15px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M11 0C4.9346 0 0 4.9346 0 11C0 17.0654 4.9346 22 11 22C17.0654 22 22 17.0654 22 11C22 4.9346 17.0654 0 11 0ZM11 19.8C6.1479 19.8 2.2 15.8521 2.2 11C2.2 6.1479 6.1479 2.2 11 2.2C15.8521 2.2 19.8 6.1479 19.8 11C19.8 15.8521 15.8521 19.8 11 19.8Z" fill="#FFAF0F"/>
                                <path d="M12.1 5.50024H9.90002V12.1002H16.5V9.90024H12.1V5.50024Z" fill="#FFAF0F"/>
                            </svg>
                            <h6 className='font-raleway text-[#5C5B6C] font-normal text-base leading-[19.2px] ml-[15px]'>Monday - Friday: 10 am - 10pm Sunday: 11 am - 9pm</h6>
                        </div>
                        <div className='flex mb-[51px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                                <path d="M19.8 17.6H2.2C1.61652 17.6 1.05694 17.3682 0.644365 16.9556C0.231785 16.5431 0 15.9835 0 15.4V2.1043C0.0246759 1.53757 0.26731 1.00227 0.677246 0.610171C1.08718 0.218067 1.63273 -0.000535963 2.2 9.86832e-07H19.8C20.3835 9.86832e-07 20.9431 0.231786 21.3556 0.644366C21.7682 1.05695 22 1.61652 22 2.2V15.4C22 15.9835 21.7682 16.5431 21.3556 16.9556C20.9431 17.3682 20.3835 17.6 19.8 17.6ZM2.2 4.2548V15.4H19.8V4.2548L11 10.12L2.2 4.2548ZM3.08 2.2L11 7.48L18.92 2.2H3.08Z" fill="#FFAF0F"/>
                            </svg>
                            <h6 className='font-raleway text-[#5C5B6C] font-normal text-base leading-[19.2px] ml-[15px]'>info@quriarbox.com</h6>
                        </div>
                        <div>
                            {/* <FaSquareFacebook/> */}
                            {/* <a href=""><FaSquareFacebook/></a> */}
                        </div>
                    </div>                    
                </div>
                <div className='w-[560px] mx-auto pt-[25px] pb-[21px] pl-[113px] pr-[113px] border-2 border-primary rounded-[5px] font-oxanium text-primary font-bold text-xl text-center mt-[31px] hover:bg-primary hover:text-white'>
                    <a href="">Call us to delivery  123-456789</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact