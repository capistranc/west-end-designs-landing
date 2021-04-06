import React from 'react'
import {
    useColorMode,
    Button,
    Flex,
    Box
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

import Header from './Header'

const Container = ({ children }) => {
  const { colorMode } = useColorMode()

  const bgColor = {
      light: 'white',
      dark: '#171717'
  }

  const color = {
      light: 'black',
      dark: 'white'
  }



  return (
      <>
          <Header />
          <Flex
              as="main"
              justifyContent="center"
              flexDirection="column"
              bg={bgColor[colorMode]}
              color={color[colorMode]}
              px={[0, 4, 4]}
              mt={[4, 8, 8]}
          >
              {children}
          </Flex>
      </>
  )
}

export default Container