import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { SkillsSection } from '@/components/home/SkillsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
