import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItem {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    type: 'education' | 'work';
}

const TimelineSection = () => {
    const timelineItems: TimelineItem[] = [
        {
            year: '2025 - Présent',
            title: 'Ingénierie Logicielle',
            subtitle: 'Groupe ISGA',
            description: 'Formation en Computer Software Engineering pour approfondir mes compétences techniques.',
            type: 'education',
        },
        {
            year: 'Oct 2024 - Jan 2025',
            title: 'Web Developer',
            subtitle: 'CHU Hassan II - Fès',
            description: 'Développement d\'une plateforme de télémédecine avec Laravel, React et MySQL. Gestion de 500+ utilisateurs simultanés et réduction de 30% des failles de sécurité.',
            type: 'work',
        },
        {
            year: 'Juil - Août 2024',
            title: 'Backend Developer',
            subtitle: 'Atacadão - Fès',
            description: 'Optimisation des requêtes MySQL (-20% temps de chargement), personnalisation de thèmes WordPress et gestion de pipelines CI/CD via GitLab.',
            type: 'work',
        },
        {
            year: 'Avr - Mai 2024',
            title: 'Frontend Developer',
            subtitle: 'Arti Web',
            description: 'Développement de 15+ composants React/Bootstrap, amélioration de la réactivité UI de 20% et contribution au backend Python/Laravel.',
            type: 'work',
        },
        {
            year: 'Juil - Août 2023',
            title: 'Backend Developer',
            subtitle: 'Labonord - Fès',
            description: 'Développement backend PHP/MySQL, optimisation des requêtes et personnalisation WordPress. Gestion CI/CD avec GitLab.',
            type: 'work',
        },
        {
            year: '2022 - 2024',
            title: 'DTS Développement Web Full Stack',
            subtitle: 'OFPPT',
            description: 'Formation complète en développement web, maîtrise des technologies front-end et back-end.',
            type: 'education',
        },
    ];

    const getIcon = (type: TimelineItem['type']) => {
        switch (type) {
            case 'education':
                return GraduationCap;
            case 'work':
                return Briefcase;
        }
    };

    const getColor = (type: TimelineItem['type']) => {
        switch (type) {
            case 'education':
                return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
            case 'work':
                return 'bg-green-500/20 text-green-400 border-green-500/30';
        }
    };

    return (
        <section id="timeline" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-primary font-mono text-sm font-medium mb-4 block">
                        {'// PARCOURS'}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Mon <span className="gradient-text">parcours</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Les étapes clés de mon évolution en tant que développeur.
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-accent transform md:-translate-x-1/2" />

                    {/* Timeline Items */}
                    <div className="space-y-12">
                        {timelineItems.map((item, index) => {
                            const Icon = getIcon(item.type);
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Content Card */}
                                    <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:bg-card/80 backdrop-blur-sm">
                                            {/* Year Badge */}
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-mono font-medium text-muted-foreground mb-3">
                                                {item.year}
                                            </div>

                                            {/* Title & Subtitle */}
                                            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-primary font-medium mb-3">
                                                {item.subtitle}
                                            </p>

                                            {/* Description */}
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Center Icon */}
                                    <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                                        <div className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center ${getColor(item.type)} transition-transform hover:scale-110`}>
                                            <Icon size={20} />
                                        </div>
                                    </div>

                                    {/* Empty space for alternating layout */}
                                    <div className="hidden md:block md:w-1/2" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
