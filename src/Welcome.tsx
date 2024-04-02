import profileImg from './img/profilePicture.png'

const Welcome = () => {
  return (
    <div className='text-black dark:text-white text-2xl flex justify-center'>
        <section className='bg-white dark:bg-black flex-1 max-w-4xl rounded-3xl p-4 flex flex-col sm:flex-row justify-center content-center justify-items-center items-center'>
        

                <figure className='animate-displacement3-anim insolate z-[1px]relative w-[300px] bg-blue-600 dark:bg-violet-500 rounded-[35%_65%_18%_82%_/_67%_85%_15%_33%]'>
                <img className="z-[1px] drop-shadow-[1px_1px_5px_white]" src={profileImg} alt="" />
             </figure>
             <div className='p-4'>
                <p className='animate-displacement2-anim'>FrontEnd/FullStack Web Devlopper</p>
                <hr className='mt-2 w-2/3 mx-[50%] -translate-x-1/2 
                border-t-blue-600
                dark:border-t-violet-500 z-[0px] animate-displacement-anim'/>
             </div>
        </section>
    </div>
  )
}

export default Welcome