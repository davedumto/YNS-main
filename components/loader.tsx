// components/ui/NavigationLoader.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useNavigationLoader } from '@/app/hooks/useNavigation';

const NavigationLoader = () => {
  const { isLoading } = useNavigationLoader();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-dark-green"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          exit={{ scaleX: 1, opacity: 0 }}
          transition={{ 
            duration: 1.2,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: 'left' }}
        />
      )}
    </AnimatePresence>
  );
};

export default NavigationLoader;