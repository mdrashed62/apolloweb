import { Avatar } from '@nextui-org/react';
import React from 'react';
import { FaEllipsisV, FaPhoneAlt, FaSearch, FaThLarge } from "react-icons/fa";

const Navbar2 = ({ chat }) => {
  return (
    <div
      className='flex items-center pl-6 justify-between py-[13px]'
      style={{
        background: "linear-gradient(to right, #F8F5F8 15%, #F1E4F6 25%, #FFF9F9 60%)",
      }}
    >
      <div className='flex gap-2 items-center'>
        <Avatar src={chat.avatar} name="Joe" />
        <div>
          <h1 className='font-semibold'>{chat.name}</h1>
          <p className='text-[14px]'>{chat.status}</p>
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
