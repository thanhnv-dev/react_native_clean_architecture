import {sendPost} from 'network/requests';
import {ILoginResponse, ILoginResponseResults} from '../types/ILoginResponse';
import IUser from 'features/auth/domain/entities/IUser';
import helper from 'utils/helper';
import IAuthRespositories from 'features/auth/domain/repositories/IAuthRepositories';

class AuthRespositoriesImpl implements IAuthRespositories {
    async login(email: string, password: string): Promise<IUser | null> {
        const loginRes = await sendPost<ILoginResponse>('/user/sign-in', {
            email,
            password,
        });

        const data: ILoginResponse | undefined = loginRes.data;

        if (loginRes.isSuccess && data !== undefined) {
            const results: ILoginResponseResults = data.results;

            helper.showToast({
                msg: data.msg,
                type: 'success',
            });

            const res: IUser = {
                _id: results._id,
                user_name: results.user_name,
                email: results.email,
                date_of_birth: results.date_of_birth,
                gender: results.gender,
                phone_number: results.phone_number,
                is_verified_email: results.is_verified_email,
                token: results.token,
                refresh_token: results.refresh_token,
            };
            return res;
        } else {
            return null;
        }
    }
}

export default AuthRespositoriesImpl;
