"use client"

import * as React from "react"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import ButtonLogout from "../utils/ButtonLogout"
import { linkDropdown } from "@/configs/constants"
import { MenuIcon } from "lucide-react"

export function Dropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <MenuIcon className="text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Meu Perfil</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    linkDropdown.map((link) => {
                        return (
                            <DropdownMenuItem key={link.name}>
                                <Link href={link.link}>
                                    {link.name}
                                </Link>
                            </DropdownMenuItem>
                        )
                    })
                }
                <DropdownMenuItem>
                    <ButtonLogout />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
