export async function fetchUser(authToken: any) {
  const response = await fetch(`${process.env.DATABASE_URL}/user/profile`, {
    method: "GET",
    headers: {
      Cookie: `authToken=${authToken}`,
    },
    credentials: "include",
  });
  return await response.json();
}
