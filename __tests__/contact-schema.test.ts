import { describe, it, expect } from 'vitest';
import { contactSchemaForTest } from '../components/ContactForm';

describe('contact schema', () => {
  it('accepts valid payload', () => {
    const input = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      company: 'Acme',
      useCase: 'Demo requests',
      budget: '$2k/mo',
      timeline: 'Q4',
      message: 'We want to automate qualification.'
    };
    const res = contactSchemaForTest.safeParse(input);
    expect(res.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const res = contactSchemaForTest.safeParse({
      name: 'J',
      email: 'nope',
      company: '',
      useCase: '',
      budget: '',
      timeline: '',
      message: 'short'
    });
    expect(res.success).toBe(false);
  });
});
