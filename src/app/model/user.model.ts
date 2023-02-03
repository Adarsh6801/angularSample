export interface User{
    firstName?:string;
    lastName?:string;
    email:String;
    password:string;
};
export interface UserLogin{
    value(value: any, arg1: string): unknown;
    email:String;
    password:string;
}

