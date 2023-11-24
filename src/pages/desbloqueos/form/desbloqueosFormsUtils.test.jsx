import {
  it, describe, expect,
  // eslint-disable-next-line import/no-extraneous-dependencies
} from '@jest/globals';
import { formatForOptions } from './desbloqueosFormUtils';

const mockCountries = [
  {

    id: 1146,
    name: 'Argentina',

  },
  {
    id: 1932,
    name: 'Canada',
  },
  {
    id: 1937,
    name: 'China',
  },
];

const mockFormattedCountries = [
  {

    value: 1146,
    text: 'Argentina',

  },
  {
    value: 1932,
    text: 'Canada',
  },
  {
    value: 1937,
    text: 'China',
  },
];

describe('formatForOptions', () => {
  it('Returns correctly formatted countries array', () => {
    const formattedCountries = formatForOptions(mockCountries);

    expect(formattedCountries).toMatchObject(mockFormattedCountries);
  });
});