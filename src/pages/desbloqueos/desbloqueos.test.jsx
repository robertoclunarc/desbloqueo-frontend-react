import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {
  it, afterEach, describe,
// eslint-disable-next-line import/no-extraneous-dependencies
} from '@jest/globals';

import Desbloqueos from './Desbloqueos';

describe('Desbloqueos', () => {
  afterEach(() => cleanup());
  it('renders with or without content', () => {
    render(<Desbloqueos />);
  });
});