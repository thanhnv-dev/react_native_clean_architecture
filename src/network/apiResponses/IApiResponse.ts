export interface IApiResponse<T> extends ApiResponse {
    data?: T;
}

interface ApiResponse {
    isSuccess: boolean;
    status?: number;
}
