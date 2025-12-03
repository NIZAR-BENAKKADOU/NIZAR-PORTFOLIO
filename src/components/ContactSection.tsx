import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-secondary/30">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm font-medium mb-4 block">
            {'// CONTACT'}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Parlons-en !</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Je suis toujours ouvert à de nouveaux défis, à des collaborations ou simplement à une discussion sur l'avenir du code.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <a
            href="mailto:nizar.ben123456@gmail.com"
            className="p-6 rounded-2xl bg-card border border-border card-glow group text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">nizar.ben123456@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/nizar-benakkadou-2bb541311/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-card border border-border card-glow group text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Nizar Benakkadou</p>
          </a>

          <a
            href="https://github.com/NIZAR-BENAKKADOU"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-card border border-border card-glow group text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">GitHub</h3>
            <p className="text-sm text-muted-foreground">NIZAR-BENAKKADOU</p>
          </a>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:nizar.ben123456@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1"
          >
            <Send size={20} />
            Envoyer un message
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
