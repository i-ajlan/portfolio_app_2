import {about_me} from './data.ts'
import {useEffect, useRef, useState} from 'react' 

type DataType = {
  title: string, 
  info: string
}


const About_me = () => {
  const [data] = useState<DataType[]>(about_me);
  const observer = useRef<IntersectionObserver>(new IntersectionObserver(()=>{}));

  useEffect(()=>{

    observer.current  = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
      

          ['opacity-100', 'tracking-normal'].forEach((item)=>{entry.target.classList.toggle(item,entry.isIntersecting)});
          console.log(entry)
          // entry.target.classList.add(lists[])
        
      })
    }, {
      root:document.querySelector('[data-root]'),
      rootMargin:'-10px',
      threshold:0,
    });
  
    const elems = document.querySelectorAll('[data-observed]');
    elems.forEach((elem)=>{
      observer.current.observe(elem)
    })

    return ()=>observer.current.disconnect()
  },[])
  
  return (
    <section className="flex justify-center content-center">
      <div className="flex-1 bg-white dark:bg-black max-w-4xl rounded-xl text-2xl p-4 text-black dark:text-white grid grid-cols-[auto_1fr] ">
             <div className='h-[400px] overflow-y-auto' data-root>
           {
        data.map((item, index)=>{
          const {info, title} = item;

          return <div key={index} className='space-y-1 mb-2'>
            <h1 className='text-center uppercase text-blue-700 dark:text-purple-700 font-bold tracking-widest duration-1000' data-observed>{title}</h1>

            <div className='indent-10 text-justify'>{<p className='whitespace-break-spaces	'>
              {info.split(' ').map((elem,i)=>{return(<span key={i} data-observed className='opacity-0 duration-[1.5s]'>{elem+' '}</span>)})}
            </p>
              }</div>
            </div>
        })
      }
         </div>
      </div>
    </section>
  )
}

export default About_me