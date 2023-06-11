import Image from 'next/image'
import Svg1 from '../../public/images/bg.svg'
import Mobile1 from '../../public/images/mobile1.png'
import Mobile2 from '../../public/images/mobile2.png'
import Mobile3 from '../../public/images/mobile3.png'
import first1 from '../../public/images/1/1-1.svg'
import first2 from '../../public/images/1/1-2.svg'
import first3 from '../../public/images/1/1-3.svg'
import first4 from '../../public/images/1/1-4.svg'
import second1 from '../../public/images/2/2-1.png'
import second2 from '../../public/images/2/2-2.png'
import second3 from '../../public/images/2/2-3.png'
import third1 from '../../public/images/3/3-1.png'
import third2 from '../../public/images/3/3-2.png'
import third3 from '../../public/images/3/3-3.png'
import { Open_Sans } from 'next/font/google'
import { RiDownloadLine } from 'react-icons/ri'
import { FaApple } from 'react-icons/fa'
import { BsAndroid2 } from 'react-icons/bs'
import fifth1 from '../../public/images/5/5-1.png'
import { GoTelescope } from 'react-icons/go'
import fifth3 from '../../public/images/5/5-3.png'
import fifth4 from '../../public/images/5/5-4.png'
import fifth5 from '../../public/images/5/5-5.png'
import Comma from '../../public/images/comma.png'
import Man from '../../public/images/man.svg'
import localFont from 'next/font/local';
import Header from '@/components/header'

const open_sans = Open_Sans({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin']
})
const visbycf = localFont({ src: '../lib/Demo_Fonts/Fontspring-DEMO-visbycf-bold.otf' });
const calibri = localFont({ src: '../lib/Calibri/Calibri.ttf' });


const firstData = [
    {
        image: first1,
        title: 'Arena',
        text: 'Explore and customise your timeline to enjoy the Qatapolt experience. This is essentially the ‘Home’ button.'
    },
    {
        image: first2,
        title: 'Message',
        text: 'Communicate with other users with our private message feature. Take advantage of the group chat feature where you can speak with multiple users in the same chat. '
    },
    {
        image: first3,
        title: 'Profile',
        text: 'Keep track of your favourite players via a private watchlist that only you can see. This feature was heavily requested by scouts and agents, so their peers are unable to scope out their findings.'
    },
    {
        image: first4,
        title: 'Watchlist',
        text: "This is your blank canvas to paint a picture that let's other users into your world. Your profile page will store all of your posts and allow you to edit your profile picture, bio, etc. "
    },
]

const secondData = [
    {
        image: second1,
        title: 'Medal',
        text: 'If you like the content then you should give out a medal! This is essentially the ‘Like’ button.'
    },
    {
        image: second2,
        title: 'Trophy',
        text: 'A trophy is used to signify a verified user. This is equivalent to a ‘Verification Tick’.'
    },
    {
        image: second3,
        title: 'Free Agents',
        text: 'When one door closes, another opens. The ideal platform to create new opportunities after you have parted ways with a professional club / organization.'
    },

]
const thirdData = [
    {
        image: third1,
        title: 'Advanced Search',
        text: 'This will help you to find exactly who or what you are looking for within our app.'
    },
    {
        image: third2,
        title: 'Qatapolt News',
        text: 'Keep track of our news page to stay in the loop for all the latest updates for the Qatapolt Community.'
    },
    {
        image: third3,
        title: 'Live Scores',
        text: 'Stay updated with the live scores from top leagues across the world such as the English Premier League.'
    },

]


const about = [
    {
        title: 'Executive Summary',
        text: 'Qatapolt is a social media app that is truly dedicated to turning dreams into reality within sport. Athletes will be able to put themselves in the “shop window” on Qatapolt in a similar fashion to Justin Bieber launching a successful music career with the aid of YouTube. Prior to global success, Mo Salah would travel for 9 hours to get to training and Sadio Mane took a secret flight to France to attend a trial. This would all be streamlined with Qatapolt.'
    },
    {
        title: 'Objectives ',
        text: 'Qatapolt’s objective is to create a platform that helps to improve the efficiency in the scouting element of sport for all stakeholders. Players, clubs, agents and scouts; to name a few, will benefit from a streamlined process which helps to narrow down the time it takes to connect with the other stakeholders. Players will regularly upload videos of themselves in action, which will save time and money for clubs, agents and scouts who are looking to find these player Qatapolt will also benefit the players because their talents will now be showcased like never before.'
    },
    {
        title: 'Our Vision',
        text: 'Qatapolt isn’t just a scouting platform, we plan to drive the majority of ‘sport traffic’ away from other generic social media platforms to create a huge community for people that love sport. Therefore, you don’t have to be an athlete, coach or scout to use the platform. An Aston Villa fan who has never played football at any level can become a ‘Qatapolt Member’ to express their views and network within our community.'
    }
]

