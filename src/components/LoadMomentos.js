import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

export default function LoadMomentos() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#D9D9D9"
      foregroundColor="#CACBCC"
    >
      <Rect x="0" y="0" rx="8" ry="8" width="240" height="140" />
      <Rect x="259" y="-1" rx="8" ry="8" width="240" height="140" />
      <Rect x="0" y="148" rx="3" ry="3" width="158" height="9" />
      <Rect x="261" y="148" rx="3" ry="3" width="142" height="9" />
    </ContentLoader>
  );
}
