import { Link } from "react-router-dom";
import "../../assets/css/Error/Error.css";

const Error = () => {
  return (
    <section>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go back</Link>
    </section>
  );
};

export default Error;
