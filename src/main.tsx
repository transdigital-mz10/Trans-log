import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';


// Error boundary for the root component
class RootErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    console.error('RootErrorBoundary caught an error:', error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('RootErrorBoundary error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'sans-serif'
        }}>
          <h1 style={{ color: '#ef4444', fontSize: '1.5rem', marginBottom: '1rem' }}>
            Something went wrong
          </h1>
          <p style={{ marginBottom: '1.5rem', color: '#4b5563' }}>
            The application failed to load. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer'
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Initialize i18n with error handling
try {
  import('./lib/i18n').then(() => {
    console.log('main.tsx: i18n initialized successfully');
  }).catch(error => {
    console.error('main.tsx: Failed to initialize i18n:', error);
  });
} catch (error) {
  console.error('main.tsx: Error during i18n import:', error);
}

// Render the app
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

// Wrap the app in a try-catch to catch any rendering errors
try {
  console.log('main.tsx: Rendering application...');
  root.render(
    <StrictMode>
      <RootErrorBoundary>
        <App />
      </RootErrorBoundary>
    </StrictMode>
  );
} catch (error) {
  console.error('main.tsx: Failed to render application:', error);
  
  // Show error UI if rendering fails
  root.render(
    <div style={{
      padding: '2rem',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#ef4444' }}>Application Error</h1>
      <p style={{ margin: '1rem 0' }}>Failed to render the application.</p>
      <pre style={{
        backgroundColor: '#f3f4f6',
        padding: '1rem',
        borderRadius: '0.375rem',
        overflowX: 'auto',
        textAlign: 'left',
        fontSize: '0.875rem'
      }}>
        {error instanceof Error ? error.message : String(error)}
      </pre>
      <button
        onClick={() => window.location.reload()}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer'
        }}
      >
        Try Again
      </button>
    </div>
  );
}
