import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">
        <button>Log In Page</button>
      </Link>
      <Link to="/game">
        <button>Game</button>
      </Link>
      <Link to="/select">
        <button>Select</button>
      </Link>
    </>
  );
}

export default Navbar;
