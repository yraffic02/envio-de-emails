'use client'
import Link from "next/link";
import { 
    MenubarContent, 
    MenubarItem, 
    MenubarMenu,
    MenubarTrigger 
} from "../ui/menubar";
import { usePathname } from "next/navigation";
import { AtSign } from "lucide-react";

export default function Navbar(){
    const pathname = usePathname()

    if(pathname === '/' || pathname.includes('auth')){
        return(
            <>
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
                        <Link  href='/auth/login'>
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
            </>
        )
    }
}