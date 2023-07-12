import * as Dialog from '@radix-ui/react-dialog';
import { ChangeEvent, FormEvent, useState } from 'react';
import { api } from '../../utils/lib/axios';

export function ModalRegister() {

    const [name, setName] = useState('')
    const [branch, setBranch] = useState(Number)
    const [password, setPassword] = useState('')
    const [host, setHost] = useState('')
    const [status, setStatus] = useState('')

    const adm = false



    const inputs = [
        {
            Label: 'Nome',
            InputFunction: (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)
        },
        {
            Label: 'Ramal',
            InputFunction: (event: ChangeEvent<HTMLInputElement>) => setBranch(event.target.valueAsNumber)
        },
        {
            Label: 'Senha',
            InputFunction: (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)
        },
        {
            Label: 'Host(IP)',
            InputFunction: (event: ChangeEvent<HTMLInputElement>) => setHost(event.target.value)
        },
    ]

    async function handleCreateUser(event: FormEvent) {
        event.preventDefault()

        try {
            await api.post('/user', {
                Name: name,
                Branch: branch,
                Adm: adm,
                Password: password,
                Host: host
            })
        } catch (err) {
            throw err
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <button>
                    Registrar
                </button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-zinc-700 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                    <Dialog.Title className="text-white text-2xl m-0 text-[17px] font-medium flex items-center justify-center">
                        Novo Perfil
                    </Dialog.Title>
                    <form onSubmit={handleCreateUser}>
                        <fieldset className="mb-[15px] flex flex-col items-center gap-5 pt-8">
                            {inputs.map(input => {
                                return (
                                    <div className='w-full h-full flex flex-row items-center justify-center'>
                                        <div className='w-full flex items-start justify-start'>
                                            <label className='text-white'>{input.Label}</label>
                                        </div>
                                        <div className='w-full flex items-end justify-center'>
                                            {input.Label == 'Ramal' ?
                                                <input className='p-1 rounded-lg appearance-none' type="number" onChange={input.InputFunction} />
                                                :
                                                <input className='p-1 rounded-lg' type="text" onChange={input.InputFunction} />
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </fieldset>
                        <div className="mt-[25px] flex justify-center">
                            <section className='w-full flex items-center justify-center'>
                                <button type='submit' className="bg-green-500 w-32 rounded-lg text-white hover:bg-green-800 focus:shadow-green7 inline-flex h-[35px] items-center justify-center px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                                    Salvar
                                </button>
                            </section>
                        </div>
                    </form>
                    <Dialog.Close asChild>
                        <button
                            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                            aria-label="Close"
                        >
                        </button>
                    </Dialog.Close>
                    <div className='w-full flex items-center justify-center'>
                        <span className='pt-1 text-green-400'>{status}</span>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}