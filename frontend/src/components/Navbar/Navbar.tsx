'use client'
import Link from "next/link";
import {
    Menubar,
} from "../ui/menubar";
import { AtSign } from "lucide-react";
import { Dropdown } from "../DropdownMenu/Dropdown";

export default function Navbar() {
    return (
        <Menubar className="bg-slate-950 justify-between p-6 text-white">
            <Link href='/' className="flex gap-2">
                <h1 className="font-bold cursor-pointer">
                    Envio Email
                </h1>
                <AtSign />
            </Link>
            <div />
            <Dropdown />
        </Menubar>
    )
}
