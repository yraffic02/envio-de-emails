'use client'
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { removeToken } from "@/utils/localStorage";
import { useRouter } from "next/navigation";

export default function ButtonLogout() {
    const router = useRouter()

    function handleLogout() {
        removeToken()
        return router.push('/')
    }

    return (
        <Button variant='link' className="p-0" onClick={handleLogout}>
            Sair <LogOut color="white" />
        </Button>
    )
}