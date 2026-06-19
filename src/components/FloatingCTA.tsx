'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [copied, setCopied] = useState(false);
  const email = "parth.bhanushali241@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 100, display: 'flex', alignItems: 'center' }}>
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: -16, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            style={{
              position: 'absolute',
              right: '100%',
              backgroundColor: '#1A0A00',
              color: '#F2A96B',
              padding: '10px 16px',
              borderRadius: '8px',
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              pointerEvents: 'none'
            }}
          >
            Email Copied!
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        onClick={handleCopy}
        className="floating-cta" 
        aria-label="Copy Email"
        title="Copy Email to Clipboard"
        initial={{ scale: 0, opacity: 0, rotate: -90 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20, 
          delay: 0.5 
        }}
        style={{
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          position: 'relative', /* overrides the fixed from CSS so the container can be fixed */
          bottom: 'auto',
          right: 'auto'
        }}
      >
        {copied ? (
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '34px', height: '34px', color: 'var(--bg-color)', fill: 'none' }}>
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        )}
      </motion.button>
    </div>
  );
}
