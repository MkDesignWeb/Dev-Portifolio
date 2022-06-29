import React from 'react';
import { Button } from '../Components/Buttom/Buttom';
import logoW from '../Assets/Logo/LogoMKW.svg'
import logoG from '../Assets/Logo/LogoMKG.svg'


function Home(){
    return(
    <section>
        <div className=' h-[427px] w-screen bg-DegTopMB sm:bg-DegTopPC bg-no-repeat bg-cover bg-center absolute top-0 left-0 right-0 z-10'/>
        
        <div className='flex flex-col items-center justify-center mt-10'>
        
        <img src="/src/Assets/Logo/LogoMK.svg" className='w-28' data-aos="fade-up" data-aos-duration="900" />
        
        <h1 className='text-white mt-7 font-normal text-base leading-relaxed'>Olá, me chamo</h1>
        <h2 className='font-bold text-white text-3xl leading-tight font-UniSansBold'>Matheus Kauan</h2>
        
        </div>
        <div className='flex justify-center items-start mt-10 gap-5'>
            <Button
            img={logoW}
            title='Web Designer'
            text="Web designer asdad sdsd dfsdfasd asdasdsa "
            size={2}
            fill="full"
            />
            <Button
            img={logoG}
            title='Web Designer'
            text="designer grafico asdad sdsd dfsdfasd asdasdsa "
            size={2}
            fill="border"
            />
        </div>
    </section>
)}
export default Home;