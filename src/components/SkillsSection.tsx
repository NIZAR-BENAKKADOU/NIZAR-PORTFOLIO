const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend & UI',
      color: 'primary',
      skills: ['React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Bootstrap'],
    },
    {
      title: 'Backend & Architecture',
      color: 'accent',
      skills: ['Laravel', 'PHP', 'Node.js', 'Java', 'Python'],
    },
    {
      title: 'Systems & Low Level',
      color: 'primary',
      skills: ['C#', 'C++', 'C'],
    },
    {
      title: 'Data & Cloud',
      color: 'accent',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Git'],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm font-medium mb-4 block">
            {'// COMPÉTENCES'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ma <span className="gradient-text">boîte à outils</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            J'utilise la bonne technologie pour le bon problème. Voici ma palette de prédilection.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-card border border-border card-glow"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    category.color === 'accent' ? 'bg-accent' : 'bg-primary'
                  }`}
                />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-badge"
                    style={{ animationDelay: `${(categoryIndex * 5 + skillIndex) * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
