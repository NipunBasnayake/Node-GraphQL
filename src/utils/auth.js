export const buildContext = ({ req }) => {
  const token = req.headers.authorization || "";
  const userLoggedIn = token === "Bearer valid-token"; // simulate auth
  return { userLoggedIn };
};
