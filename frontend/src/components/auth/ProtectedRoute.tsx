'use client'
import { getToken } from "@/utils/localStorage";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { toast } from "@/components/ui/use-toast"

export default function ProtectedRoute({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const token = getToken()
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!token) {
            router.push('/auth/login');
            toast({
                title: "Login efetuado!",
            });
        } else if (token && (pathname === '/' || pathname.startsWith('/auth'))) {
            router.push('/home');
        }
    }, [token, pathname])

    return children
}