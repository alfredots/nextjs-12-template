import { render, screen } from '@testing-library/react'

import { TestDog } from '.'

describe('<TestDog />', () => {
  it('should render the heading', () => {
    const { container } = render(<TestDog />)

    expect(
      screen.getByRole('heading', { name: /TestDog/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
