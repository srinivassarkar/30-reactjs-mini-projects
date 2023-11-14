import { useState } from "react";

export default function Thirteen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isloggedIn, setIsloggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleAuth = () => {
    if (isRegistered) {
      //if reg
      if (isRegistered) {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );
        if (user) {
          setIsloggedIn(true);
        } else {
          alert("Login failed. Please check your credentials");
        }
      }
    } else {
      //reg
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsloggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsloggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      {isloggedIn ? (
        <div>
          <h2>Welcome, {email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2 className="font-bold text-4xl mb-4">
            {isRegistered ? "Login" : "Register"}
          </h2>
          <form>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuth}>
              {isRegistered ? "Login" : "Register"}
            </button>
          </form>

          <p>
            {isRegistered
              ? "Don't have an account? Register now!"
              : "Already have an account? Login In!"}
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
}
