import { Auth } from "aws-amplify";
import axios from "axios";
import { ApiResponse, Bet, User } from "./types";

export function getFormData(form: EventTarget | HTMLFormElement): {
  [key: string]: string;
} {
  return Object.fromEntries(new FormData(form as HTMLFormElement)) as {
    [key: string]: string;
  };
}

const customFetch =
  <T>(method: "GET" | "POST" | "PUT", slug: string) =>
  async (body: any = undefined): Promise<T> => {
    return axios
      .request({
        url: `http://localhost:4200${slug}`,
        method,
        data: body,
        headers: {
          Authorization: `Bearer ${(await Auth.currentSession())
            .getAccessToken()
            .getJwtToken()}`,
        },
      })
      .then((response) => response.data as Promise<ApiResponse<T>>)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        return null as T;
      });
  };

export const getUser = customFetch<User>("GET", "/user");
export const createUser = customFetch<User>("POST", "/user");
export const updateUser = customFetch<User>("PUT", "/user");
export const getBets = customFetch<Bet[]>("GET", "/bets");
export const createBet = customFetch<Bet>("POST", "/bets");
