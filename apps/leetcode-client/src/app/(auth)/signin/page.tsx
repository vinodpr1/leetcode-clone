import Auth from "@/components/auth/Auth";

const page = () => {
  return (
    <Auth
      component="signin"
      loginHeading="Log in to your account"
      authWithEmailText="or log in with your email"
      userAuthOption="New to Leetcode?"
      userAuthAction="Sign up for an account"
    />
  );
};

export default page;
