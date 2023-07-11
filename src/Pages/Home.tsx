import { ChangeEvent, ReactNode, useState } from "react";
import { Header } from "../components/Header";
import { PhoneButton } from "../components/PhoneButton";
import { DropDown } from "../components/DropDown";
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react";

export function Home() {
    const [numbers, setNumbers] = useState('')

    const [mic, setMic] = useState<ReactNode>(<Mic />)
    const [sound, setSound] = useState<ReactNode>(<Volume2 />)


    function muteMic() {
        setMic(<MicOff />)
    }

    function micOn() {
        setMic(<Mic />)
    }

    function muteSound() {
        setSound(<VolumeX />)
    }

    function soundOn() {
        setSound(<Volume2 />)
    }

    // if (numbers.length >= 9) {
    //     const audio = new Audio('../../mixkit-arcade-retro-game-over-213.wav')
    //     audio.play()
    // }

    const number = [
        { Number: '1' },
        { Number: '2' },
        { Number: '3' },
        { Number: '4' },
        { Number: '5' },
        { Number: '6' },
        { Number: '7' },
        { Number: '8' },
        { Number: '9' },
        { Number: 'Retornar' },
        { Number: '0' },
        { Number: 'Limpar' },
    ]

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-zinc-800 gap-y-4">
            <section className="w-full flex flex-row items-center justify-center gap-x-4">
                <h1 className="text-white font-bold text-4xl">Erick - Sinapse</h1>
                <DropDown />
            </section>
            <section className="w-full">
                <Header />
            </section>
            <section className="w-full flex flex-col items-center justify-center gap-y-4">
                <div className="w-full flex flex-row items-center justify-center">
                    <input type="text" className="p-4 rounded-xl text-xl font-semibold focus:border-[0px]" onChange={event => setNumbers(event.target.value)} value={numbers} />
                    {/* <button id="button" className="bg-white p-[18px] rounded-r-xl hover:bg-zinc-500"><Delete /></button> */}
                </div>
                <div className=" gap-4 items-center justify-center grid grid-cols-3 grid-flow-row">
                    {number.map(number => {
                        return (
                            number.Number == 'Limpar'
                                ?
                                <PhoneButton Number={number.Number} onClick={() => setNumbers('')} />
                                :
                                <PhoneButton Number={number.Number} onClick={() => setNumbers(numbers + number.Number)} />
                        )
                    })}
                </div>
                <div className="w-full flex flex-row items-center justify-center space-x-4">
                    <button
                        className="bg-slate-600 p-4 rounded-lg text-white font-semibold hover:bg-slate-500"
                        onClick={() => muteSound()}
                        onMouseDown={() => soundOn()}
                    >
                        {sound}
                    </button>

                    <button
                        className="bg-green-600 p-4 rounded-lg text-white font-semibold hover:bg-green-400 hover:text-black"
                    >
                        Chamar
                    </button>

                    <button
                        className="bg-slate-600 p-4 rounded-lg text-white font-semibold hover:bg-slate-500"
                        onClick={() => muteMic()}
                        onMouseDown={() => micOn()}
                    >
                        {mic}
                    </button>
                </div>
            </section>
        </main>
    )
}