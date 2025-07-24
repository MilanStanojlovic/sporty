import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardTitle,
} from "../../shared";
import DefaultPoster from "../../assets/default-poster.jpg";
import type { League } from "../../services/http";

interface LeagueCardProps {
  league: League;
}

export const LeagueCard = ({ league }: LeagueCardProps) => {
  return (
    <Card>
      <CardImage src={DefaultPoster} alt="card-image" />
      <CardContent>
        <CardTitle>{league.strLeague}</CardTitle>
        <CardDescription>{league.strLeagueAlternate}</CardDescription>
        <div className="mt-2">
          <Badge>{league.strSport}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};
