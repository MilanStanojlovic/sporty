import { useParams } from "react-router";
import { GetBadge, type Season } from "../../services/http";
import { useCallback, useEffect, useState } from "react";

export const useLeagueDetails = () => {
  const { id } = useParams();
  const [seasons, setSearsons] = useState<Season[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchBadges = useCallback(async () => {
    if (!id) return setError("No League ID");
    setIsLoading(true);
    try {
      const response = await GetBadge(id);
      if (typeof response.seasons === "string")
        return setError("Error Occured.");
      setSearsons(response.seasons || []);
      /* eslint-disable  @typescript-eslint/no-explicit-any */
    } catch (error: any) {
      setError(error?.message as string);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchBadges();
  }, [fetchBadges]);

  return {
    seasons,
    isLoading,
    error,
  };
};
