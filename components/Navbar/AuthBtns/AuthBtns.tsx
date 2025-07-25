import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const AuthBtns = () => {
  return (
    <div>
      <div className="space-x-2">
        <SignedOut>
          <SignInButton>
            <Button className="rounded-full h-10 w-28 bg-transparent border-2 border-app-primary text-app-primary hover:bg-app-primary hover:text-white uppercase text-xs tracking-wide">
              Login
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className="rounded-full h-10 w-auto bg-app-primary hover:bg-app-lightPrimary uppercase text-xs tracking-wide">
              Create Account
            </Button>
          </SignUpButton>
        </SignedOut>
      </div>
      <SignedIn>
        <UserButton appearance={{ elements: { avatarBox: "w-12 h-12" } }} />
      </SignedIn>
    </div>
  );
};

export default AuthBtns;
