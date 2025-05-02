import { VStack, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import { FaHistory } from "react-icons/fa"

const ActivityHistory = ({ activities }) => {
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <VStack spacing={4} align="stretch">
      {activities.map((activity) => (
        <Box key={activity.id} p={4} borderWidth="1px" borderRadius="md" borderColor={borderColor}>
          <Flex align="center">
            <Box fontSize="xl" color="brand.primary.500" mr={3}>
              <FaHistory />
            </Box>
            <Box flex="1">
              <Text fontWeight="bold">{activity.action}</Text>
              {activity.details && <Text fontSize="sm">{activity.details}</Text>}
              <Text fontSize="xs" color="text.secondary">
                {activity.date}
              </Text>
            </Box>
          </Flex>
        </Box>
      ))}
    </VStack>
  )
}

export default ActivityHistory
