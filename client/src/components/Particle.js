import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Particle extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    let config = {
      num: [4, 10],
      rps: 0.1,
      radius: [5, 20],
      life: [1.5, 10],
      v: [2, 10],
      tha: [-40, 40],
      alpha: [0.6, 0],
      scale: [0.1, 0.4],
      position: "all",
      color: ["random", "#ff0000"],
      cross: "dead",
      random: 100,
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        },
      });
    }

    return (
      <div>
        <ParticlesBg type="circle" config={config} bg={true} />
      </div>
    );
  }
}

export default Particle;
