import Auth from "@/components/auth/Auth";

const page = () => {
  return (
    <Auth
      component="signin"
      loginHeading="Log in to your account"
      authWithEmailText="Or log in with your Email"
      userAuthOption="New to leetcode ?"
      userAuthAction="Sign up"
    />
  );
};

export default page;
