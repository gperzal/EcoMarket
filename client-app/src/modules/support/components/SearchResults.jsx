import { Box, VStack, Text, Heading, Link, Icon, Divider } from "@chakra-ui/react"
import { FiFileText, FiArrowRight } from "react-icons/fi"
import { Link as RouterLink } from "react-router-dom"

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return (
      <Box textAlign="center" py={8}>
        <Text>No se encontraron resultados para tu búsqueda.</Text>
      </Box>
    )
  }

  return (
    <VStack spacing={4} align="stretch" divider={<Divider />}>
      {results.map((result, index) => (
        <Box key={index} p={4}>
          <Heading size="sm" mb={2}>
            <Link as={RouterLink} to={result.url} color="blue.500">
              {result.title}
            </Link>
          </Heading>
          <Text fontSize="sm" mb={3} noOfLines={2}>
            {result.excerpt}
          </Text>
          <Link as={RouterLink} to={result.url} color="blue.500" fontSize="sm" display="flex" alignItems="center">
            <Icon as={FiFileText} mr={1} />
            Leer más <Icon as={FiArrowRight} ml={1} />
          </Link>
        </Box>
      ))}
    </VStack>
  )
}

export default SearchResults
