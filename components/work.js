import NextLink from 'next/next'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/projects">
      <Link>Projects</Link>
    </NextLink>
  </Box>
)
