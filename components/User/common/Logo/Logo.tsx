import LogoIcon from "@/components/svg/LogoIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ placement }: { placement: string }) => {
  return (
    <Link href="/home" className="flex items-center gap-2">
      <LogoIcon
        className={cn(
          placement === "success" ? "w-14 h-14" : "w-10 h-10",
          "fill-app-lightPrimary"
        )}
      />
      <span
        className={cn(
          placement === "success" ? "text-5xl" : "text-3xl",
          "font-extrabold text-app-mainText"
        )}
      >
        bookadoc
      </span>
    </Link>
  );
};

export default Logo;
