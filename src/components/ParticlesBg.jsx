import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBg() {
  async function loadParticles(main) {
    await loadFull(main);
  }
  return (
    <Particles
      id="tsparticles"
      init={loadParticles}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        particles: {
          number: {
            value: 30,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "circle",
            options: {
              sides: 6,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 6,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#13B0BE",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: ["repulse"],
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        background: {
          color: "rgb(5 8 22 / var(--tw-bg-opacity)",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
}

export default ParticlesBg;
