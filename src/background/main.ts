import { Particle } from "./particle";
import type { MouseState, MouseEffect } from "./types";

export function initBackground(): void {
  const PARTICLE_COUNT = Math.min(100, Math.floor(window.innerWidth * window.innerHeight / 1500)); //Number of particles
  const PARTICLE_RADIUS = 2; //Radius of each particle
  const MAX_DISTANCE = 160; //Max distance for a line to form
  const MAX_DISTANCE_SQ = MAX_DISTANCE * MAX_DISTANCE; //Square of above
  const PARTICLE_SPEED = 0.5; //Max speed of a particle
  const MOUSE_EFFECTS: MouseEffect = { dist: 120, distSq: 120 * 120, strength: 0.05 }; //How mouse effects particles

  const canvas = document.querySelector<HTMLCanvasElement>("#background")!; //Canvas to draw on
  if (!canvas) throw new Error("Background canvas not found")
  const ctx = canvas.getContext("2d")!; //2D context of said canvas
  if (!ctx) throw new Error("2D rendering context not supported.")

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles: Particle[] = []; //List of particles
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const { width, height } = canvas;
    particles.push(new Particle(width, height, PARTICLE_SPEED, PARTICLE_RADIUS));
  }

  window.addEventListener("pointermove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    mouse.active = true;
  });
  const mouse: MouseState = { x: 0, y: 0, active: false };
  window.addEventListener("pointerleave", () => { mouse.active = false; });

  function resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const target = Math.min(100, Math.floor(width * height / 1500));

    while (particles.length < target) { particles.push(new Particle(width, height, PARTICLE_SPEED, PARTICLE_RADIUS)); }
    while (particles.length > target) { particles.pop(); }
  }
  window.addEventListener("resize", resize);

  //Get colour from css
  const styles = getComputedStyle(document.documentElement);
  const foregroundColor = styles.getPropertyValue("--light").trim();

  function frame(): void {
    ctx.fillStyle = foregroundColor;
    ctx.strokeStyle = foregroundColor;

    const { width, height } = canvas;

    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.update(width, height, mouse, MOUSE_EFFECTS);
      p.draw(ctx);
    }
    drawLines();

    requestAnimationFrame(frame);
  }
  frame();

  function drawLines(): void {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) { //Only compare each pair once (no duplicate lines)
        const a = particles[i];
        const b = particles[j];

        const dx = a.x - b.x;
        const dy = a.y - b.y;

        const distSq = dx * dx + dy * dy;

        if (distSq < MAX_DISTANCE_SQ) {
          ctx.beginPath();

          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);

          ctx.globalAlpha = 1 - distSq / MAX_DISTANCE_SQ;
          ctx.stroke();
        }
      }
    }
  }
}
