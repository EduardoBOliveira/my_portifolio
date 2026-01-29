import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex p-4 rounded-2xl glass mb-8">
            <Mail size={32} className="text-primary" />
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Vamos construir algo{' '}
            <span className="gradient-text">incrível</span> juntos?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Estou sempre aberto a discutir novos projetos, ideias criativas 
            ou oportunidades de fazer parte da sua visão.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="glow group" asChild>
              <Link to="/contact">
                Entrar em contato
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:edubezerra_oliveira@hotmail.com">
                edubezerra_oliveira@hotmail.com
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
