import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTilt } from '@/hooks/useTilt';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { values: tiltValues, onMouseMove: onTiltMove, onMouseLeave: onTiltLeave } = useTilt({
    maxTilt: 10,
    perspective: 1000,
    scale: 1.02
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000"
    >
      {/* 3D Background Scene */}
      <div className="absolute inset-0 bg-background">
        {/* Animated gradient orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] animate-morph"
          style={{
            background: 'radial-gradient(circle, hsl(199 89% 48% / 0.4) 0%, transparent 70%)',
            transform: `translate3d(${mousePosition.x * 40}px, ${mousePosition.y * 40}px, 0)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] animate-morph-delayed"
          style={{
            background: 'radial-gradient(circle, hsl(260 70% 60% / 0.3) 0%, transparent 70%)',
            transform: `translate3d(${mousePosition.x * -30}px, ${mousePosition.y * -30}px, 0)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{
            background: 'radial-gradient(circle, hsl(45 93% 58% / 0.15) 0%, transparent 70%)',
            transform: `translate(-50%, -50%) translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0)`,
          }}
        />
      </div>

      {/* 3D Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none preserve-3d">
        {/* Cube */}
        <div
          className="absolute top-[15%] left-[10%] cube-container scale-125"
          style={{
            transform: `rotateX(${mousePosition.y * 25}deg) rotateY(${mousePosition.x * 25}deg)`,
          }}
        >
          <div className="cube">
            <div className="cube-face cube-front" />
            <div className="cube-face cube-back" />
            <div className="cube-face cube-right" />
            <div className="cube-face cube-left" />
            <div className="cube-face cube-top" />
            <div className="cube-face cube-bottom" />
          </div>
        </div>

        {/* Octahedron */}
        <div
          className="absolute top-[20%] right-[15%] octahedron-container scale-125"
          style={{
            transform: `rotateX(${mousePosition.y * -30}deg) rotateY(${mousePosition.x * 30}deg)`,
          }}
        >
          <div className="octahedron">
            <div className="octa-face octa-1" />
            <div className="octa-face octa-2" />
            <div className="octa-face octa-3" />
            <div className="octa-face octa-4" />
            <div className="octa-face octa-5" />
            <div className="octa-face octa-6" />
            <div className="octa-face octa-7" />
            <div className="octa-face octa-8" />
          </div>
        </div>

        {/* Floating Ring */}
        <div
          className="absolute bottom-[25%] left-[8%] ring-3d scale-125"
          style={{
            transform: `rotateX(${60 + mousePosition.y * 20}deg) rotateZ(${mousePosition.x * 40}deg)`,
          }}
        />

        {/* Pyramid */}
        <div
          className="absolute bottom-[30%] right-[12%] pyramid-container scale-125"
          style={{
            transform: `rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * -25}deg)`,
          }}
        >
          <div className="pyramid">
            <div className="pyramid-face pyramid-front" />
            <div className="pyramid-face pyramid-right" />
            <div className="pyramid-face pyramid-back" />
            <div className="pyramid-face pyramid-left" />
            <div className="pyramid-base" />
          </div>
        </div>

        {/* Floating spheres */}
        <div
          className="absolute top-[40%] left-[5%] w-6 h-6 rounded-full bg-primary/60 shadow-[0_0_30px_hsl(199_89%_48%/0.5)] animate-float-slow"
          style={{ transform: `translate3d(${mousePosition.x * 60}px, ${mousePosition.y * 60}px, 100px)` }}
        />
        <div
          className="absolute top-[60%] right-[8%] w-8 h-8 rounded-full bg-accent/50 shadow-[0_0_25px_hsl(45_93%_58%/0.4)] animate-float-medium"
          style={{ transform: `translate3d(${mousePosition.x * -50}px, ${mousePosition.y * -50}px, 80px)` }}
        />
        <div
          className="absolute top-[30%] right-[30%] w-4 h-4 rounded-full bg-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.4)] animate-float-fast"
          style={{ transform: `translate3d(${mousePosition.x * 70}px, ${mousePosition.y * 70}px, 120px)` }}
        />
        <div
          className="absolute bottom-[40%] left-[25%] w-6 h-6 rounded-full bg-primary/40 shadow-[0_0_25px_hsl(199_89%_48%/0.3)] animate-float-medium"
          style={{ transform: `translate3d(${mousePosition.x * -40}px, ${mousePosition.y * -40}px, 60px)` }}
        />
      </div>

      {/* Grid with perspective */}
      <div className="absolute inset-0 grid-3d" />

      <div className="container mx-auto px-6 relative z-10 perspective-1000">
        <div
          className="max-w-4xl mx-auto text-center card-3d-content"
          onMouseMove={onTiltMove}
          onMouseLeave={onTiltLeave}
          style={{
            transform: tiltValues.transform,
          }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 opacity-0 animate-fade-in-up card-floating-item">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Disponible pour des missions</span>
          </div>

          {/* Main Heading with 3D effect */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up animation-delay-100 card-floating-item-deep">
            <span className="inline-block text-3d">Salut, moi c'est</span>{' '}
            <span className="gradient-text text-3d-glow inline-block">Nizar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 opacity-0 animate-fade-in-up animation-delay-200 card-floating-item">
            <span className="text-foreground font-semibold">Architecte Full Stack</span>
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animation-delay-300 leading-relaxed card-floating-item">
            Je transforme le café ☕ et les idées en solutions digitales.
            Expert <span className="text-primary font-medium">Laravel</span> & <span className="text-primary font-medium">React</span>,
            je construis des applications performantes et scalables.
          </p>

          {/* CTA Buttons with 3D hover */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up animation-delay-400 card-floating-item">
            <a
              href="#projects"
              className="btn-3d px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base w-full sm:w-auto"
            >
              <span className="btn-3d-content">Voir mes projets</span>
            </a>
            <a
              href="#contact"
              className="btn-3d-outline px-8 py-4 rounded-xl font-semibold text-base w-full sm:w-auto"
            >
              <span className="btn-3d-content">Parlons-en</span>
            </a>
          </div>

          {/* Social Links with 3D effect */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-500 card-floating-item">
            <a
              href="https://github.com/NIZAR-BENAKKADOU"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-3d"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/nizar-benakkadou-2bb541311/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-3d"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:nizar.ben123456@gmail.com"
              className="social-icon-3d"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-700">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs font-medium">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
