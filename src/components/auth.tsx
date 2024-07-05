import { SignIn, SignUp } from "@clerk/nextjs";
import { WavyBackground } from "./wavy-bg";
export const Auth = ({ type }: { type: "sign-up" | "sign-in" }) => {
  return (
    <WavyBackground>
      {type === "sign-up" ? <SignUp /> : <SignIn />}
    </WavyBackground>
  );
};
