import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const statusColors = {
    completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'in-progress': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    concept: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  };

  const statusLabels = {
    completed: 'Finalizado',
    'in-progress': 'Em desenvolvimento',
    concept: 'Conceito',
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link to={`/projects/${project.id}`} className="block">
        <div className="glass rounded-2xl overflow-hidden hover-lift glass-hover">
          {/* Thumbnail */}
          <div className="aspect-video relative overflow-hidden bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="font-display font-bold text-primary text-2xl">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <ArrowUpRight className="text-primary-foreground" size={24} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <Badge variant="outline" className={`mb-2 ${statusColors[project.status]}`}>
                  {statusLabels[project.status]}
                </Badge>
                <h3 className="font-display font-semibold text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
            </div>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs font-normal">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="secondary" className="text-xs font-normal">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={14} />
                  Código
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={14} />
                  Demo
                </a>
              )}
              <span className="ml-auto text-xs text-primary font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Ver detalhes
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
