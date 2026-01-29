import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ui/project-card';
import { projects } from '@/data/projects';

export function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">// Projetos em destaque</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Soluções que resolvem{' '}
            <span className="gradient-text">problemas reais</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada projeto é uma oportunidade de criar algo que realmente faz a diferença.
            Do problema à solução, do código ao produto.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group" asChild>
            <Link to="/projects">
              Ver todos os projetos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