const fifthData = [
    {
        image: fifth1,
        text: 'Connect With Others',
        type: 'image'
    },
    {
        image: <GoTelescope size={50} className='text-[#0C6554]' /> as any,
        text: 'Get Discovered',
        type: 'icon'

    },
    {
        image: fifth3,
        text: 'Find New Players',
        type: 'image'

    },
    {
        image: fifth4,
        text: 'Show Your Talent',
        type: 'image'

    },
    {
        image: fifth5,
        text: 'Talk  About Sports',
        type: 'image'

    },
]



const AboutSecondData = [
    {
        image: Comma,
        text: 'SCOUT: I used to travel up North on cold rainy days just to be disappointed by a player I heard about through the grapevine. With Qatapolt I can make an informed judgment from the videos players post on their profiles before leaving my house!'
    },
    {
        image: Comma,
        text: 'PLAYER: My parents can’t afford to pay the weekly fees from my local team so it was hard to get seen before. I got my friends to film clips from my school football games to put on Qatapolt and I have been offered trials from two professional teams already! '
    },
]


// const AboutThirdData = [
//     {
//         image: Man,
//         name: 'Waqas Abbas',
//         profession: 'Designer'
//     },
//     {
//         image: Man,
//         name: 'Umair Abbas',
//         profession: 'Developer'
//     },
// ]

