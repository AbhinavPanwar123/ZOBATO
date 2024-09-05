import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Our mission is to transform urban living by delivering unmatched
            convenience, making everyday life smoother and more enjoyable. We're
            dedicated to enhancing the quality of life for city dwellers by
            providing seamless, effortless solutions that fit into their busy
            lifestyles. Convenience is at the core of everything we do—it's what
            drives us to innovate, to push boundaries, and to continually
            improve. Every day, we're motivated by the belief that a more
            convenient life is a better life, and we're committed to making that
            a reality for our customers. This passion for convenience fuels our
            determination to wake up each day with the mindset of "Let's make
            this happen."
          </p>
          <Link to={"/"}>
            Explore Menu("")
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
