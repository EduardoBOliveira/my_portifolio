import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/EduardoBOliveira' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/eduardo-bezerra-205069234/' },
  { icon: Mail, label: 'Email', href: 'mailto:edubezerra_oliveira@hotmail.com' },
];

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projetos', path: '/projects' },
  { label: 'Sobre', path: '/about' },
  { label: 'Contato', path: '/contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-lg">
                D
              </div>
              <span className="font-display font-semibold text-xl">
                Dev<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Criando sistemas escaláveis e experiências digitais memoráveis. 
              Transformando ideias em produtos reais.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Navegação
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              Social
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 group"
                  >
                    <link.icon size={16} />
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com
            <span className="text-primary">♥</span>
            e muito código
          </p>
        </div>
      </div>
    </footer>
  );
}
