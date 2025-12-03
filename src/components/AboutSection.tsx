import { Code2, Rocket, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Code2, value: '5+', label: 'Projets livrés' },
    { icon: Zap, value: '10+', label: 'Technologies maîtrisées' },
    { icon: Users, value: '100%', label: 'Clients satisfaits' },
    { icon: Rocket, value: '∞', label: 'Passion & Dévouement' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div>
            <span className="text-primary font-mono text-sm font-medium mb-4 block">
              {'// À PROPOS'}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Développeur passionné,{' '}
              <span className="gradient-text">créateur de solutions</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Je fais le pont entre une logique back-end complexe et des interfaces utilisateur intuitives. 
              Mon expertise en <span className="text-foreground font-medium">Laravel</span> et{' '}
              <span className="text-foreground font-medium">React</span> me permet de construire des applications 
              qui résolvent de vrais problèmes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Chaque projet est une opportunité d'apprendre et d'innover. Je m'efforce de créer des solutions 
              qui sont non seulement fonctionnelles mais aussi élégantes et maintenables.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all duration-300"
            >
              Discutons de votre projet
              <span>→</span>
            </a>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-card border border-border card-glow group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
