import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    Number: string
}

export function PhoneButton({ Number, ...rest }: ButtonProps) {
    return (
        <button {...rest}
            className="bg-zinc-400 w-6 px-16 py-2 font-semibold text-xl hover:bg-zinc-600 flex items-center justify-center hover:text-white rounded-lg">
            {Number}
        </button>
    )
}