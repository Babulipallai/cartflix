import React, { useState, useEffect } from "react";
import "./Home.css";
import SliderHome from "./Slider";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user has scrolled down 100 pixels
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds a smooth scrolling effect
    });
  };

  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <SliderHome />
        </div>
        <button
          onClick={scrollToTop}
          style={{
            display: isVisible ? "block" : "none",
            position: "fixed",
            bottom: "3rem",
            right: "3rem",
            padding: "10px",
            borderRadius: "50px",
            borderColor: "#0a51cd",
            borderWidth: "3px",
            borderStyle: "solid",
            cursor: "pointer",
            backgroundColor: "white",
            height: "2.7rem",
            width: "2.7rem",
            fontSize: "1.5rem",
            fontWeight: "bolder",
            zIndex: 6,
          }}
        >
          <i
            class="fa-solid fa-arrow-up fa-bounce"
            style={{ color: "#0a51cd" }}
          ></i>
        </button>
      </section>
    </>
  );
};

export default Home;
