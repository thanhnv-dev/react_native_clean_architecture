import axios from 'axios';
// import APIConstants from 'constants/APIConstants';
import AxiosInstance from 'network/config/AxiosInstance';
import transform from 'network/transform';

async function sendGet<T>(endPoint: string) {
    try {
        let axiosInstance = await AxiosInstance();
        var apiResponse = await axiosInstance.get(endPoint);
        // var apiResponse = await axiosInstance.get(
        //     APIConstants.BASE_URL + endPoint,
        // );
        return transform.Response<T>(apiResponse);
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return transform.Error<T>(err.response);
        } else {
            return transform.NetworkError<T>(err);
        }
    }
}
export default sendGet;
