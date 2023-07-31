import { Provider } from 'react-redux'
import { describe, it, expect } from 'vitest'

import { render, screen } from '@testing-library/react'
import CounterPage from './counterPage'
import { store } from '@/store/store'

describe('Counter Page', () => {
   it('render components', () => {
      render(
         <Provider store={store}>
            <CounterPage />
         </Provider>,
      )
      expect(screen.getByTestId('incrementBtn')).toBeInTheDocument()
   })
})
