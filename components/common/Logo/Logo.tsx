import LogoIcon from "@/components/svg/LogoIcon";

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <LogoIcon className="w-8 h-8 fill-app-lightPrimary" />
      <span className="text-xl font-extrabold">bookadoc</span>
    </div>
  );
};

export default Logo;
