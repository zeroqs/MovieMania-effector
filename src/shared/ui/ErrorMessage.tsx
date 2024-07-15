import { Alert, Center } from '@mantine/core'
import { IconExclamationCircle } from '@tabler/icons-react'

interface ErrorProps {
  message: string
}

export const ErrorMessage = ({ message }: ErrorProps) => {
  return (
    <Center>
      <Alert
        variant="light"
        color="blue"
        title="Unexpected error"
        icon={<IconExclamationCircle />}
      >
        {message}
      </Alert>
    </Center>
  )
}
