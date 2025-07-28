import { useUser } from "@clerk/nextjs";

export const useUserDetails = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !user) return null;

  return {
    loggedInUsername: user.fullName,
    email: user.emailAddresses[0].emailAddress,
    userId: user.id,
    imageUrl: user.imageUrl,
    isUserExits: isSignedIn
  };
};
