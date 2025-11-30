export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  disabled?: boolean
  round?: boolean
  circle?: boolean
  nativeType?: 'button' | 'submit' | 'reset'
  autofocus?: boolean
  text?: boolean
  icon?: string
  loading?: boolean
}

export interface ButtonInstance {
  buttonRef: HTMLButtonElement
}
