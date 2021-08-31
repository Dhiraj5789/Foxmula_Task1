import * as React from "react";
import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return (
    <div className="App">
      <section className="hero">
        <img
          src="https://i.ibb.co/fNszGpS/landscape.png"
          alt="test"
          className="parallax1"
        />
        <img
          src="https://i.ibb.co/hCrCBBn/sky.png"
          alt="test"
          className="parallax"
          style={{
            transform: `translateY(${offset * 0.5}px)`
          }}
        />
        <h2
          className="text-wrapper"
          style={{
            transform: `translateY(${offset * 0.6}px)`
          }}
        >
          TREKK
        </h2>
      </section>
      {/* Make space to scroll */}
      <section className="overflow" />
    </div>
  );
}

// How to apply the following JavaScript to react component above?

// <script>
// window.addEventListener('scroll', function() {
//     const parallax = document.querySelector('.parallax');
//     let scrollPosition = window.pageYOffset;

//     parallax.style.transform = `translateY(${scrollPosition * .5}px)`
// })
// </script>
