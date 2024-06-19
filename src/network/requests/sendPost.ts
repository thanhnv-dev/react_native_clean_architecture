import axios from 'axios';
import APIConstants from 'constants/APIConstants';
import AxiosInstance from 'network/config/AxiosInstance';
import transform from 'network/transform';

async function sendPost<T>(endPoint: string, body: any) {
    try {
        let axiosInstance = await AxiosInstance();
        var apiResponse = await axiosInstance.post(
            APIConstants.BASE_URL + endPoint,
            JSON.stringify(body),
        );
        return transform.Response<T>(apiResponse);
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return transform.Error<T>(err.response);
        } else {
            return transform.NetworkError<T>(err);
        }
    }
}

export default sendPost;
