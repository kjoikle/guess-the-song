import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/game">
        <button>Game</button>
      </Link>
    </>
  );
}

export default Navbar;
