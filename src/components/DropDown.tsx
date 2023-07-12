import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { AlignJustify } from 'lucide-react';
import { ModalRegister } from './register/Modal';
import { useMemo, useState } from 'react';
import { api } from '../utils/lib/axios';

interface DataProps {
    Name: string
    id: string
}

export function DropDown() {

    const [data, setData] = useState<DataProps[]>([])

    const memory = useMemo(() => {
        api.get('/users')
            .then(function (response) {
                setData(response.data.users)
            })
    }, [])

    console.log(data)

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
                    aria-label="Customise options"
                >
                    <AlignJustify />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                    sideOffset={5}
                >
                    <div className="w-full flex flex-col items-start justify-center gap-y-2 mt-2 overflow-auto">
                        {data.map(element => {
                            return (
                                <DropdownMenu.Item>
                                    <button onClick={() => localStorage.setItem('user', element.id)} className='text-black text-sm'>{element.Name}</button>
                                </DropdownMenu.Item>
                            )
                        })}
                    </div>

                    <DropdownMenu.Separator className="h-[1px] bg-black m-[5px]" />

                    <DropdownMenu.Label className="pl-[25px] text-xs leading-[25px] text-mauve11">
                        <ModalRegister />
                    </DropdownMenu.Label>
                    <DropdownMenu.Label className="pl-[25px] text-xs leading-[25px] text-mauve11">
                        <button>Alterar</button>
                    </DropdownMenu.Label>
                    <DropdownMenu.Label className="pl-[25px] text-xs leading-[25px] text-mauve11">
                        <button>Excluir</button>
                    </DropdownMenu.Label>
                    <DropdownMenu.Label className="pl-[25px] text-xs leading-[25px] text-mauve11">
                        <button>Sair</button>
                    </DropdownMenu.Label>

                    <DropdownMenu.Arrow className="fill-white" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};