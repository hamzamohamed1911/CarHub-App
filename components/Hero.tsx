"use client"
import Image from 'next/image';
import React from 'react'
import CustomButton from './CustomButton';
import{motion,useTransform,useScroll} from 'framer-motion';


const Hero = () => {
  const{scrollY}=useScroll();
  const yCar = useTransform(scrollY, [0,200],[0,-150]);
  const opacityCar = useTransform(scrollY,[0,200,500],[1,1.5,0]);
  const handleScroll = ()=>{
  }
  return (
    <div className='hero'>
        <div className="flex-1 pt-36 padding-x">
            <h1 className='hero__title'>
                find, book, or rent a car -quickly and easily !

            </h1>
            <p className="hero__subtitle">
            streamline your car rental experience with your offortless booking process .
            </p>
            <CustomButton 
            title ="Explore Cars" 
            containerStyles = "bg-primary-blue text-white rounded-full mt-10 "
            handleClick= {handleScroll}
            />
        </div>
        <div className='hero__image-container'>
          <motion.div style={{y:yCar ,opacity:opacityCar}} className='hero__image'>
            <Image src="/hero.png" alt='hero' fill className='object-contain'/>
            </motion.div>
            <div className="hero__image-overlay"/>
            

          </div>

    </div>
  )
}

export default Hero;