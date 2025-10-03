import { useEffect, useRef } from "react";

const BackgroundParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * DPR;
      canvas.height = window.innerHeight * DPR;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();

    // Settings
    const PARTICLE_COUNT = 300;    // balanced performance
    const BASE_SPEED = 0.2;        // idle drift
    const RADIUS = 120 * DPR;      // mouse influence radius
    const FORCE = 7;               // scatter strength
    const RETURN_SPEED = 0.05;     // how fast they glide back home

    const colors = [
      "rgba(34, 211, 238, 0.8)",   // cyan
      "rgba(96, 165, 250, 0.8)",   // blue
      "rgba(167, 139, 250, 0.8)",  // violet
    ];

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      homeX: number;
      homeY: number;
    };

    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const homeX = Math.random() * canvas.width;
      const homeY = Math.random() * canvas.height;
      particles.push({
        x: homeX,
        y: homeY,
        vx: 0,
        vy: 0,
        size: Math.random() * 1.2 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        homeX,
        homeY,
      });
    }

    const mouse = { x: -9999, y: -9999 };
    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * DPR;
      mouse.y = (e.clientY - rect.top) * DPR;
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < RADIUS) {
          // Scatter when mouse is close
          const angle = Math.atan2(dy, dx);
          const push = (RADIUS - dist) / RADIUS * FORCE;
          p.vx += Math.cos(angle) * push;
          p.vy += Math.sin(angle) * push;
        } else {
          // Glide back home
          p.vx += (p.homeX - p.x) * RETURN_SPEED;
          p.vy += (p.homeY - p.y) * RETURN_SPEED;
        }

        // Apply velocity with smoothing
        p.vx *= 0.9;
        p.vy *= 0.9;

        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Optional constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx2 = p.x - p2.x;
          const dy2 = p.y - p2.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (dist2 < 70) {
            ctx.beginPath();
            ctx.strokeStyle = p.color.replace("0.8", "0.15");
            ctx.lineWidth = 0.4;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none"
      aria-hidden="true"
      style={{ opacity: 0.9 }}
    />
  );
};

export default BackgroundParticles;
