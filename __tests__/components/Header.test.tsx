import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '../../src/components/header'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...props}>{children}</div>
    ),
    nav: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <nav {...props}>{children}</nav>
    ),
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}))

describe('Header component', () => {
  it('should render the header', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should display the Post 64 wordmark', () => {
    render(<Header />)
    expect(screen.getByLabelText('American Legion Post 64 — Home')).toBeInTheDocument()
    expect(screen.getByText('American Legion')).toBeInTheDocument()
    expect(screen.getByText('Post 64 · Ahwatukee')).toBeInTheDocument()
  })

  it('should display Home navigation link', () => {
    render(<Header />)
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThan(0)
  })

  it('should expose About, Leadership, and Donate routes', () => {
    render(<Header />)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Leadership').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Donate').length).toBeGreaterThan(0)
  })

  it('should expose News, Calendar, Contact, and Members routes', () => {
    render(<Header />)
    expect(screen.getAllByText('News').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Calendar').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Members').length).toBeGreaterThan(0)
  })

  it('should have a mobile menu button', () => {
    render(<Header />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
