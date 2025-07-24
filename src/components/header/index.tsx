import { Link, useLocation, useSearchParams } from "react-router";
import { Container, DropdownMenu, Input } from "../../shared";
import { Search } from "lucide-react";
import { ROUTES } from "../../router";
import type { DropdownMenuListItemProps } from "../../shared/ui/components/dropdown/list-item";
import { StrSport } from "../../services/http";

export const Header = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const sportQuery = searchParams.get("sport");
  const { pathname } = location;
  const isHome = pathname === ROUTES.HOME;
  const handleSearchParams = (key: string, value: string) => {
    searchParams.set(key, value);

    setSearchParams(searchParams);
  };

  const isSportSelected = (sport: StrSport): boolean => sportQuery === sport;

  const dropdownMenuItems = (): DropdownMenuListItemProps[] => [
    {
      label: StrSport.Soccer,
      onClick: () => handleSearchParams("sport", StrSport.Soccer),
      isSelected: isSportSelected(StrSport.Soccer),
    },
    {
      label: StrSport.Basketball,
      onClick: () => handleSearchParams("sport", StrSport.Basketball),
      isSelected: isSportSelected(StrSport.Basketball),
    },
    {
      label: StrSport.AmericanFootball,
      onClick: () => handleSearchParams("sport", StrSport.AmericanFootball),
      isSelected: isSportSelected(StrSport.AmericanFootball),
    },
    {
      label: StrSport.IceHockey,
      onClick: () => handleSearchParams("sport", StrSport.IceHockey),
      isSelected: isSportSelected(StrSport.IceHockey),
    },
    {
      label: StrSport.Motorsport,
      onClick: () => handleSearchParams("sport", StrSport.Motorsport),
      isSelected: isSportSelected(StrSport.Motorsport),
    },
    {
      label: "Clear",
      onClick: () => handleSearchParams("sport", ""),
    },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div>
            <Link to={ROUTES.HOME}>
              <span className="text-2xl font-bold text-gray-900">Sporty</span>
            </Link>
          </div>
          {isHome && (
            <div className="flex items-center">
              <Input
                value={searchQuery || ""}
                startIcon={<Search />}
                onChange={(e) => handleSearchParams("search", e.target.value)}
                placeholder="Search for a league..."
              />
              <div className="ml-2">
                <DropdownMenu items={dropdownMenuItems()} />
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};
