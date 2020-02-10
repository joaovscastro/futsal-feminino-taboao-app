import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

export default function LoadElenco() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={95}
      viewBox="0 0 400 95"
      backgroundColor="#D9D9D9"
      foregroundColor="#CACBCC"
    >
      <Rect x="0" y="0" rx="40" ry="40" width="80" height="80" />
      <Rect x="22" y="87" rx="3" ry="3" width="34" height="7" />
      <Rect x="92" y="-1" rx="40" ry="40" width="80" height="80" />
      <Rect x="114" y="86" rx="3" ry="3" width="34" height="7" />
      <Rect x="184" y="-1" rx="40" ry="40" width="80" height="80" />
      <Rect x="206" y="86" rx="3" ry="3" width="34" height="7" />
      <Rect x="275" y="-2" rx="40" ry="40" width="80" height="80" />
      <Rect x="297" y="85" rx="3" ry="3" width="34" height="7" />
      <Rect x="365" y="-1" rx="40" ry="40" width="80" height="80" />
      <Rect x="387" y="86" rx="3" ry="3" width="34" height="7" />
    </ContentLoader>
  );
}
