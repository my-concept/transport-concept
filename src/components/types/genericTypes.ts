import { SvgIconComponent } from "@mui/icons-material";

export interface LoginFieldsType {
    label:string
    placeholder?:string
    register:string
    icon?:React.ReactElement<SvgIconComponent> | React.ReactNode
    option?:string,
    required?:boolean
}

export interface ReservationFormValueType {
        username: string;
        organisation: string;
        password: string;
        nbOfPassenger: number; 
}
