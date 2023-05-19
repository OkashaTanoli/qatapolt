import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/images/logo.png'
import forth1 from '../../../public/images/4/4-1.png'
import forth2 from '../../../public/images/4/4-2.svg'
import forth3 from '../../../public/images/4/4-3.svg'
import Comma from '../../../public/images/comma.png'
import Man from '../../../public/images/man.svg'
import { Open_Sans } from 'next/font/google';

const open_sans = Open_Sans({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin']
})

function Page() {
    const firstData = [
        {
            image: forth1,
            title: 'Qatapolt Features',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod incididunt ut abore et vdolore magna '
        },
        {
            image: forth2,
            title: 'Qatapolt Features',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod incididunt ut abore et vdolore magna '
        },
        {
            image: forth3,
            title: 'Qatapolt Features',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing  elit, sed do eiusmod incididunt ut abore et vdolore magna '
        }
    ]


    const secondData = [
        {
            image: Comma,
            text: 'SCOUT: I used to travel up North on cold rainy days just to be disappointed by a player I heard about through the grapevine. With Qatapolt I can make an informed judgment from the videos players post on their profiles before leaving my house!'
        },
        {
            image: Comma,
            text: 'PLAYER: My parents can’t afford to pay the weekly fees from my local team so it was hard to get seen before. I got my friends to film clips from my school football games to put on Qatapolt and I have been offered trials from two professional teams already! '
        },
    ]

    const thirdData = [
        {
            image: Man,
            name: 'Waqas Abbas',
            profession: 'Designer'
        },
        {
            image: Man,
            name: 'Umair Abbas',
            profession: 'Developer'
        },
    ]


    return (
        <div className={`${open_sans.className}`}>
            <div className='bg_image2 md:pb-52 pb-40'>
                <div className='xl:w-[1200px] w-[90%] m-auto '>
                    <div className='sm:pt-20 pt-5'>
                        <Image src={Logo} alt='logo' className='sm:w-[120px] w-[100px]' />
                    </div>
                    <div className={`md:w-[70%] xs:w-[90%] w-full xs:flex block m-auto md:mt-60 mt-52`}>
                        <input type="text" placeholder='Enter your email address' className='text-[#1C2824] placeholder:text-[#1C2824] placeholder:font-semibold xs:py-5 py-3 px-5 flex-grow w-full' />
                        <button className={`bg-[#1C2824] xs:mt-0 mt-3 xs:py-5 py-3 xs:w-[200px] w-full text-white`}>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className='xl:w-[1200px] w-[90%] m-auto grid md:grid-cols-3 xs:grid-cols-2 grid-cols-1 lg:gap-24 gap-10 md:mt-10 mt-5'>
                {
                    firstData.map((val, index) => {
                        return (
                            <div key={index} className={`py-5 px-8 bg-white box_shadow`}>
                                <Image src={val.image} alt='image' className='w-[60px]' />
                                <h1 className='text-xl font-semibold mt-5 text-[#231F20]'>{val.title}</h1>
                                <p className='text-[#595A5A] mt-4'>{val.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className={`sm:w-[600px] w-[90%] m-auto mt-28`}>
                <h1 className='text-3xl text-[#231F20] text-center font-semibold'>10k+ Experts Trust Us</h1>
                <p className='text-[#595A5A] text-center text-lg mt-10'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing  elit, sed do eiusmod tempor
                    incididunt ut abore et vdolore magna aliqua.
                </p>
            </div>
            <div className='xl:w-[1200px] w-[90%] m-auto grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-7 md:mt-15 mt-10'>
                {
                    secondData.map((val, index) => {
                        return (
                            <div key={index} className={`py-5 px-8 bg-[#F9F9FA] box_shadow`}>
                                <Image src={val.image} alt='image' className='w-[30px] drop_shadow' />
                                <p className='text-[#595A5A] w-[80%] m-auto text-center'>{val.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='xl:w-[1200px] w-[90%] m-auto grid md:grid-cols-2 grid-cols-1 lg:gap-14 gap-7 md:mt-15 mt-10'>
                {
                    thirdData.map((val, index) => {
                        return (
                            <div key={index} className={`py-5 px-8 flex items-center`}>
                                <Image src={val.image} alt='image' className='w-[100px] drop_shadow' />
                                <div className='w-[150px]'>
                                    <p className='text-[#231F20] font-semibold w-[80%] m-auto text-center'>{val.name}</p>
                                    <p className='text-[#595A5A] w-[80%] m-auto text-center'>{val.profession}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Page;