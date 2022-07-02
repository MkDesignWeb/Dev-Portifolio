import {IoIosArrowDown} from 'react-icons/io'

export function Button(props) {

    return (
        <div className={
            `group relative sm:w-44 sm:h-56 sm:hover:h-72 rounded-xl sm:hover:scale-110
            w-full max-w-[380px]
            ${props.fill == 'full' 
            ? 'bg-primary transition-all hover:bg-primaryOn'
            : 'border-2 border-primary transition-all bg-transparent  hover:bg-primary'
            }
            flex sm:flex-col flex-row items-center justify-between py-4`}>
            <img src={props.img} alt="Imagem botão" className="w-16" />
            <strong className=" sm:block hidden text-white font-bold text-center top-4 sm:group-hover:top-0 transition-all relative" >{props.title}</strong>
            <p className=" relative  sm:h-0 h-full mx-2 text-white font-light text-sm text-center sm:group-hover:h-20 overflow-hidden transition-all">{props.text}</p>
            <div className="text-white" ><IoIosArrowDown size={30}/></div>

        </div>
    )
}