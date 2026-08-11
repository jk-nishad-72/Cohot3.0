import { useEffect, useRef } from "react";
import gsap from "gsap";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const flairRef = useRef([]);
  const indexRef = useRef(0);

  useEffect(() => {
    let gap = 200;

    let flair = gsap.utils.toArray(".flair");
    let wrapper = gsap.utils.wrap(0, flair.length);

    let mousePos = { x: 0, y: 0 };
    let lastMousePos = { x: 0, y: 0 };
    let cachedMousePos = { x: 0, y: 0 };

    const playAnimation = (shape) => {
      let tl = gsap.timeline();

      tl.from(shape, {
        opacity: 0,
        scale: 0,
        ease: "elastic.out(1,0.3)",
      })
        .to(
          shape,
          {
            rotation: "random([-360, 360])",
          },
          "<"
        )
        .to(
          shape,
          {
            y: "120vh",
            ease: "back.in(.4)",
            duration: 1,
          },
          0
        );
    };

    const animateImage = () => {
      let wrappedIndex = wrapper(indexRef.current);
      let img = flair[wrappedIndex];

      gsap.killTweensOf(img);

      gsap.set(img, { clearProps: "all" });

      gsap.set(img, {
        opacity: 1,
        left: mousePos.x,
        top: mousePos.y,
        xPercent: -50,
        yPercent: -50,
      });

      playAnimation(img);
      indexRef.current++;
    };

    const ImageTrail = () => {
      let travelDistance = Math.hypot(
        lastMousePos.x - mousePos.x,
        lastMousePos.y - mousePos.y
      );

      cachedMousePos.x = gsap.utils.interpolate(
        cachedMousePos.x || mousePos.x,
        mousePos.x,
        0.1
      );

      cachedMousePos.y = gsap.utils.interpolate(
        cachedMousePos.y || mousePos.y,
        mousePos.y,
        0.1
      );

      if (travelDistance > gap) {
        animateImage();
        lastMousePos = { ...mousePos };
      }
    };

    const handleMouseMove = (e) => {
      mousePos = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    gsap.ticker.add(ImageTrail);

    // ✅ cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(ImageTrail);
    };
  }, []);

  return (
    <div className="min-h-screen min-w-screen relative">
      <div className="h-screen min-w-screen">
        <img
          className="h-screen w-screen object-cover"
          src="images/hero-image.png"
          alt=""
        />
      </div>

      <div className="absolute bottom-7 w-full text-center text-white text-[10rem] font-bold">
        <h1>JK Nishad</h1>
      </div>

      <div className="content">
        {Array.from({ length: 18 }).map((_, i) => (
          <img
            key={i}
            className="flair fixed opacity-0 w-[100px]"
            src={`https://assets.codepen.io/16327/Revised+Flair${
              i % 9 === 0 ? "" : `-${i % 9}`
            }.png`}
            alt=""
          /> 
        ))}
      </div> 


        <About />
        <Projects />
        <Contact /> 

    </div>
  );
};

export default Home;