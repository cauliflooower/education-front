import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const deleteOneTypes = async (type) => {
    const {data} = await $host.delete('api/type/' + type.id, type)
    return data
}

export const deleteOneCategory = async (type) => {
    const {data} = await $host.delete('api/category/' + type.id)
    return data
}

export const updateOneTypes = async (type) => {
    const {data} = await $host.put('api/type/' + type.id, type)
    return data
}

export const updateOneCategory = async (type) => {
    const {data} = await $host.put('api/category/' + type.id, type)
    return data
}

export const createCategory = async (device) => {
    const {data} = await $authHost.post('api/category', device)
    return data
}

export const fetchCategory = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const fetchOneCategory = async (id) => {
    const {data} = await $host.get('api/category/' + id)
    return data
}