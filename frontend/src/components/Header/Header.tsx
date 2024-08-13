'use client'
import Link from "next/link";
import { AtSign } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    if (pathname === '/' || pathname.includes('auth')) {
        return (
            <div className="w-full flex items-center justify-between p-2">
                <Link href='/'>
                    <AtSign />
                </Link>
                <div className="space-x-2">
                    <Link href='/auth/login'>
                        <strong>Login</strong>
                    </Link>

                    <Link href='/auth/register'>
                        <strong> Registre-se</strong>
                    </Link>
                </div>
            </div>
        )
    }
}