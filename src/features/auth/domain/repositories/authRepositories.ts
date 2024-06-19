import IUser from '../types/IUser';

interface AuthRespositories {
    login(email: string, password: string): Promise<IUser | null>;
}

export default AuthRespositories;
