import React from 'react'
import icon1 from '../../assets/icon1.png';

const Service = () => {
  return (
    <>
        <section className='pb-[180px]'>
            <div className='max-w-container mx-auto'>
                <div className='text-center'>
                    <h2 className='font-oxanium text-primary font-bold text-[31.25px]'>SERVICES</h2>
                    <h3 className='font-raleway text-[#11111D] font-extrabold text-[39px] mt-[11px] mb-[86px]'>Our services for you</h3>
                </div>
                <div className='flex gap-x-6'>
                    <div className='w-1/3 pt-[67px] pb-[49px] pl-[60px] pr-[61px] bg-white rounded-2xl'>
                        <div className='flex items-center justify-center'>
                            <img src={icon1} alt="" />
                        </div>
                        <h2 className='font-raleway text-[#464558] font-extrabold text-[25px] mt-6 text-center'>Business Services</h2>
                        <p className='font-raleway text-[#7B7A8B] font-normal text-base leading-6 mt-8'>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
                        <ul className='mt-[9px] list-disc list-inside mb-[60px]'>
                            <li className='font-raleway text-[#7B7A8B] font-normal text-base leading-5 mt-3'>Corporate goods</li>
                            <li className='font-raleway text-[#7B7A8B] font-normal text-base leading-5 mt-3'>Shipment</li>
                            <li className='font-raleway text-[#7B7A8B] font-normal text-base leading-5 mt-3'>Accesories</li>
                        </ul>
                        <div className='w-full py-3 px-5 border-2 border-primary rounded-[5px] font-oxanium text-primary font-bold text-xl text-center hover:bg-primary hover:text-white'>
                            <a href="" >Learn more</a>
                        </div>
                    </div>
                    <div className='w-1/3 pt-[67px] pb-[49px] pl-[60px] pr-[61px] bg-white rounded-2xl'>
                        <div className='flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="86" viewBox="0 0 71 86" fill="none">
                                <rect opacity="0.6" x="0.270996" width="69.9704" height="67" rx="33.5" fill="#FFAF0F"/>
                                <path d="M60.9375 42.0069V33.2C60.9375 31.9831 59.9544 31 58.7375 31H12.2625C11.0457 31 10.0625 31.9831 10.0625 33.2V42.0069C8.91442 42.0756 8.00004 43.0312 8.00004 44.2V53.2544C7.99564 54.9184 8.33258 56.5657 8.99004 58.0944C9.28567 58.7956 9.65004 59.4556 10.0625 60.0813V83.8C10.0625 85.01 11.0457 86 12.2625 86H58.7375C59.9544 86 60.9375 85.0169 60.9375 83.8V60.0813C61.3565 59.454 61.7156 58.7888 62.01 58.0944C62.6631 56.5613 63 54.9319 63 53.2544V44.2C63 43.0312 62.0856 42.0756 60.9375 42.0069ZM15.0125 35.95H55.9875V42H15.0125V35.95ZM39.9 81.0569H31.1V73.9H39.9V81.0569ZM55.9875 81.0569H44.3V71.7C44.3 70.4831 43.3169 69.5 42.1 69.5H28.9C27.6832 69.5 26.7 70.4831 26.7 71.7V81.0569H15.0125V64.4056C15.2119 64.5019 15.4182 64.5981 15.6313 64.6806C17.1644 65.3269 18.7938 65.65 20.4713 65.65C22.1488 65.65 23.7713 65.3269 25.3113 64.6806C26.26 64.2819 27.1538 63.7731 27.9719 63.1613C27.9857 63.1544 27.9994 63.1544 28.0132 63.1613C28.8338 63.7757 29.7275 64.2861 30.6738 64.6806C32.2069 65.3269 33.8363 65.65 35.5138 65.65C37.1913 65.65 38.8138 65.3269 40.3538 64.6806C41.3025 64.2819 42.1963 63.7731 43.0144 63.1613C43.0281 63.1544 43.0419 63.1544 43.0556 63.1613C43.8763 63.7757 44.77 64.2861 45.7163 64.6806C47.2494 65.3269 48.8788 65.65 50.5563 65.65C52.2338 65.65 53.8563 65.3269 55.3963 64.6806C55.6025 64.5913 55.8088 64.5019 56.015 64.4056V81.0569H55.9875ZM58.05 53.2544C58.05 57.3656 54.6813 60.7 50.5356 60.7C47.7306 60.7 45.2831 59.1806 43.9906 56.9256C43.7913 56.5819 43.4338 56.3687 43.035 56.3687H42.9938C42.6019 56.3687 42.2375 56.5819 42.0381 56.9256C41.3786 58.0759 40.4262 59.0311 39.2778 59.694C38.1294 60.357 36.826 60.7041 35.5 60.7C32.7019 60.7 30.2613 59.1875 28.9688 56.9394C28.7625 56.5887 28.3913 56.3687 27.9857 56.3687C27.58 56.3687 27.2019 56.5887 27.0025 56.9394C26.3391 58.0853 25.3855 59.0362 24.2377 59.6964C23.0899 60.3565 21.7885 60.7027 20.4644 60.7C16.3188 60.7 12.95 57.3656 12.95 53.2544V46.9844C12.95 46.9637 12.9638 46.95 12.9844 46.95H58.0156C58.0363 46.95 58.05 46.9637 58.05 46.9844V53.2544Z" fill="#F95C19"/>
                            </svg>
                        </div>
                        <h2 className='font-raleway text-[#464558] font-extrabold text-[25px] mt-6 text-center'>Statewide Services</h2>
                        <p className='font-raleway text-[#7B7A8B] font-normal text-base leading-6 mt-8'>Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.</p>
                        <ul className='mt-[9px] list-disc list-inside mb-[60px]'>
                            <li className='font-raleway text-[#7B7A8B] font-normal text-base leading-5 mt-3'>Personal items</li>
                            <li className='font-raleway text-[#7B7A8B] font-normal text-base leading-5 mt-3'>Percels</li>
                            <li className='font-raleway text-[#7B7A8B] font-normal text-base leading-5 mt-3'>Documents</li>
                        </ul>
                        <div className='w-full py-3 px-5 border-2 border-primary rounded-[5px] font-oxanium text-primary font-bold text-xl text-center hover:bg-primary hover:text-white'>
                            <a href="" >Learn more</a>
                        </div>
                    </div>
                    <div className='w-1/3 pt-[67px] pb-[49px] pl-[60px] pr-[61px] bg-white rounded-2xl'>
                        <div className='flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="71" height="86" viewBox="0 0 71 86" fill="none">
                                <rect opacity="0.6" x="0.492676" width="69.9704" height="67" rx="33.5" fill="#FFAF0F"/>
                                <path d="M47 39.25V36.5C47 35.0413 46.4205 33.6424 45.3891 32.6109C44.3576 31.5795 42.9587 31 41.5 31H30.5C29.0413 31 27.6424 31.5795 26.6109 32.6109C25.5795 33.6424 25 35.0413 25 36.5V39.25C22.0826 39.25 19.2847 40.4089 17.2218 42.4718C15.1589 44.5347 14 47.3326 14 50.25V80.5C14 81.9587 14.5795 83.3576 15.6109 84.3891C16.6424 85.4205 18.0413 86 19.5 86H52.5C53.9587 86 55.3576 85.4205 56.3891 84.3891C57.4205 83.3576 58 81.9587 58 80.5V50.25C58 47.3326 56.8411 44.5347 54.7782 42.4718C52.7153 40.4089 49.9174 39.25 47 39.25ZM30.5 36.5H41.5V39.25H30.5V36.5ZM36 50.25L41.5 55.75L36 61.25L30.5 55.75L36 50.25ZM52.5 80.5H19.5V69.5H25V75H27.75V69.5H52.5V80.5ZM52.5 66.75H19.5V50.25C19.5 48.7913 20.0795 47.3924 21.1109 46.3609C22.1424 45.3295 23.5413 44.75 25 44.75H47C48.4587 44.75 49.8576 45.3295 50.8891 46.3609C51.9205 47.3924 52.5 48.7913 52.5 50.25V66.75Z" fill="#F95C19"/>
                            </svg>
                        </div>
                        <h2 className='font-raleway text-[#464558] font-extrabold text-[25px] mt-6 text-center'>Personal Services</h2>
                        <p className='font-raleway text-[#7B7A8B] font-normal text-base leading-6 mt-8'>You can trust us to safely deliver your most sensitive documents to the specific area in a short time.</p>
                        <ul className='mt-[9px] list-disc list-inside mb-[60px]'>
                            <li className='font-raleway text-[#7B7A8B] font-normal text-base leading-5 mt-3'>Gifts</li>
                            <li className='font-raleway text-[#7B7A8B] font-normal text-base leading-5 mt-3'>Package</li>
                            <li className='font-raleway text-[#7B7A8B] font-normal text-base leading-5 mt-3'>Documents</li>
                        </ul>
                        <div className='w-full py-3 px-5 border-2 border-primary rounded-[5px] font-oxanium text-primary font-bold text-xl text-center hover:bg-primary hover:text-white'>
                            <a href="" >Learn more</a>
                        </div>
                    </div>                                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Service