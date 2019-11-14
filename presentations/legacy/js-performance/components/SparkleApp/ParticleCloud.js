const colorPalette = [
  '#029DAF',
  '#E5D599',
  '#FFC219',
  '#FF80E1'
];

function isInBounds(config, particle) {
  const { canvas } = config;

  if (config.longFrame) {
    const calculateBounds = (delay) => {
      const start = Date.now();
      while (Date.now() - start < delay) {}
    } 
    calculateBounds(3);
  }

  return particle.x - particle.size < canvas.width &&
    particle.x + particle.size > 0 &&
    particle.y - particle.size < canvas.height &&
    particle.y + particle.size > 0;
}

function drawParticle(config, particle) {
  const { canvas, ctx, gravity, velocity } = config;

  particle.vy += 0.04 * velocity;
  particle.x += particle.vx * velocity;
  particle.y += particle.vy * velocity;
  particle.opacity -= 0.005;

  ctx.globalAlpha = particle.opacity;
  ctx.fillStyle = particle.color;
  ctx.fillRect(particle.x, particle.y, particle.size, particle.size);

  return isInBounds(config, particle);
}

function initParticles(config) {
  const particles = [];
  for (let i = 0; i < config.particleCount; i++) {
    const colorIdx = i % colorPalette.length;
    const particle = {
      color: colorPalette[colorIdx],
      opacity: 0.5 + Math.random() * 0.5,
      size: 6 + Math.random() * 6,
      x: config.startX,
      y: config.startY,
      vx: (Math.random() * 3) + 1,
      vy: (Math.random() * -2) - 1
    };

    particles.push(particle);
  }

  return particles;
}

function drawBackground(config) {
  const { canvas, ctx, backgroundBitmap } = config;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.globalAlpha = 1;
  ctx.drawImage(backgroundBitmap, 50, 0, 290, 375);
}

export default class ParticleCloud {
  constructor(canvas, backgroundBitmap, longFrame = false) {
    this.config = {
      canvas,
      ctx: canvas.getContext('2d'),
      longFrame,
      particleCount: 50,
      backgroundBitmap,
      startX: 210,
      startY: 240,
      velocity: 1
    };

    drawBackground(this.config);
  }

  animate() {
    this.activeParticles = (this.activeParticles || []).concat(initParticles(this.config));

    if (!this.animateParticles) {
      this.animateParticles = () => {
        if (this.animateParticles) {
          const { ctx } = this.config;
          
          drawBackground(this.config);
          this.activeParticles = this.activeParticles.filter((particle) => {
            return drawParticle(this.config, particle);
          });

          window.requestAnimationFrame(this.animateParticles);
        }
      };
      this.animateParticles();
    }
  }

  end() {
    this.animateParticles = null;
  }
}
