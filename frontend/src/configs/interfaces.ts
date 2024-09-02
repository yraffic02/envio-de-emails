import {ComponentType, ReactNode} from "react";
import { Action } from "./constants";

export interface AccordionProps{
    accordionObject: {
        title: string,
        description: string,
    }[];
}

export interface LinkDropdown{
    link: string,
    name: string
}

export interface IModal {
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode
}

export interface IFormComponentProps {
    children: ReactNode;
    onSubmit: () => void;
    buttonName: string;
}

export interface IAuthParams {
    action: Action;
}

export interface IActionObj {
    component: ComponentType;
    text: string | null;
    linkText: string | null;
    linkHref: string | null;
}