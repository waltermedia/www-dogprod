import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

const Header = () => {
  return (
    <nav className="mb-12 mt-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeftIcon className="h-4 w-4" />
        Back to Home
      </Link>
    </nav>
  );
};

export default Header;
