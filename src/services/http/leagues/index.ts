import { LeaguesEndpoints } from "./endpoints";
import type { Leagues } from "./types";

const URL = import.meta.env.VITE_API_BASE_URL;

export const GetLeagues = (): Promise<Leagues> => {
  return fetch(`${URL}${LeaguesEndpoints.ALL_LEAGUES}`).then((res) => {
    if (!res.ok) throw new Error("Error occured while fetching Leagues.");

    return res.json();
  });
};

export const getBadge = (): Promise<any> => {
  return fetch(`${URL}${LeaguesEndpoints.BADGES}`).then((res) => {
    if (!res.ok) throw new Error("Error occured while fetching badges.");

    return res.json();
  });
};
