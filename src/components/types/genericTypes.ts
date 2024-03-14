import { SvgIconComponent } from "@mui/icons-material";
import React,{ReactElement} from "react";

export interface FormFieldsType {
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


export interface DriverType {
    name: string;
    timeFromPoint: number;
    stars: number;
    price: number;
    formula: "VIP" | "Comfort" | "Van" | "Taxi";
    nbOfPassenger: 1|2|3|4;
    timeEstimated: number;
    scheduledDropOff: string;
    carImage?:string
  }

  export interface RideType {
    startingPoint:string,
    pointOfArrival:string,
    price:number,
    driverName:string,
    date:string,
    status:"Done" | "Pending" | "Cancelled",
  }