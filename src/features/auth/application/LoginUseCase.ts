import IUser from 'features/auth/domain/entities/IUser';
import IAuthRespositories from 'features/auth/domain/repositories/IAuthRepositories';

export class LoginUseCase {
    private authRespositories: IAuthRespositories;

    constructor(authRespositories: IAuthRespositories) {
        this.authRespositories = authRespositories;
    }

    async execute(email: string, password: string): Promise<IUser | null> {
        return this.authRespositories.login(email, password);
    }
}
