import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'StadiuGo',
      subtitle: 'Réservation de Terrains de Foot',
      description:
        'Plateforme web complète permettant aux joueurs de trouver, réserver et payer leurs terrains de football en ligne avec une gestion des créneaux en temps réel.',
      stack: ['Laravel', 'React', 'MySQL', 'Stripe API'],
      gradient: 'from-green-500/20 to-emerald-500/20',
      accentColor: 'text-green-400',
    },
    {
      title: 'TeleMed',
      subtitle: 'Plateforme de Téléconsultation',
      description:
        'Connecter patients et médecins à distance. Une solution sécurisée pour des consultations vidéo fluides et une gestion de dossiers patients.',
      stack: ['React', 'Laravel', 'WebRTC', 'TailwindCSS'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      accentColor: 'text-blue-400',
    },
    {
      title: 'ElectroStore',
      subtitle: 'Site E-commerce',
      description:
        "Boutique en ligne B2C pour produits électroniques. Une expérience d'achat simple, un panier dynamique et une gestion de catalogue robuste.",
      stack: ['Laravel', 'Blade', 'JavaScript', 'MySQL'],
      gradient: 'from-purple-500/20 to-pink-500/20',
      accentColor: 'text-purple-400',
    },
    {
      title: 'InternTrack',
      subtitle: 'Gestion des Stagiaires',
      description:
        "Outil interne pour simplifier le suivi, la gestion des projets, l'assignation des tâches et l'évaluation des stagiaires au sein de l'entreprise.",
      stack: ['React', 'Laravel API', 'PostgreSQL'],
      gradient: 'from-orange-500/20 to-amber-500/20',
      accentColor: 'text-orange-400',
    },
    {
      title: 'LibManage',
      subtitle: 'Système de Bibliothèque',
      description:
        "Un système de gestion optimisé pour automatiser les prêts, les retours et la gestion des stocks d'une bibliothèque universitaire.",
      stack: ['PHP Native', 'MySQL', 'Bootstrap'],
      gradient: 'from-red-500/20 to-rose-500/20',
      accentColor: 'text-red-400',
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm font-medium mb-4 block">
            {'// PROJETS'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mes <span className="gradient-text">créations récentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez quelques-uns des projets sur lesquels j'ai travaillé.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden card-glow"
            >
              {/* Gradient Header */}
              <div
                className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute bottom-4 left-6">
                  <span className={`text-xs font-mono ${project.accentColor}`}>
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className={`text-sm font-medium ${project.accentColor} mb-3`}>
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-secondary rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
            Activité GitHub
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <img
              src="https://github-readme-stats.vercel.app/api?username=NIZAR-BENAKKADOU&show_icons=true&count_private=true&theme=transparent&hide_border=true&title_color=0ea5e9&icon_color=0ea5e9&text_color=94a3b8&bg_color=0d1117"
              alt="GitHub Stats"
              className="rounded-xl border border-border"
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=NIZAR-BENAKKADOU&theme=transparent&hide_border=true&ring=0ea5e9&fire=f59e0b&currStreakLabel=f4f4f5&sideLabels=94a3b8&dates=64748b&background=0d1117"
              alt="GitHub Streak"
              className="rounded-xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
