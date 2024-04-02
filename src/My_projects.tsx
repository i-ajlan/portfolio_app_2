import { useState } from 'react'
import {my_projects} from './data.ts'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type DataType = {
    title:string,
    link: string,
    frontend_link?:string,
    backend_link?:string,
    image1?:string,
    image2?:string,
    technologies:string[]
}

const My_projects = () => {
    const [data] = useState<DataType[]>(my_projects);
    const [indexImage, setIndexImage] = useState<number>(0);
    
    const nextImage = () => {
        if(indexImage < data.length - 1){
        setIndexImage(prev => prev + 1)
    }
    else{
        setIndexImage(0)
    }
}


    const prevImage = () => {
        if(indexImage > 0){
            setIndexImage(prev => prev - 1)
        }
        else {
            setIndexImage(data.length - 1);
        }
    }

  return (
    <section className='flex justify-center content-center'>
        <div className='text-black dark:text-white flex-1 bg-white dark:bg-black p-4 rounded-2xl max-w-4xl flex items-center justify-items-center justify-content-center'>
            <div onClick={prevImage} className='z-998'><ChevronLeft size={70}className='stroke-blue-600 dark:stroke-violet-600 animate-pulse'/></div>
            <div className='flex-1 flex overflow-hidden  relative'>
                <div className='absolute inset-0 blur bg-orange-500 rounded-[17%_83%_20%_80%_/_73%_30%_70%_27%]'></div>
            
            {
                data.map((item,i)=>{

                    const {image1, image2, title} = item;
                    return( 
                    <Link to={title} style={{translate:`-${indexImage * 100}%`, opacity:`${indexImage===i?'1':'0'}`}} className={`w-full relative transition-all duration-700 ease-in-out flex-shrink-0 flex-grow-0 flex items-center flex-col`} >
                            <p className='bg-slate-400 capitalize p-1 flex-shrink-0 flex-grow-0 text-black'>Click on the image to know more about this website</p>
                               <figure className='relative sm:w-3/4  w-full h-full '>
                                   <img className="w-full
                                rounded-xl object-cover" src={image2} alt="" />
                                   <img className="w-1/4 
                                rounded-xl object-cover absolute bottom-9 right-10" src={image1} alt="" />
                               </figure>
                           </Link>)
              
                })
            }
                            
            </div>
            <div onClick={nextImage} className=''><ChevronRight size={70} className='stroke-blue-600 dark:stroke-violet-600 animate-pulse'/></div>

        </div>
    </section>
  )
}

export default My_projects