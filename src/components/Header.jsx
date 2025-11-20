import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { ArrowDownward, ArrowDropDown, ArrowDropUp } from '@mui/icons-material'
import './Header.css';
import axios from 'axios'
import { CircularProgress } from '@mui/material'
const Link = styled.a`
    font-family: raleway, Sans-serif;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    color:#666;
    cursor:pointer;
`;



const Bars = styled.div`
    width:26px;
    background:#666;
    height:3px;
     transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
`;

export const Hamburger = ({ showNav, setShowNav }) => {

  const toggleNav = () => { setShowNav(!showNav) };
  return (
    <div onClick={toggleNav} className={`flex flex-col gap-1 cursor-pointer items-center ${showNav ? 'navvisible' : 'navhidden'}`}>
      <Bars></Bars>
      <Bars></Bars>
      <Bars></Bars>
    </div>
  )
}

export default function Header() {

  const [showNav, setShowNav] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [newsletters, setNewsletters] = useState([]);
  // const {baseurl } = useAuth();
  const [loading, setLoading] = useState(true);



  return (
    <div className='relative bg-[#fdf9f2] z-[90]  h-[90px] lg:h-[66px]'>
      <div className='fixed z-[90] bg-[#fdf9f2] lg:flex hidden items-center justify-between px-20 shadow-xl py-5 gap-10 w-full '>
        <img src={"/logo.png"} height={"50px"} width={"50px"} alt="" />
        <div className="flex  items-center list-none   gap-7 ">
          <li className='cursor-pointer'><Link href='/'>Home</Link></li>
          <li className='cursor-pointer'><Link href='/about/tons-trust'>About Us</Link></li>

          <li className='cursor-pointer'><Link href="/gallery" >Gallery</Link></li>
          {/* <li className='cursor-pointer'><Link href="/stories">Stories</Link></li> */}
          <li className='cursor-pointer'><Link href="/donations/make-a-change">Donations</Link></li>
        </div>

      </div>
      <div className='shadow-md lg:hidden  fixed  w-full top-0 bg-white flex justify-between px-4 items-center  py-3'>
        <div className="logo">
          <img src={"/"} height={"80px"} width={"80px"} alt="" />
        </div>
        <div className="btns">
          <Hamburger showNav={showNav} setShowNav={setShowNav}  ></Hamburger>
        </div>
        <div className={`absolute  top-24 overflow-hidden bg-white w-full left-0 ${showNav ? 'showMenu' : 'hideMenu'}`}>
          <div className={`flex flex-col items-center list-none  gap-7 py-9`}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href="/about/tons-trust" className='text-black'>About Us</Link></li>

            <li><Link href="/gallery" className='text-black'>Gallery</Link></li>
            {/* <li><Link href="/stories" className='text-black'>Stories</Link></li> */}
            <li><Link href='/donations/make-a-change' className='text-black'>Donations</Link></li>
          </div>
        </div>

      </div>
    </div>
  )
}