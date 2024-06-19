import IUser from 'features/auth/domain/types/IUser';
import AuthRespositories from 'features/auth/domain/repositories/authRepositories';

export class LoginUseCase {
    private authRespositories: AuthRespositories;

    constructor(authRespositories: AuthRespositories) {
        this.authRespositories = authRespositories;
    }

    async execute(email: string, password: string): Promise<IUser | null> {
        return this.authRespositories.login(email, password);
    }
}
