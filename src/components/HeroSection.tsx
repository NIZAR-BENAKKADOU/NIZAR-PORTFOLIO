import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 opacity-0 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Disponible pour des missions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            Salut, moi c'est{' '}
            <span className="gradient-text">Nizar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 opacity-0 animate-fade-in-up animation-delay-200">
            <span className="text-foreground font-semibold">Architecte Full Stack</span>
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
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1 w-full sm:w-auto"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-secondary border border-border text-foreground rounded-xl font-semibold text-base hover:bg-muted transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
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
              className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/nizar-benakkadou-2bb541311/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:nizar.ben123456@gmail.com"
              className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
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
