import { BadgePropsVariantOverrides, ButtonPropsColorOverrides, ButtonPropsVariantOverrides } from "@mui/material";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    // buttonStyles?: "contained" | "outliend" | "text";
    buttonStyles?: OverridableStringUnion<
        'text' | 'outlined' | 'contained',
        ButtonPropsVariantOverrides
    >
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit";
    btnColor?: OverridableStringUnion<"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning", ButtonPropsColorOverrides> | undefined
}


export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string | React.SyntheticEvent<Element, Event>) => void;
}