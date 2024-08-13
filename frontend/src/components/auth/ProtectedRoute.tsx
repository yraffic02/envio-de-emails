'use client'
import { getToken } from "@/utils/localStorage";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { toast } from "@/components/ui/use-toast"
import { publicRoutes } from "@/configs/constants";

export default function ProtectedRoute({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const token = getToken()
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const isPublicRouter = publicRoutes.includes(pathname);

        if (!token && !isPublicRouter) {
            router.push('/auth/login');
            toast({
                title: "Faça seu login",
            });
        } else if (token && isPublicRouter) {
            router.push('/home');
        }
    }, [token, pathname])

    return children
}