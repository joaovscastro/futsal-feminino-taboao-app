import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

export default function LoadNews() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={130}
      viewBox="0 0 400 130"
      backgroundColor="#D9D9D9"
      foregroundColor="#CACBCC"
    >
      <Rect x="120" y="22" rx="3" ry="3" width="120" height="6" />
      <Rect x="0" y="10" rx="8" ry="8" width="100" height="100" />
      <Rect x="228" y="157" rx="0" ry="0" width="0" height="20" />
      <Rect x="121" y="41" rx="3" ry="3" width="111" height="6" />
    </ContentLoader>
  );
}
