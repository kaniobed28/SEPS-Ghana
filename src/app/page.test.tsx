import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';

describe('Home Page', () => {
  it('renders the hero section with the main heading', () => {
    render(<Home />);
    
    // Check for main heading
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    
    // Check for some text in the heading
    expect(heading).toHaveTextContent(/Ghana's Future in/i);
    expect(heading).toHaveTextContent(/Space Science/i);
    
    // Check for Call to Action buttons
    const cta = screen.getByText(/Join the Community/i);
    expect(cta).toBeInTheDocument();
  });
  
  it('renders the directorates section', () => {
    render(<Home />);
    
    const directorateTitle = screen.getByText(/Academic & Research Directorates/i);
    expect(directorateTitle).toBeInTheDocument();
  });
});
