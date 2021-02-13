import React from "react";
import Profile from "../images/profile2.png";

// styles
const paragraphStyles = {
  fontFamily: "serif",
  verticalAlign: "middle",
  fontSize: "2rem",
};

// data
// const infos = [
//   {
//     text:
//       "Solid knowledge & understanding of the latest Web programming, and UI/UX requirements.",
//   },
//   {
//     text:
//       "An enthusiastic, energized team worker with good problem-solving, communication skills.",
//   },
//   {
//     text:
//       "Passionate about technologies and highly curious and focused on learning in computer science.",
//   },
// ];

export default () => {
  return (
    <main className="aboutPageStyles">
      <section className="divCard1">
        <h1 style={paragraphStyles}>
          Hi! I am Emma Brewer. I am an art director & graphic designer based in
          New York City working on branding, visual identities, editorial design
          and web design.
        </h1>
      </section>
      <div className="divCard2">
        <img src={Profile} alt="Profile" />
      </div>
      <div className="divCard3">
        <ul>
          {/* {infos.map((info) => (
            <li>{info.text}</li>
          ))} */}
          <li>
            <p>
              "Solid knowledge & understanding of the latest Web programming,
              and UI/UX requirements."
            </p>
          </li>
          <li>
            <p>
              "An enthusiastic, energized team worker with good problem-solving,
              communication skills."
            </p>
          </li>
          <li>
            <p>
              "Passionate about technologies and highly curious and focused on
              learning in computer science."
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};
