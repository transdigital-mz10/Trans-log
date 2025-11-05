import React, { Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Main Sections
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import { PartnerOfferings } from './components/PartnerOfferings';
import PartnerProducts from './components/PartnerProducts';
import { PartnerLogos } from './components/PartnerLogos';
import Contact from './components/Contact';
import Features from './components/Features';
import Showcase from './components/Showcase';

// A simple loading component
function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading application...</p>
      </div>
    </div>
  );
}

// Error boundary component
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error('Error in component:', error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-6">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              We're sorry, but we encountered an error while loading the page. 
              Please try refreshing the page or contact support if the problem persists.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function AppContent() {
  const { ready } = useTranslation();
  
  if (!ready) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Products />
        <PartnerOfferings />
        <PartnerProducts />
        <PartnerLogos />
        <Features />
        <Showcase />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

const App = () => {
  const [i18nReady, setI18nReady] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log('App: Component mounted');
    
    try {
      const timer = setTimeout(() => {
        console.log('App: i18n should be ready');
        setI18nReady(true);
      }, 1000);
      
      return () => {
        console.log('App: Cleaning up');
        clearTimeout(timer);
      };
    } catch (err) {
      console.error('App: Error in useEffect', err);
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    }
  }, []);

  if (error) {
    console.error('App: Error state', error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Application Error</h2>
          <p className="text-gray-600 mb-4">{error.message}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  if (!i18nReady) {
    console.log('App: Not ready yet, showing loading');
    return <Loading />;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <AppContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;