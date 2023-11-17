import { useAuth } from "./AuthContext";

export default function TwentyFour() {
  const { user, login, logout } = useAuth();
  return (
    <div>
      <h1>User Auth Page with useContext Hook</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={() => login({ username: "user123" })}>Login</button>
      )}
    </div>
  );
}