export default function Home() {
    return (
        <div className='mb-20'>
            <div className='relative'>
                <div className='relative z-30 bg_image pb-28'>
                    <div className='2xl:w-[1500px] xl:w-[1300px] w-[90%] m-auto'>
                        <div className='sm:pt-10 pt-5'>
                            <Header />
                        </div>
                        <div className={`sm:flex block justify-between items-center gap-10 sm:mt-0 mt-10`}>
                            <div className='md:w-1/2 sm:w-2/3 w-full'>
                                <h1 className={`2xl:text-6xl lg:text-5xl md:text-3xl text-xl text-center text-white ${visbycf.className}`}>Create Your Own Luck</h1>
                                <p className={`2xl:text-[21px] lg:text-lg md:text-base text-sm sm:text-left text-center md:mt-3 mt-2 text-white ${calibri.className}`}>
                                    Qatapolt is a social media app that is truly dedicated to turning dreams into reality within sport. Athletes can show their talent and get discovered by agents, scouts, clubs, etc.
                                </p>
                                <p className={`2xl:text-[21px] lg:text-lg md:text-base text-sm sm:text-left text-center md:mt-3 mt-2 text-white ${calibri.className}`}>
                                    Qatapolt is also impeccable for sports fans because you can connect with your favorite athletes and other fans to discuss the latest in sport.
                                </p>
                                <div className='flex gap-3 items-center sm:justify-start justify-center md:mt-10 mt-5'>
                                    <button className={`flex items-center rounded-2xl text-lg font-bold pl-3 linearGradient gap-2 h-[45px] w-[150px] ${calibri.className}`}><RiDownloadLine size={15} /> Download</button>
                                    <FaApple size={35} className='text-white' />
                                    <BsAndroid2 size={30} className='text-white' />
                                </div>
                            </div>
                            <div className='md:w-1/2 sm:w-1/3 w-full flex justify-center'>
                                <Image src={Mobile1} alt='mobile1' className='xl:w-[50%] md:w-[40%] sm:w-[70%] w-[200px] sm:mt-0 mt-5' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='2xl:w-[1500px] xl:w-[1300px] w-[90%] m-auto md:mt-20 mt-10'>
                <div className={`md:w-[70%] xs:w-[90%] mx-auto w-full xs:flex block border-[5px] border-[#517570] mt-10`}>
                    <input type="text" placeholder='Enter your email address' className='text-[#1C2824] border border-zinc-300 xs:py-5 py-3 px-5 flex-grow w-full' />
                    <button className={`linearGradient xs:mt-0 mt-3 xs:py-5 py-3 xs:w-[200px] w-full text-white`}>SUBSCRIBE</button>
                </div>
            </div>
            <div className='2xl:w-[1500px] xl:w-[1300px] w-[90%] m-auto grid md:grid-cols-4 xs:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 md:mt-28 mt-10'>
                {
                    firstData.map((val, index) => {
                        return (
                            <div key={index} className={`py-5 px-5 bg-[#F4F4F5] box_shadow ${open_sans.className}`}>
                                <Image src={val.image} alt='image' className='2xl:w-[70px] w-[60px] m-auto' />
                                <h1 className='2xl:text-[23px] text-xl font-semibold text-center 2xl:mt-4 mt-2 text-[#231F20]'>{val.title}</h1>
                                <p className='text-[#595A5A] 2xl:text-base text-sm text-center 2xl:mt-2 mt-1'>{val.text}</p>
                            </div>
                        )
                    })
                }
            </div>



            <div className={`2xl:w-[1500px] xl:w-[1300px] w-[90%] m-auto mt-28 grid lg:grid-cols-3 gap-10 items-center ${open_sans.className}`}>
                <div className='flex flex-col gap-14'>
                    {
                        secondData.map((val, index) => {
                            return (
                                <div key={index} className='flex items-start gap-7'>
                                    <div className='2xl:w-[80px] w-[70px] 2xl:h-[67px] h-[60px] flex justify-center items-center flex-shrink-0 bg-[#0C3933]'>
                                        <Image src={val.image} alt='image' className='2xl:w-[40px] w-[35px]' />
                                    </div>
                                    <div>
                                        <h1 className='text-[#231F20] 2xl:text-xl text-lg font-semibold'>{val.title}</h1>
                                        <p className='text-[#595A5A] 2xl:text-base text-sm mt-1'>{val.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex justify-center'>
                    <Image src={Mobile2} alt='mobile' className='lg:w-[60%] sm:w-[250px] w-[200px]' />
                </div>
                <div className={`flex flex-col gap-14 ${open_sans.className}`}>
                    {
                        thirdData.map((val, index) => {
                            return (
                                <div key={index} className='flex items-start gap-7'>
                                    <div className='2xl:w-[80px] w-[70px] 2xl:h-[67px] h-[60px] flex justify-center items-center flex-shrink-0 bg-[#0C3933]'>
                                        <Image src={val.image} alt='image' className='2xl:w-[40px] w-[35px]' />
                                    </div>
                                    <div>
                                        <h1 className='text-[#231F20] 2xl:text-xl text-lg font-semibold'>{val.title}</h1>
                                        <p className='text-[#595A5A] 2xl:text-base text-sm mt-1'>{val.text}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>



            <div className={`2xl:w-[1500px] xl:w-[1300px] w-[90%] m-auto my-32 ${open_sans.className}`}>
                <h1 className='2xl:text-4xl text-3xl text-[#231F20] font-bold text-center underline'>About Us</h1>
                <div className='lg:flex block items-center gap-10 mt-14'>
                    <div className='lg:w-[55%] w-full'>
                        {
                            about.map((val, index) => {
                                return (
                                    <div key={index} className='mb-7'>
                                        <h1 className='2xl:text-2xl text-xl text-[#231F20] font-semibold'>{val.title}</h1>
                                        <p className='text-[#595A5A] 2xl:text-base text-sm mt-2'>{val.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='w-[45%] lg:flex hidden justify-center'>
                        <Image src={Mobile3} alt='image' className='w-[60%]' />
                    </div>
                </div>
            </div>




            <div className='2xl:w-[1500px] xl:w-[1300px] w-[90%] m-auto grid md:grid-cols-5 xs:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 md:mt-28 mt-10'>
                {
                    fifthData.map((val, index) => {
                        return (
                            <div key={index} className={`py-5 px-8 bg-white box_shadow`}>
                                <div className='flex justify-center items-center'>
                                    {
                                        val.type === 'image' ?
                                            <Image src={val.image} alt='image' className='2xl:w-[60px] w-[50px]' />
                                            :
                                            val.image
                                    }
                                </div>
                                <h1 className='font-semibold mt-5 text-[#231F20] 2xl:text-lg text-center'>{val.text}</h1>
                            </div>
                        )
                    })
                }
            </div>


            <div className='2xl:w-[1500px] xl:w-[1300px] w-[90%] m-auto grid md:grid-cols-2 grid-cols-1 lg:gap-24 gap-7 md:mt-32 mt-20'>
                {
                    AboutSecondData.map((val, index) => {
                        return (
                            <div key={index} className={`2xl:py-8 py-5 px-8 bg-[#F9F9FA] box_shadow`}>
                                <Image src={val.image} alt='image' className='2xl:w-[37px] w-[30px] drop_shadow' />
                                <p className='text-[#595A5A] w-[80%] m-auto 2xl:text-lg text-center'>{val.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            {/* <div className='2xl:w-[1500px] xl:w-[1300px] w-[90%] m-auto grid md:grid-cols-2 grid-cols-1 lg:gap-14 gap-7 md:mt-15 mt-10'>
                {
                    AboutThirdData.map((val, index) => {
                        return (
                            <div key={index} className={`2xl:py-8 py-5 px-8 flex items-center 2xl:gap-3`}>
                                <Image src={val.image} alt='image' className='2xl:w-[130px] w-[100px] drop_shadow' />
                                <div className='w-[150px]'>
                                    <p className='text-[#231F20] font-semibold w-[80%] m-auto 2xl:text-lg text-center'>{val.name}</p>
                                    <p className='text-[#595A5A] w-[80%] m-auto 2xl:text-lg text-center'>{val.profession}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div> */}
        </div>
    )
}
