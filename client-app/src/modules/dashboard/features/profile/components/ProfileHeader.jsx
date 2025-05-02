import { Box, Avatar, AvatarBadge, IconButton, Text } from "@chakra-ui/react"
import { FaCamera } from "react-icons/fa"

const ProfileHeader = ({ userData }) => {
  return (
    <Box textAlign="center">
      <Avatar size="2xl" name={userData.name} src="/placeholder-user.jpg">
        <AvatarBadge
          as={IconButton}
          size="sm"
          rounded="full"
          top="-10px"
          colorScheme="blue"
          aria-label="Cambiar foto"
          icon={<FaCamera />}
        />
      </Avatar>
      <Text mt={2} fontWeight="medium">
        {userData.name}
      </Text>
      <Text fontSize="sm" color="text.secondary">
        Cliente desde 2022
      </Text>
    </Box>
  )
}

export default ProfileHeader
