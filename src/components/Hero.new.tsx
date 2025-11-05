import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-bg.jpg"
          alt="Industrial equipment and technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <motion.div 
        className="container relative z-10 text-center text-white px-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
        }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          variants={fadeInUp}
        >
          {t('hero.title.line1', 'Industrial Solutions for a')} <span className="text-blue-400">
            {t('hero.title.line2', 'Connected World')}
          </span>
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          variants={fadeInUp}
        >
          {t('hero.subtitle', 'Discover our range of high-quality industrial equipment and technology solutions')}
        </motion.p>
        <motion.div variants={fadeInUp}>
          <a 
            href="#products"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-all font-medium text-lg group"
          >
            {t('hero.cta.explore', 'Explore Products')}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
