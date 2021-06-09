export interface User{
    email: string;
    password: string;
    type: string;
    birthDate: Date;
}

export interface UserLogin{
    email: string;
    password: string;
}
