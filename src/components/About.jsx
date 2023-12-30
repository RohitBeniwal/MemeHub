import React from 'react';
import "../style.css"
import Navbar from './Navbar';
import Footer from './Footer';
import "../index.css";

const About = () => {
  return (
    <div>
    <Navbar/>
    <h2 className='text-3xl text-white text-center my-4'>More Details</h2>
    <div className="about-us w-full my-16 flex justify-center items-center p-6 h-screen bg-black text-white gap-10">
    

    <div className='right w-1/2'>
      
      <p className='text-xl leading-1.5 mb-4'>
        
MemeHub is a dynamic and user-friendly meme generation website that offers a vast collection of the latest and most popular meme templates. With MemeHub, users can easily create personalized and hilarious memes in just a few simple steps.
      </p>
      <p className='text-xl leading-1.5 mb-4'>
      <span className='font-bold '>Create your own meme in a few simple steps:</span><br/>
      <span className='font-bold'>1) Select Template: </span>
Choose from trending meme templates.<br/>
<span className='font-bold '>2) Add Captions: </span>
 Customize with your own captions.<br/>
<span className='font-bold '>3) Generate Meme: </span>
 Click to instantly create your meme.<br/>
<span className='font-bold '>4) Save to Desktop: </span>
 Download in your preferred format.
      </p>
      <p className='text-xl leading-1.5 mb-4'>
      MemeHub provides a platform that caters to both meme enthusiasts and those looking to add a touch of humor to their content. With an ever-growing library of meme templates and an intuitive customization process, MemeHub makes meme creation a fun and accessible experience for users of all levels. Get ready to express your creativity and share laughter with MemeHub's easy-to-use meme generator.
      </p>
      </div>
      <div className='left w-1/2'><img className="w-80" src='/favicon/meme_sad_frog.png'/></div>
    </div>
    
    <Footer/>
    </div>
  );
};

export default About;
