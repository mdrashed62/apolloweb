import { Avatar } from '@nextui-org/react';
import React from 'react';
import { FaEllipsisV, FaPhoneAlt, FaSearch, FaThLarge } from "react-icons/fa";
import photo from '../../../public/assests/images.jpeg'
import Image from 'next/image';

const Navbar2 = () => {
  return (
    <div
      className='flex items-center justify-between p-4'
      style={{
        background: "linear-gradient(to right, #F8F5F8 15%, #F1E4F6 25%, #FFF9F9 60%)",
      }}
    >
      <div className='flex gap-2 items-center'>
       <Image width={30} height={30} src={photo} alt="photo" />
        <div>
          <h1 className='font-semibold'>Duxica Team</h1>
          <p className='text-[10px]'>22 Members. 12 Online</p>
        </div>
      </div>

      <div className='flex gap-4 pr-6 text-gray-300 items-center'>
        <FaPhoneAlt />
        <FaSearch />
        <FaEllipsisV />
        <p className='mb-1'>|</p>
        <FaThLarge />
      </div>
    </div>
  );
}

export default Navbar2;
