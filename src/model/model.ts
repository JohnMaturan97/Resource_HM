import { CognitoUser } from '@aws-amplify/auth';

export interface User {
    userName : String,
    cognitoUser: CognitoUser
}
export interface UserAttribute {
    Name: string,
    Value: string
}

export interface Hotel {
    hotelId: string,
    name: string,
    location: string,
    photoURL?: string,
}