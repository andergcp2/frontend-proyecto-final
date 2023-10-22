
import { ButtonProps } from '@mui/material'
import { LoadingButton } from '@mui/lab'

interface MyBtnProps {
  loading?: boolean
}

const Button = (props: ButtonProps & MyBtnProps) => {
  return (
    <LoadingButton {...props} >
      {props.children}
    </LoadingButton>
  )
}

export default Button
