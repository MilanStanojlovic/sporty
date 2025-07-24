import { useNavigate } from "react-router";
import { EmptyState } from "../../shared";
import { ROUTES } from "../../router";

interface NotFoundPageProps {
  label?: string;
  description?: string;
}

export const NotFoundPage = ({
  label = "Page not found",
  description = "Looks like you ended up in the wrong part of the field.",
}: NotFoundPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md m-auto">
      <EmptyState label={label} description={description}>
        <button
          className="border-1 border-gray-300 rounded-2xl p-3 cursor-pointer"
          onClick={() => navigate(ROUTES.HOME, { replace: true })}
        >
          Take me home
        </button>
      </EmptyState>
    </div>
  );
};
