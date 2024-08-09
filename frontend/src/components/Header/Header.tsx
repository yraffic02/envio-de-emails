import { Menubar } from "../ui/menubar";
import { ReactNode  } from "react";

interface HeadarProps {
    children: ReactNode;
}

export default function Header({ children }: HeadarProps){
    return(
    <Menubar className="bg-slate-950 justify-between p-4">
        { children }
    </Menubar>
    )
}