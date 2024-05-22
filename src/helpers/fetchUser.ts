import { type Result } from "../types"
const BASE_URL = 'https://randomuser.me/api/';

export async function fetchUser(): Promise<Result> {
    return fetch(BASE_URL)
        .then((res) => res.json())
        .catch((err) => console.error("Error: ", err.toString()));
}