import React from 'react';
import {
  ArrowRight,
  Call, Facebook, Instagram, LinkedIn, MailOutline, Twitter, YouTube
} from '@mui/icons-material';
import { Divider, IconButton, TextField } from '@mui/material';
import { toast } from 'react-hot-toast';
import { useInputValidation, isValidEmail } from '6pp';
import { TextBox } from '../utils/TextBox';

export default function Footer() {
  const checkEmail = (email) => isValidEmail(email);

  const name = useInputValidation("");
  const email = useInputValidation("", checkEmail);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    const subscriptionData = {
      name: name.value,
      email: email.value,
    };

    toast.promise(
      fetch('https://pukaar-main-server.vercel.app/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscriptionData),
      }),
      {
        loading: 'Subscribing...',
        success: 'Subscribed successfully!',
        error: 'Subscription failed!',
      }
    ).then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <footer className='flex flex-col lg:px-20 py-10 bg-[#fff7ed] text-[#1a1a1a] px-4'>
  <div className='flex justify-between items-start flex-col lg:flex-row lg:gap-0 gap-6'>
    
    {/* LEFT SECTION — CAFE INFO */}
    <TextBox className='w-[90vw]'>
      <p className='text-start font-bold text-lg'>Late Night Café</p>
      <p className='text-start'>Open Till 3 AM – Your Midnight Comfort Spot</p>
      <br />
      <p className='text-start'>21, Riverside Lane, Rajpur Road</p>
      <p className='text-start'>Dehradun, Uttarakhand – 248001</p>
      <br />
      <div className='text-start'>
        Contact Us:  
        <span className="font-semibold"> +91 9876543210 </span> |  
        <span className="font-semibold"> latenightcafe@gmail.com </span>
      </div>
    </TextBox>

    {/* MIDDLE SECTION — ABOUT CAFE */}
    <TextBox className='w-[80vw] lg:mb-0 mb-6'>
      <p className='text-start font-bold text-lg'>About Us</p>
      <p className='text-start'>
        Late Night Café is where cozy vibes meet handcrafted coffee.  
        Whether you're working late, unwinding with friends, or craving  
        a midnight snack, we’re here to serve the perfect cup — anytime.
      </p>

      <p 
        className='text-start text-indigo-500 cursor-pointer flex items-center gap-1'
        onClick={() => { window.location.href = '/about'; }}
      >
        Read More <ArrowRight />
      </p>
    </TextBox>

    {/* RIGHT SECTION — SUBSCRIBE (OPTIONAL) */}
    {/* Uncomment if you want subscription */}
    {/* <form onSubmit={handleSubscribe} className='flex flex-col gap-5'>
      <TextField
        className='text-[#010101] w-full lg:w-[380px]'
        required
        label="Email"
        value={email.value}
        onChange={email.changeHandler}
        type="email"
        variant="standard"
      />
      <TextField
        className='text-[#010101] w-full lg:w-[380px]'
        required
        label="Name"
        value={name.value}
        onChange={name.changeHandler}
        variant='standard'
      />
      <button
        id='subscribe-btn'
        type='submit'
        className="bg-gradient-to-r from-orange-200 to-yellow-300 text-[#222] font-medium py-2 px-4 rounded"
      >
        Subscribe
      </button>
    </form> */}

  </div>

  <Divider className='my-7 bg-[#666]' />

  {/* BOTTOM SECTION */}
  <div className="flex justify-between items-center flex-col lg:flex-row">
    <p className='text-[#010101] mb-2 lg:mb-0'>
      © 2024 Late Night Café. All rights reserved. 
    </p>

    <div className='flex gap-3'>
      <IconButton aria-label="email" className="text-[#010101]">
        <MailOutline />
      </IconButton>
      <IconButton aria-label="call" className="text-[#010101]">
        <Call />
      </IconButton>
    </div>
  </div>
</footer>

  );
}