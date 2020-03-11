import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

export default function LoadNews() {
  return (
    <ContentLoader
      speed={2}
      width={500}
      height={203}
      viewBox="0 0 500 203"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <Rect x="20" y="154" rx="3" ry="3" width="117" height="4" />
      <Rect x="20" y="0" rx="8" ry="8" width="146" height="146" />
      <Rect x="186" y="0" rx="8" ry="8" width="146" height="146" />
      <Rect x="352" y="0" rx="8" ry="8" width="146" height="146" />
      <Rect x="186" y="154" rx="3" ry="3" width="117" height="4" />
      <Rect x="352" y="154" rx="3" ry="3" width="117" height="4" />
      <Rect x="20" y="165" rx="3" ry="3" width="83" height="4" />
      <Rect x="186" y="165" rx="3" ry="3" width="83" height="4" />
      <Rect x="352" y="165" rx="3" ry="3" width="83" height="4" />
    </ContentLoader>
  );
}
