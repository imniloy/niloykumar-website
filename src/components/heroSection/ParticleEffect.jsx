import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const HeroParticleEffect = ({ children }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      width="100%"
      height="97vh"
      className="!absolute !top-0 !left-0 !right-0 -z-[5]"
      // style={{}}
      options={{
        fullScreen: {
          enable: false,
          // zIndex: -10,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "bubble",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              opacity: 0.8,
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 1000,
              duration: 2,
              size: 40,
            },
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 90,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#f4f5f6",
          },
          links: {
            color: "#009e66",
            distance: 400,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "right",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 8 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default HeroParticleEffect;
