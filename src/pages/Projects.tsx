import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { ProjectCard } from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { projects, categories } from '@/data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const allTechnologies = [...new Set(projects.flatMap((p) => p.technologies))];

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = activeCategory === 'Todos' || project.category === activeCategory;
    const techMatch = !activeTech || project.technologies.includes(activeTech);
    return categoryMatch && techMatch;
  });

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
            className="max-w-3xl"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// Projetos</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Soluções que{' '}
              <span className="gradient-text">transformam</span>
              <br />
              ideias em realidade
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Cada projeto conta uma história — do problema identificado à solução implementada. 
              Explore e descubra como abordo desafios técnicos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 border-b border-border">
        <div className="container mx-auto px-6">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? 'glow-sm' : ''}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            <span className="text-sm text-muted-foreground mr-2 self-center">Filtrar por tech:</span>
            {allTechnologies.slice(0, 8).map((tech) => (
              <Button
                key={tech}
                variant={activeTech === tech ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setActiveTech(activeTech === tech ? null : tech)}
                className="text-xs"
              >
                {tech}
              </Button>
            ))}
            {activeTech && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveTech(null)}
                className="text-xs text-muted-foreground"
              >
                Limpar
              </Button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                Nenhum projeto encontrado com os filtros selecionados.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setActiveCategory('Todos');
                  setActiveTech(null);
                }}
              >
                Limpar filtros
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
