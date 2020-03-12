import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

export default function LoadElenco() {
  return (
    <ContentLoader
      speed={2}
      width={600}
      height={150}
      viewBox="0 0 600 150"
      backgroundColor="#D0132C"
      foregroundColor="#F16376"
    >
      <Rect x="20" y="0" rx="10" ry="10" width="182" height="154" />
      <Rect x="222" y="0" rx="10" ry="10" width="182" height="154" />
      <Rect x="422" y="0" rx="10" ry="10" width="182" height="154" />
    </ContentLoader>
  );
}
