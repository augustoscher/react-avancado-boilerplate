import { render, screen } from '@testing-library/react'

import Main from './index'

describe('<Main />', () => {
  it('match snapshot', () => {
    const { container } = render(<Main />)
    expect(container).toMatchSnapshot()
  })

  it('shoule render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
