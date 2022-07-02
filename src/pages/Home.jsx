import React from 'react';
import { Button } from '../Components/Buttom/Buttom';
import logoW from '../Assets/Logo/LogoMKW.svg'
import logoG from '../Assets/Logo/LogoMKG.svg'
import seta from '../Assets/Img/Seta.svg'
import { SobreMim } from '../Components/SobreMim';


function Home(){
    return(
        <>
    <section className='flex flex-col justify-center'>
        <div className=' h-[427px] bg-DegTopMB sm:bg-DegTopPC bg-no-repeat bg-cover bg-center absolute top-0 left-0 right-0 z-10'/>
        
        <div className='flex flex-col items-center justify-center mt-8'>
        
        <img src="/src/Assets/Logo/LogoMK.svg" className='w-28' data-aos="fade-up" data-aos-duration="900" />
        
        <h1 className='text-white mt-7 font-normal text-base leading-relaxed'>Olá, me chamo</h1>
        <h2 className='font-bold text-white text-3xl leading-tight font-UniSansBold'>Matheus Kauan</h2>
        
        </div>
        <div className='flex sm:flex-row flex-col justify-center sm:items-start items-center mt-7 gap-5 h-64'>
            <a href="">
            <Button
            img={logoW}
            title='Web Designer'
            text="De uma olhada nas minhas especificações em desenvolvimento de sites (Front-end)"
            size={2}
            fill="full"
            />
            </a>
            <a href="">
            <Button
            img={logoG}
            title='Designer gráfico'
            text="Veja aqui meus trabalhos de edição e criação de imagens para web"
            size={2}
            fill="border"
            />
            </a>
        </div>
        <div className=' text-white flex  justify-center items-center mt-12 '>
            <div className='relative'>
            <div className='flex flex-col items-center'>
            <span className='font-extralight leading-relaxed'>Veja mais</span>
            <strong className='text-2xl leading-tight'>Sobre <span className='text-primary'>mim</span></strong>
            </div>
            <img src={seta} alt="" className='absolute w-7 top-9 right-[-30px]' />
            </div>
        </div>
    </section>
    <SobreMim />
    </>
)}
export default Home;