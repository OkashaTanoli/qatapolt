import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../public/images/logo.png'


function Header() {
    return (
        <div className='flex justify-between'>
            <Link href={'/'}><Image src={Logo} alt='logo' className='sm:w-[120px] w-[100px]' /></Link>
            <div className='flex gap-10 text-white font-semibold'>
                <Link href={'/'}><div>Home</div></Link>
                <Link href={'/about'}><div>About</div></Link>
            </div>
        </div>
    );
}

export default Header;