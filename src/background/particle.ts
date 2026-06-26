import type { MouseState, MouseEffect } from "./types"

export class Particle {
  x: number;
  y: number;

  vx: number;
  vy: number;

  readonly maxSpeed: number;
  readonly maxSpeedSq: number;

  readonly radius: number;

  constructor(width: number, height: number, maxSpeed: number, radius: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;

    this.maxSpeed = maxSpeed;
    this.maxSpeedSq = this.maxSpeed * this.maxSpeed;
  
    this.radius = radius;

    const direction = Math.random() * Math.PI * 2;

    this.vx = Math.cos(direction) * this.maxSpeed;
    this.vy = Math.sin(direction) * this.maxSpeed;
  }

  update(width: number, height: number, mouse: MouseState, mouseEffect: MouseEffect): void {
    this.x += this.vx;
    this.y += this.vy;

    //Bounce particles back into the window
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
    //Clamp particle position
    this.x = Math.min(width, Math.max(0, this.x));
    this.y = Math.min(height, Math.max(0, this.y));

    if (!mouse.active) return;

    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;

    const distSq = dx * dx + dy * dy;

    const radius = mouseEffect.dist;

    if (distSq > 0 && distSq < mouseEffect.distSq) {
      const dist = Math.sqrt(distSq)
      const force = (radius - dist) / radius;

      const strength = mouseEffect.strength;

      this.vx += (dx / dist) * force * strength;
      this.vy += (dy / dist) * force * strength;
    }

    const speedSq = this.vx * this.vx + this.vy * this.vy;
    if (speedSq > this.maxSpeedSq) {
      const speed = Math.sqrt(speedSq);
      const scale = this.maxSpeed / speed;

      this.vx *= scale;
      this.vy *= scale;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
  }
}
