import {about_me} from './data.ts'
import {useState} from 'react' 

type DataType = {
  title: string, 
  info: string
}

const title_style:string = '';
const About_me = () => {
  const [data, setData] = useState<[DataType]>(about_me);
  const [value, setValue] = useState<number>(0)
  
  return (
    <section className="flex justify-center content-center">
      <div className="flex-1 bg-white dark:bg-black max-w-4xl rounded-xl text-2xl p-4 text-black dark:text-white grid grid-cols-[auto_1fr]">
         <div className="border-r-[1px] border-gray-500 -translate-x-4">
      {
        data.map((item,index)=>{
          const {title} = item;

          return <div key={index} onClick={()=>setValue(index)} className={index == value?'bg-gray-600 text-center':'text-center'}>{title}</div>
        })
      }
          
          </div> 
         <div>
           {
        data.map((item, index)=>{
          const {info} = item;

          return <div key={index} className={index != value? 'hidden':''}>{info}</div>
        })
      }
         </div>
      </div>
    </section>
  )
}

export default About_me