import Auth from "@/components/auth/Auth";

const page = () => {
  return (
    <Auth
      component="signup"
      loginHeading="Create your free account"
      authWithEmailText="Or sign up with your Email"
      userAuthOption="Already have an account? "
      userAuthAction="Sign in"
    />
  );
};

export default page;
