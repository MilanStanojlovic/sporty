import { Link } from "react-router";
import { LeagueCard } from "..";
import type { League } from "../../services/http";
import { EmptyState, Grid } from "../../shared";
import { ROUTES } from "../../router";

interface LeaguesProps {
  leagues: League[];
  error: string;
  isLoading: boolean;
}

export const Leagues = ({ isLoading, error, leagues }: LeaguesProps) => {
  if (isLoading)
    return (
      <div className="flex justify-center mt-12">
        <EmptyState label="Loading Data..." />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center mt-12">
        <EmptyState label="Error" description={error} />
      </div>
    );

  if (leagues?.length === 0)
    return (
      <div className="flex justify-center mt-12">
        <EmptyState
          label="No Leagues Found"
          description="No Leagues Fond at the moment"
        />
      </div>
    );

  return (
    <Grid>
      {leagues.map((league) => (
        <Link
          key={league.idLeague}
          to={ROUTES.LEAGUE_INFO.replace(":id", league.idLeague)}
        >
          <LeagueCard league={league} />
        </Link>
      ))}
    </Grid>
  );
};
