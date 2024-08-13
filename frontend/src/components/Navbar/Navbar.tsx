'use client'
import Link from "next/link";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger
} from "../ui/menubar";
import { AtSign } from "lucide-react";

export default function Navbar() {
    return (
        <Menubar className="bg-slate-950 justify-between p-4">
            <Link href='/' className="flex text-white gap-2">
                <h1 className="font-bold cursor-pointer">
                    Envio Email
                </h1>
                <AtSign />
            </Link>
            <div />
            <MenubarMenu>
                <MenubarTrigger
                    className="text-white"
                >
                    Fazer login
                </MenubarTrigger>
                <MenubarContent>
                    <Link href='/auth/login'>
                        <MenubarItem>
                            Entra
                        </MenubarItem>
                    </Link>
                    <Link href='/auth/register'>
                        <MenubarItem>
                            Cadastra-se
                        </MenubarItem>
                    </Link>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
