import { AxiosResponse } from "axios"
import { initialStateType } from "../redux/reducer/reducer"
import { actionTypes } from "./actionsTypes"

export type actionType = {
    type:actionTypes
    payload:any
}


export type Redux = {
    Reducer:initialStateType
}

export type input =  React.ChangeEvent<HTMLInputElement>

export type button = React.MouseEvent<HTMLButtonElement>

export type jsx = JSX.Element

export type stateType = {
    id:number
    name:string
    surname:string
    email:string
    password:string
    confirmPassword:string
    loginEmail:string
    loginPassword:string
    verificationCode:string
}

export type userDataType = {
    id:number
    name:string
    surname:string
    email:string
    password:string
}

export type axiosType = AxiosResponse<any>