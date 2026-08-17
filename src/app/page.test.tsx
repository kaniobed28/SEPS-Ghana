import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Page', () => {
  it('renders the hero section with the main heading', () => {
    render(<Home />);
    
    // Check for main heading
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    
    // Check for some text in the heading
    expect(heading).toHaveTextContent(/To the/i);
    expect(heading).toHaveTextContent(/Cosmos/i);
    
    // Check for Call to Action buttons
    const cta = screen.getByText(/Discover Our Mission/i);
    expect(cta).toBeInTheDocument();
  });
  
  it('renders the directorates section', () => {
    render(<Home />);
    
    const directorateTitle = screen.getByText(/Academic & Research/i);
    expect(directorateTitle).toBeInTheDocument();
  });
});
