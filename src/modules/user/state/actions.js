import { GET_USERS_REQUEST } from "./constants";

export function getUsers({ filter }) {
  return { type: GET_USERS_REQUEST, filter };
}
