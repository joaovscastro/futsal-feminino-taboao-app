import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

export default function LoadJogo() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={150}
      viewBox="0 0 400 150"
      backgroundColor="#D9D9D9"
      foregroundColor="#CACBCC"
    >
      <Rect x="0" y="0" rx="8" ry="8" width="389" height="149" />
    </ContentLoader>
  );
}
