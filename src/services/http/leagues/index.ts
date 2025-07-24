import { LeaguesEndpoints } from "./endpoints";
import type { Leagues, League, Badge } from "./types";

const URL = import.meta.env.VITE_API_BASE_URL;

export const GetLeagues = (): Promise<Leagues> => {
  return fetch(`${URL}${LeaguesEndpoints.ALL_LEAGUES}`).then((res) => {
    if (!res.ok) throw new Error("Error occured while fetching Leagues.");

    return res.json();
  });
};

export const GetBadge = (id: League["idLeague"]): Promise<Badge> => {
  return fetch(`${URL}${LeaguesEndpoints.BADGES.replace(":id", id)}`).then(
    (res) => {
      if (!res.ok) throw new Error("Error occured while fetching badges.");

      return res.json();
    }
  );
};
