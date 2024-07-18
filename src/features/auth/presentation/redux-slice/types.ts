import IUser from 'features/auth/domain/entities/IUser';

export type AuthSliceState = {
    user: IUser | null;
    loading: boolean;
};
export type LoginActionProps = {
    email: string;
    password: string;
};
