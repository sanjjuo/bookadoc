import LogoIcon from "@/components/svg/LogoIcon";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/home" className="flex items-center gap-1">
      <LogoIcon className="w-8 h-8 fill-app-lightPrimary" />
      <span className="text-xl font-extrabold">bookadoc</span>
    </Link>
  );
};

export default Logo;
