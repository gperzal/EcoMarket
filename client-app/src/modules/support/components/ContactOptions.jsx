import { Box, Heading, Text, Button, Icon, VStack, useColorModeValue, Container, Grid, Flex } from "@chakra-ui/react"
import { FiMail, FiMessageSquare, FiPhone, FiHelpCircle } from "react-icons/fi"
import { Link as RouterLink } from "react-router-dom"

const ContactOptions = () => {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const headingColor = useColorModeValue("gray.700", "white")
  const boxShadow = useColorModeValue("sm", "md")

  const options = [
    {
      title: "Envíanos un email",
      description: "Responderemos a tu consulta en un plazo de 24 horas.",
      icon: FiMail,
      action: "Enviar email",
      link: "/contact",
    },
    {
      title: "Chat en vivo",
      description: "Habla con un agente de soporte en tiempo real.",
      icon: FiMessageSquare,
      action: "Iniciar chat",
      link: "#",
    },
    {
      title: "Llámanos",
      description: "Disponible de lunes a viernes de 9:00 a 18:00.",
      icon: FiPhone,
      action: "Ver teléfonos",
      link: "/contact",
    },
    {
      title: "Centro de ayuda",
      description: "Encuentra respuestas a las preguntas más frecuentes.",
      icon: FiHelpCircle,
      action: "Ver FAQs",
      link: "/support/faq",
    },
  ]

  return (
    <Container maxW="container.xl" py={10}>
      <Box textAlign="center" mb={8}>
        <Heading as="h2" size="xl" color={headingColor} mb={4}>
          ¿Cómo podemos ayudarte?
        </Heading>
        <Text fontSize="lg" maxW="2xl" mx="auto" color="gray.500">
          Estamos aquí para resolver tus dudas y brindarte la mejor atención. Elige la opción que prefieras.
        </Text>
      </Box>

      <Flex justify="center" align="center">
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
          width={{ base: "100%", md: "80%", lg: "70%" }}
        >
          {options.map((option, index) => (
            <Box
              key={index}
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={borderColor}
              bg={bgColor}
              textAlign="center"
              boxShadow={boxShadow}
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "md",
                borderColor: "blue.300",
              }}
            >
              <VStack spacing={4}>
                <Icon as={option.icon} boxSize={12} color="blue.500" p={2} bg="blue.50" borderRadius="full" />
                <Heading size="md">{option.title}</Heading>
                <Text color="gray.500">{option.description}</Text>
                <Button as={RouterLink} to={option.link} colorScheme="blue" width="full" size="lg" borderRadius="md">
                  {option.action}
                </Button>
              </VStack>
            </Box>
          ))}
        </Grid>
      </Flex>
    </Container>
  )
}

export default ContactOptions
