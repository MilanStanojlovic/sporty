import { Card, CardContent, CardImage, CardTitle } from "../../shared";
import DefaultPoster from "../../assets/default-poster.jpg";
import type { Season } from "../../services/http";

interface SeasonCardProps {
  season: Season;
}

export const SeasonCard = ({ season }: SeasonCardProps) => {
  const seasonImage = season?.strBadge ? season.strBadge : DefaultPoster;

  return (
    <Card>
      <CardImage src={seasonImage} alt="card-image" />
      <CardContent>
        <CardTitle>{season?.strSeason}</CardTitle>
      </CardContent>
    </Card>
  );
};
