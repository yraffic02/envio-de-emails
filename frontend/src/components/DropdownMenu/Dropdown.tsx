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
import { AvatarComponent } from "../Avatar/Avatar"
import Link from "next/link"
import ButtonLogout from "../utils/ButtonLogout"

export function Dropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <AvatarComponent />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Meu Perfil</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href='/profile'>
                        Perfil
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <ButtonLogout />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
