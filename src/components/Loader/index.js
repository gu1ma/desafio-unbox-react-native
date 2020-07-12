import React from 'react';

import { LoaderContainer } from './styles';

export default function Loader({ size = 'large' }) {
  return <LoaderContainer size={size} />;
}
