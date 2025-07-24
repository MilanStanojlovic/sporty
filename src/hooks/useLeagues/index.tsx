import { useSearchParams } from "react-router";
import { GetLeagues, type League } from "../../services/http";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useLeagues = () => {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const sportQuery = searchParams.get("sport");

  const fetchLeagues = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await GetLeagues();
      setLeagues(response.leagues);
      /* eslint-disable  @typescript-eslint/no-explicit-any */
    } catch (error: any) {
      setError(error?.message as string);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const filteredLeagues = useMemo(
    () =>
      leagues.filter(
        (league) =>
          league.strLeague
            .toLowerCase()
            .includes(searchQuery?.toLowerCase() || "") &&
          league.strSport
            .toLowerCase()
            .includes(sportQuery?.toLowerCase() || "")
      ),
    [leagues, sportQuery, searchQuery]
  );

  useEffect(() => {
    fetchLeagues();
  }, []);

  return {
    leagues: filteredLeagues,
    isLoading,
    error,
  };
};
