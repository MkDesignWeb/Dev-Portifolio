import Janela from "../Assets/Img/Janela.svg";


export function SobreMim() {
    return(
        <section className=" h-auto sm:p-10 p-0 mt-20">
            <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between">
            <img src={Janela} alt="" className=" flex-1 sm:w-4/5 w-11/12 max-h-80 "/>
            <div className="flex-1"></div>
            </div>
        </section>
    )
}