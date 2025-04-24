// components/BackgroundLoader.tsx
"use client";

import { useEffect } from 'react';

export default function BackgroundLoader() {
  useEffect(() => {
    const img = new Image();
    img.src = '/holograph.avif';
    img.onload = () => {
      const overlay = document.getElementById('bg-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
      }
      document.body.style.backgroundColor = 'transparent';
    };
  }, []);

  return null;
}