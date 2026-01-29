import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Lightbulb, Users, Rocket, Download } from 'lucide-react';

const techStack = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Framer Motion', 'ViteJs'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'GraphQL', 'Java', 'JavaScript'] },
  { category: 'Database', items: ['PostgreSQL', 'Supabase', 'SQL Server'] },
  { category: 'Cloud & DevOps', items: ['Vercel', 'GitHub Actions'] },
  { category: 'Design', items: ['Figma', 'Design Systems', 'UI/UX', 'Prototipagem'] },
];

const softSkills = [
  { icon: Lightbulb, title: 'Pensamento Analítico', description: 'Decomponho problemas complexos em soluções elegantes' },
  { icon: Users, title: 'Colaboração', description: 'Trabalho efetivamente com designers, PMs e stakeholders' },
  { icon: Code2, title: 'Clean Code', description: 'Código legível, testável e de fácil manutenção' },
  { icon: Rocket, title: 'Entrega', description: 'Foco em resultados e prazos realistas' },
];

const timeline = [
  { year: '2026', title: 'Full Stack Developer', description: 'Desenvolvendo produtos do zero ao deploy' },
  { year: '2025', title: 'Frontend Developer', description: 'Especialização em React e experiência do usuário' },
  { year: '2024', title: 'Formação em Desenvolvimento', description: 'Conclusão da formação acadêmica em desenvolvimento' },
  { year: '2022', title: 'Início na Programação', description: 'Primeiros passos com desenvolvimento web' },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-mono text-sm mb-4 block">// Sobre mim</span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
                Desenvolvedor com{' '}
                <span className="gradient-text">mentalidade de produto</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Sou o Dudu um desenvolvedor Full Stack que acredita que código é apenas o meio — 
                o fim é resolver problemas reais. Combino habilidades técnicas sólidas 
                com pensamento de produto para criar soluções que realmente importam.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Minha abordagem é simples: entender profundamente o problema antes de 
                escrever a primeira linha de código. Isso significa colaborar com 
                stakeholders, questionar suposições e iterar rapidamente até 
                encontrar a solução ideal.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="glow-sm" asChild>
                  <Link to="/projects">
                    Ver projetos
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/EDUARDO_BEZERRA_DE_OLIVEIRA_-_DEV.pdf" download>
                    <Download className="mr-2" size={18} />
                    Download CV
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl glass overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-muted to-primary/10 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                    <span className="font-display font-bold text-primary text-5xl">D</span>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-xl p-3"
              >
                <span className="font-mono text-sm text-primary">4+ anos</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass rounded-xl p-3"
              >
                <span className="font-mono text-sm text-primary">4+ projetos</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// Stack</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Tecnologias & <span className="gradient-text">Ferramentas</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              As ferramentas que uso diariamente para transformar ideias em produtos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="font-display font-semibold mb-4 text-primary">
                  {stack.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// Soft Skills</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Além do <span className="gradient-text">Código</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Habilidades que fazem a diferença na entrega de projetos de sucesso
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 text-center glass-hover"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                  <skill.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// Jornada</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Minha <span className="gradient-text">Evolução</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0 border-l border-border"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary glow-sm" />
                <span className="text-primary font-mono text-sm">{item.year}</span>
                <h3 className="font-display font-semibold text-lg mt-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Pronto para <span className="gradient-text">conversar</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Se você tem um projeto em mente ou quer apenas bater um papo sobre 
              tecnologia, ficarei feliz em ouvir.
            </p>
            <Button size="lg" className="glow" asChild>
              <Link to="/contact">
                Entrar em contato
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
