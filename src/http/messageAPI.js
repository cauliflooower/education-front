import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createMessage = async (message) => {
    const {data} = await $authHost.post('api/message', message)
    return data
}

export const fetchMessage = async () => {
    const {data} = await $host.get('api/message')
    return data
}

export const deleteOneMessage = async (type) => {
    const {data} = await $host.delete('api/message/' + type.id)
    return data
}