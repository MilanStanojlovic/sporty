import { Link, useSearchParams } from "react-router";
import { Container, DropdownMenu, Input } from "../../shared";
import { Search } from "lucide-react";
import { ROUTES } from "../../router";

export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const sportQuery = searchParams.get("sport");

  const handleSearchParams = (key: string, value: string) => {
    searchParams.set(key, value);

    setSearchParams(searchParams);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div>
            <Link to={ROUTES.HOME}>
              <span className="text-2xl font-bold text-gray-900">Sporty</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Input
              value={searchQuery || ""}
              startIcon={<Search />}
              onChange={(e) => handleSearchParams("search", e.target.value)}
              placeholder="Search for a league..."
            />
            <div className="ml-2">
              <DropdownMenu
                items={[
                  {
                    label: "Football",
                    onClick: () => {
                      handleSearchParams("sport", "football");
                    },
                    isSelected: sportQuery === "football",
                  },
                  {
                    label: "Basketball",
                    onClick: () => {
                      handleSearchParams("sport", "basketball");
                    },
                    isSelected: sportQuery === "basketball",
                  },
                  {
                    label: "Clear",
                    onClick: () => handleSearchParams("sport", ""),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
