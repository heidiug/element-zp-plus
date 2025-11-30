export type AlertType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export interface AlertProps {
  title?: string
  type?: AlertType
  description?: string
  closable?: boolean
  showIcon?: boolean
  icon?: string
  effect?: 'light' | 'dark'
  open?: (value: boolean) => void
  close?: (value: boolean) => void
}