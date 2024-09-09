import axios from 'axios';
import { store } from '../store/store';
import { EventRegister } from 'react-native-event-listeners';

export async function getHeaders() {

	if (store?.getState()?.userReducer?.userDetails?.token) {
		console.log("store?.getState()?.userReducer?.userDetails?.token", store?.getState()?.userReducer?.userDetails?.token)
		return {
			authorization: `Bearer ${store?.getState()?.userReducer?.userDetails?.token}`,

		};
	}
	return {};
}


export async function apiReq(
	endPoint,
	data,
	method,
	headers,
	requestOptions = {}
) {

	return new Promise(async (res, rej) => {
		const getTokenHeader = await getHeaders();

		headers = {
			...getTokenHeader,
			...headers
		};


		if (method === 'get' || method === 'delete') {
			data = {
				...requestOptions,
				...data,
				headers
			};
		}

		axios[method](endPoint, data, { headers })
			.then(result => {
				const { data } = result;

				if (data?.message == "Token is not Valid!") {
					EventRegister.emit('showTokenExpiredModal');

				}

				if (data.status === false) {
					return rej(data);
				}

				return res(data);
			})
			.catch(error => {
				console.log(error)
				console.log(error && error.response, 'the error respne')
				if (error && error.response && error.response.status === 401) {
					//logout user
					alert("user not valid")
				}
				if (error && error.response && error.response.data) {
					if (!error.response.data.message) {
						return rej({ ...error.response.data, message: error.response.data.message || "Network Error" })
					}
					return rej(error.response.data)
				} else {
					return rej({ message: "Network Error", message: "Network Error" });
				}
			});
	});
}

export function apiPost(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
	return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'put', headers);
}

