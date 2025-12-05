import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const typedText = useTypingEffect({
    words: ['Full Stack Developer', 'Expert Laravel', 'Spécialiste React', 'Créateur d\'Applications'],
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 1500,
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Simple Background with gradient orbs */}
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



      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 opacity-0 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Disponible pour des missions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            <span className="inline-block">Salut, moi c'est</span>{' '}
            <span className="gradient-text inline-block">Nizar</span>
          </h1>

          {/* Subtitle with Typing Effect */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 opacity-0 animate-fade-in-up animation-delay-200 h-8">
            <span className="text-foreground font-semibold">{typedText}</span>
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animation-delay-300 leading-relaxed">
            Je transforme le café ☕ et les idées en solutions digitales.
            Expert <span className="text-primary font-medium">Laravel</span> & <span className="text-primary font-medium">React</span>,
            je construis des applications performantes et scalables.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up animation-delay-400">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base w-full sm:w-auto hover:opacity-90 transition-opacity"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-secondary text-secondary-foreground border border-border rounded-xl font-semibold text-base w-full sm:w-auto hover:border-primary transition-colors"
            >
              Parlons-en
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-500">
            <a
              href="https://github.com/NIZAR-BENAKKADOU"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary border border-border hover:border-primary transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/nizar-benakkadou-2bb541311/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary border border-border hover:border-primary transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:nizar.ben123456@gmail.com"
              className="p-3 rounded-xl bg-secondary border border-border hover:border-primary transition-colors"
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
