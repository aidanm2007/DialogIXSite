import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PricingTable } from '../components/PricingTable';

describe('PricingTable', () => {
  it('renders tier names', () => {
    render(<PricingTable />);
    expect(screen.getByText('Launch')).toBeInTheDocument();
    expect(screen.getByText('Growth')).toBeInTheDocument();
    expect(screen.getByText('Scale')).toBeInTheDocument();
  });
});
