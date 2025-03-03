import Auth from "@/components/auth/Auth";

const page = () => {
  return (
    <Auth
      component="signup"
      loginHeading="Sign up to new account"
      authWithEmailText="or sign up with your email"
      userAuthOption="Already have an account?"
      userAuthAction="Sign in"
    />
  );
};

export default page;
