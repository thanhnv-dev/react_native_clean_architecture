import IUser from '../entities/IUser';

interface IAuthRespositories {
    login(email: string, password: string): Promise<IUser | null>;
}

export default IAuthRespositories;
