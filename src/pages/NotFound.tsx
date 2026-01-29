import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-8xl sm:text-9xl font-bold gradient-text mb-4">
            404
          </h1>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
            Página não encontrada
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Parece que você se perdeu. A página que você está procurando não existe ou foi movida.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="glow-sm" asChild>
              <Link to="/">
                <Home className="mr-2" size={18} />
                Ir para Home
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2" size={18} />
              Voltar
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
