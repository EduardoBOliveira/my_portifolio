import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Palette, Zap, Shield } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend',
    description: 'React, TypeScript, Next.js, TailwindCSS, ViteJs',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Database,
    title: 'Backend',
    description: 'Node.js, Python, PostgreSQL, Java, SQL, JavaScript',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Vercel, GitHub Actions',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Figma, UI/UX, Design Systems',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Otimização, Caching, Lazy Loading',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Segurança',
    description: 'Auth, Encryption, Best Practices',
    color: 'from-slate-500 to-zinc-500',
  },
];

export function SkillsSection() {
  return (
    <section className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// Stack & Expertise</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Tecnologias que{' '}
            <span className="gradient-text">domino</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ferramentas e tecnologias que uso para transformar ideias em produtos reais.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl p-6 glass-hover"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4`}>
                <skill.icon size={24} className="text-white" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
