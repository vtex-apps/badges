import { createContext } from 'react'

export { default as Alert } from '@vtex/styleguide/lib/Alert'
export { default as ButtonGroup } from '@vtex/styleguide/lib/ButtonGroup'
export { default as Button } from '@vtex/styleguide/lib/Button'
export { default as Card } from '@vtex/styleguide/lib/Card'
export { default as Conditions } from '@vtex/styleguide/lib/Conditions'
export { default as Dropzone } from '@vtex/styleguide/lib/Dropzone'
export { default as Divider } from '@vtex/styleguide/lib/Divider'
export { default as Input } from '@vtex/styleguide/lib/Input'
export { default as Modal } from '@vtex/styleguide/lib/Modal'
export { default as Textarea } from '@vtex/styleguide/lib/Textarea'
export { default as Table } from '@vtex/styleguide/lib/Table'
export { default as AutocompleteInput } from '@vtex/styleguide/lib/AutocompleteInput'
export { default as Tabs } from '@vtex/styleguide/lib/Tabs'
export { default as Tab } from '@vtex/styleguide/lib/Tab'
export { default as ToastProvider } from '@vtex/styleguide/lib/ToastProvider'
export { default as Layout } from '@vtex/styleguide/lib/Layout'
export { default as PageBlock } from '@vtex/styleguide/lib/PageBlock'
// export { default as ToastContext } from '@vtex/styleguide/lib/ToastProvider'

// Deixar comentario
export const ToastContext = createContext({
  showToast: jest.fn(),
})
