export async function fetchUser(authToken: any) {
    const response = await fetch("http://localhost:3100/api/v1/user/profile", {
        method: "GET",
        headers: {
          Cookie: `authToken=${authToken}`, // Sending auth token manually
        },
        credentials: "include",
      });
    return await response.json();
}