import React from 'react'
import banner2 from '../../assets/banner-img2.png';

const VideoSection = () => {
  return (
    <>
        <section className="pt-[162px] pb-[150px]"> 
            <div className='max-w-container mx-auto'>
                <div className="bg-banner2 bg-no-repeat bg-cover bg-center rounded-[15px] w-full h-full  pt-[126px] pr-[336px] pb-[168px] pl-[311px]">
                    <div className=''>
                        <div className='flex items-center justify-center mb-[19px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="115" height="116" viewBox="0 0 115 116" fill="none">
                                <ellipse cx="58" cy="58.5044" rx="43" ry="43.3739" fill="#F95C19"/>
                                <path d="M74 57.0419C75.3333 57.8117 75.3333 59.7362 74 60.506L50 74.3624C48.6667 75.1322 47 74.1699 47 72.6303V44.9175C47 43.3779 48.6667 42.4157 50 43.1855L74 57.0419Z" fill="white"/>
                            </svg>
                        </div>
                        <h2 className='font-oxanium text-primary font-bold text-[31.25px] text-center mb-7'>FASTEST DELIVERY</h2>
                        <div className=''>
                        <p className='font-oxanium text-white font-normal text-[25px] text-center leading-[30px]'> You can get your valuable item in the fastest period of time with safety. Because your emergency is our first priority.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default VideoSection