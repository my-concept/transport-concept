import { SvgIconComponent } from "@mui/icons-material";
import React,{ReactElement} from "react";

export interface LoginFieldsType {
    label: string | ReactElement;
    placeholder?:string
    register:string
    icon?:React.ReactElement<SvgIconComponent> | React.ReactNode
    option?:string,
    required?:boolean
}

export interface ReservationFormValueType {
        departure: string;
        destination: string;
        dateHours: string;
        nbOfPassenger: number; 
}

export interface LoginFormValueType {
    username: string;
    organisation: string;
    password: string;
    nbOfPassenger: number; 
}
