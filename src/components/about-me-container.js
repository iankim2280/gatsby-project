import React from "react";
import Profile from "../images/profile2.png";

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
        <p className="headerFont">Hey There!</p>
        <h1 className="headerFont">
          I am Seunghyun Ian Kim, a Front-end Developer.
        </h1>
        <h3 className="headerFont">
          I've built a few project by myself and I'm looking for a role where I
          can grown and learn from other expreienced team members.
        </h3>
      </section>
      <section className="divCard2">
        <div className="myInfo1">
          <img src={Profile} alt="Profile" />
        </div>
        <div className="myInfo2">
          <ul>
            {/* {infos.map((info) => (
            <li>{info.text}</li>
          ))} */}
            <li>
              <br />
              <p>
                "Solid knowledge & understanding of the latest Web programming,
                and UI/UX requirements."
              </p>
            </li>
            <li>
              <p>
                "An enthusiastic, energized team worker with good
                problem-solving, communication skills."
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
