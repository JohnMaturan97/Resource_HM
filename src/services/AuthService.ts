import { User } from '../model/model';

export class AuthService {
    public async login(userName: string, password: string) : Promise<User | undefined> {
        if (userName === 'user' && password === '1234') {
            return {
                userName: userName,
                email: 'user@example.com'
            }
        } else {
            return undefined
        }
    }
}