import { type User } from "../types"
const BASE_URL = 'https://dummyjson.com';

export async function fetchUser(userId: number): Promise<User> {
    return fetch(`${BASE_URL}/user/${userId}`)
        .then((res) => res.json())
        .catch((err) => console.error("Error: ", err.toString()));
}