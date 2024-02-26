import { SvgIconComponent } from "@mui/icons-material";

export interface LoginFieldstType {
    label:string
    placeholder:string
    register:string
    icon:React.ReactElement<SvgIconComponent> | React.ReactNode
}
