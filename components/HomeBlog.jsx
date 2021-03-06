import React from 'react'
import Image from 'next/image';
import herbs from '../public/herbs.jpg'
import jess from '../public/jess.jpeg'
import { FeaturedPosts } from '../sections'
import solarterm from '../public/solarterms.jpeg'
import { motion } from 'framer-motion';

const HomeBlog = () => {
  return (





        <div className="bg-bamboo w-screen bg-cover bg-fixed">
        <div className="bg-bamboo">
    <div className="mx-auto flex flex-wrap items-center justify-center">
    <div className="md:mx-20 px-12 md:px-24 lg:w-2/5 lg:pr-0 pr-0">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1,
      transition: {
        duration: 2,
      } }}
      viewport={{ once: true }}
      >
      <p className="font-playfair font-bold text-4xl py-4 text-center" >Daily Health Blog</p>
      </motion.div>
            <p className="text-gray-600 font-bold text-xl md:text-xl pt-2 text-center">Based on the Seasonal 24 Solar Terms - Jing’Zhe（惊蛰）</p>
           
      <div className="mx-auto max-w-4xl">
            <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-gray-800 text-center ">
                Follow our Blog for Daily Health Advice that combines the wisdom of Traditional Chinese Medicine and the 24 Seasonal Chinese Calendar
                with Real Time Weather Updates.
                </p>
                
                </div>
                <p className="py-6 text-center">
                <a
                href="/blog"
                className=" hover:bg-lime-700 bg-lime-600 text-white px-4 py-3 text-lg font-medium"
                >
                Daily Health Advice
                </a>
            </p>
            
    </div>
    
    
    
    
    <div className="lg:w-2/6 xl:w-2/5 md:w-2/3 bg-bamboo md:mr-24 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0">
    <div className="mx-auto">
            <Image alt="solarterm" className=" rounded-lg shadow-lg" src={solarterm}/>
      </div>
      
    </div>
    </div>

    <div className="p-8 mx-auto">
            <FeaturedPosts/>
            </div>

    </div>
    </div>


  )
}

export default HomeBlog