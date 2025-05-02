import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from "@chakra-ui/react"
import { FiChevronRight } from "react-icons/fi"
import { Link as RouterLink } from "react-router-dom"
import ContactForm from "../components/ContactForm"
import ContactInfo from "../components/ContactInfo"

const ContactPage = () => {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const textColor = useColorModeValue("gray.800", "white")

  return (
    <Container maxW="1400px" px={{ base: 4, md: 6 }} py={8}>
      {/* Breadcrumbs */}
      <Breadcrumb separator={<FiChevronRight color="gray.500" />} mb={6} fontSize="sm" color={textColor}>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/">
            Inicio
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Contacto</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {/* Page Title */}
      <Box textAlign="center" mb={10}>
        <Heading size="xl" mb={4}>
          Contáctanos
        </Heading>
        <Text fontSize="lg" maxW="700px" mx="auto">
          Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
        </Text>
      </Box>

      {/* Contact Content */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10}>
        {/* Contact Form */}
        <GridItem>
          <Box p={6} borderWidth="1px" borderRadius="lg" borderColor={borderColor} bg={bgColor}>
            <Heading size="md" mb={6}>
              Envíanos un mensaje
            </Heading>
            <ContactForm />
          </Box>
        </GridItem>

        {/* Contact Info */}
        <GridItem>
          <Box p={6} borderWidth="1px" borderRadius="lg" borderColor={borderColor} bg={bgColor}>
            <ContactInfo />
          </Box>

          {/* Map */}
          <Box
            mt={6}
            borderWidth="1px"
            borderRadius="lg"
            borderColor={borderColor}
            bg={bgColor}
            h="300px"
            position="relative"
            overflow="hidden"
          >
            <Box
              as="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8861990088783!2d-58.38414532346177!3d-34.60373887295426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac630121623%3A0x53386f2ac88991a9!2sAv.%20Corrientes%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1682452221121!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default ContactPage
