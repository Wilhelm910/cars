import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    buttonStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit";
    btnColor?: string;
}