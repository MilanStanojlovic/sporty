import { Leagues } from "../../components";
import { useLeagues } from "../../hooks";
import { Container } from "../../shared";

export const HomePage = () => {
  const { leagues, isLoading, error } = useLeagues();

  return (
    <Container className="py-5">
      <Leagues isLoading={isLoading} leagues={leagues} error={error} />
    </Container>
  );
};
