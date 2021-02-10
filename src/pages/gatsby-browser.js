import * as React from "react";
import {Link} from "gatsby";

const Browser = () => {
  return (
    <main>
      <div>HEllo world</div>
      <Link to="/">Go home</Link>.<Link to="/404">Go 404</Link>.
    </main>
  );
};
export default Browser;
