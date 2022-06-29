export function Button(props) {

    return (
        <div className={
            `group relative w-44 h-56 hover:h-80 rounded-xl hover:scale-110
            ${props.fill == 'full' 
            ? 'bg-primary transition-all hover:bg-primaryOn'
            : 'border-2 border-primary transition-all bg-transparent  hover:bg-primary'
            }
            flex flex-col items-center justify-between py-4`}>
            <img src={props.img} alt="Imagem botão" className="w-16" />
            <strong className="text-white font-bold text-center top-4 group-hover:top-0 transition-all relative" >{props.title}</strong>
            <p className=" h-0 mx-2 text-white text-center group-hover:h-20 overflow-hidden transition-all">{props.text}</p>
            <div className="text-white" >V</div>

        </div>
    )
}