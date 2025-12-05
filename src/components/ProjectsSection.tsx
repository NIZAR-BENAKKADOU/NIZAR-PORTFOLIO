import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  gradient: string;
  iconColor: string;
  image: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <article className="group h-full">
      <div className="h-full rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-colors duration-300">

        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
          />
          <div className="absolute bottom-3 left-4 px-3 py-1 rounded-md bg-black/60 backdrop-blur-sm">
            <span className="text-xs font-mono text-white/90 font-medium">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className={`text-xs font-medium ${project.iconColor} uppercase tracking-wider`}>
              {project.subtitle}
            </p>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={16} />
              Code
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-primary hover:underline transition-colors"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'StadiuGo',
      subtitle: 'Réservation de Terrains de Foot',
      description:
        'Plateforme web complète permettant aux joueurs de trouver, réserver et payer leurs terrains de football en ligne avec une gestion des créneaux en temps réel.',
      stack: ['Laravel', 'React', 'MySQL', 'Stripe API'],
      gradient: 'from-green-500 to-emerald-500',
      iconColor: 'text-green-400',
      image: 'C:/Users/nizar/.gemini/antigravity/brain/3744e83c-1758-41ea-9db3-3cdb87955473/stadiugo_project_1764959370320.png',
    },
    {
      title: 'TeleMed',
      subtitle: 'Plateforme de Téléconsultation',
      description:
        'Connecter patients et médecins à distance. Une solution sécurisée pour des consultations vidéo fluides et une gestion de dossiers patients.',
      stack: ['React', 'Laravel', 'WebRTC', 'TailwindCSS'],
      gradient: 'from-blue-500 to-cyan-500',
      iconColor: 'text-blue-400',
      image: 'C:/Users/nizar/.gemini/antigravity/brain/3744e83c-1758-41ea-9db3-3cdb87955473/telemed_project_1764959385581.png',
    },
    {
      title: 'ElectroStore',
      subtitle: 'Site E-commerce',
      description:
        "Boutique en ligne B2C pour produits électroniques. Une expérience d'achat simple, un panier dynamique et une gestion de catalogue robuste.",
      stack: ['Laravel', 'Blade', 'JavaScript', 'MySQL'],
      gradient: 'from-purple-500 to-pink-500',
      iconColor: 'text-purple-400',
      image: 'C:/Users/nizar/.gemini/antigravity/brain/3744e83c-1758-41ea-9db3-3cdb87955473/electrostore_project_1764959400301.png',
    },
    {
      title: 'InternTrack',
      subtitle: 'Gestion des Stagiaires',
      description:
        "Outil interne pour simplifier le suivi, la gestion des projets, l'assignation des tâches et l'évaluation des stagiaires au sein de l'entreprise.",
      stack: ['React', 'Laravel API', 'PostgreSQL'],
      gradient: 'from-orange-500 to-amber-500',
      iconColor: 'text-orange-400',
      image: 'C:/Users/nizar/.gemini/antigravity/brain/3744e83c-1758-41ea-9db3-3cdb87955473/interntrack_project_1764959415611.png',
    },
    {
      title: 'LibManage',
      subtitle: 'Système de Bibliothèque',
      description:
        "Un système de gestion optimisé pour automatiser les prêts, les retours et la gestion des stocks d'une bibliothèque universitaire.",
      stack: ['PHP Native', 'MySQL', 'Bootstrap'],
      gradient: 'from-red-500 to-rose-500',
      iconColor: 'text-red-400',
      image: 'C:/Users/nizar/.gemini/antigravity/brain/3744e83c-1758-41ea-9db3-3cdb87955473/libmanage_project_1764959431911.png',
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto perspective-1000">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} proje={project} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
};

export default ProjectsSection;
