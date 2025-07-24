import { SeasonCard } from "../../components";
import { useLeagueDetails } from "../../hooks/useLeagueDetails";
import { Container, EmptyState } from "../../shared";

export const LeagueDetailsPage = () => {
  const { isLoading, error, seasons } = useLeagueDetails();

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

  if (seasons?.length === 0)
    return (
      <div className="flex justify-center mt-12">
        <EmptyState
          label="Season Not Found"
          description="This Season Was Not Found."
        />
      </div>
    );

  return (
    <Container className="py-5 flex justify-center">
      <SeasonCard season={seasons[seasons.length - 1]} />
    </Container>
  );
};
