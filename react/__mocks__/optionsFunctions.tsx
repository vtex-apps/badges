import React from 'react'

export const optionsFunctions = jest.fn()

optionsFunctions.mockReturnValue({
  categoryId: {
    label: 'Catergory',
    verbs: [
      {
        label: 'Equal',
        value: '=',
        object: () => <div>Category</div>,
      },
    ],
  },
})
