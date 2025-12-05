import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    linkedin: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Web3Forms integration - Get your free access key at https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'a569af94-6bc2-42bb-a380-05227cb8a74f',
          name: `${formData.prenom} ${formData.nom}`,
          email: formData.linkedin,
          subject: `Nouveau message de ${formData.prenom} ${formData.nom}`,
          message: `
Nom: ${formData.nom}
Prénom: ${formData.prenom}
LinkedIn/Email: ${formData.linkedin}

Message:
${formData.message}
          `.trim(),
          from_name: `${formData.prenom} ${formData.nom}`,
          to_email: 'nizar.ben123456@gmail.com'
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ nom: '', prenom: '', linkedin: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Un projet en tête ? Une question ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    required
                    value={formData.prenom}
                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium mb-2">
                  LinkedIn / Email
                </label>
                <input
                  type="text"
                  id="linkedin"
                  required
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="linkedin.com/in/votre-profil ou email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Parlez-moi de votre projet..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-500 text-sm">
                  ✓ Message envoyé avec succès ! Je vous répondrai bientôt.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
                  ✗ Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold text-lg mb-4">Informations de contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:nizar.ben123456@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <span className="text-sm">nizar.ben123456@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/nizar-benakkadou-2bb541311/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin size={20} className="text-primary" />
                  </div>
                  <span className="text-sm">Nizar Benakkadou</span>
                </a>

                <a
                  href="https://github.com/NIZAR-BENAKKADOU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github size={20} className="text-primary" />
                  </div>
                  <span className="text-sm">NIZAR-BENAKKADOU</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <h3 className="font-semibold mb-2">Disponibilité</h3>
              <p className="text-sm text-muted-foreground">
                Je suis actuellement disponible pour de nouvelles opportunités et projets freelance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
