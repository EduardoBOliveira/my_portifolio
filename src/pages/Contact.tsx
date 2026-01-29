import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/EduardoBOliveira', username: 'EduardoBOliveira' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/eduardo-bezerra-205069234/', username: 'Eduardo Bezerra' },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: 'Mensagem enviada!',
        description: 'Obrigado pelo contato. Responderei em breve.',
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      toast({
        title: 'Erro ao enviar',
        description: 'Não foi possível enviar sua mensagem. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// Contato</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Vamos criar algo{' '}
              <span className="gradient-text">juntos</span>?
            </h1>
            <p className="text-muted-foreground text-lg">
              Tem um projeto em mente? Quer discutir uma ideia? Ou apenas quer 
              bater um papo sobre tecnologia? Ficarei feliz em ouvir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sobre o que gostaria de conversar?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte mais sobre seu projeto ou ideia..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full glow-sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Enviar mensagem
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Direct Contact */}
              <div className="glass rounded-2xl p-8">
                <h2 className="font-display font-semibold text-xl mb-6">Contato Direto</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:edubezerra_oliveira@hotmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground block">Email</span>
                      <span className="font-medium">edubezerra_oliveira@hotmail.com</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground block">Localização</span>
                      <span className="font-medium">São Paulo, Brasil</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-2xl p-8">
                <h2 className="font-display font-semibold text-xl mb-6">Redes Sociais</h2>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <link.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground block">{link.label}</span>
                        <span className="font-medium">{link.username}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-display font-semibold">Disponível para novos projetos</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Atualmente aceito projetos freelance e oportunidades de emprego. 
                  Tempo de resposta médio: 24h.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
