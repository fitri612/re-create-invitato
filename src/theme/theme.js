import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/newsreader'

const theme = extendTheme({
  fonts: {
    body: `'Newsreader ', sans-serif`,
  },
})

export default theme