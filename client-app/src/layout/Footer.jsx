import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react"
import {
  FiCreditCard,
  FiTruck,
  FiShield,
  FiHelpCircle,
  FiSend,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi"

const FooterLink = ({ children, ...props }) => (
  <Text
    as="a"
    href="#"
    fontSize="sm"
    color={useColorModeValue("gray.600", "gray.400")}
    _hover={{
      color: useColorModeValue("brand.primary.500", "brand.primary.300"),
      textDecoration: "none"
    }}
    transition="color 0.2s"
    {...props}
  >
    {children}
  </Text>
)

const InfoCard = ({ icon: IconComponent, title, description }) => (
  <Flex align="center">
    <Icon 
      as={IconComponent} 
      w={10} 
      h={10} 
      color={useColorModeValue("brand.primary.500", "brand.primary.300")} 
      mr={3} 
    />
    <Box>
      <Heading 
        size="sm" 
        color={useColorModeValue("gray.800", "white")}
      >
        {title}
      </Heading>
      <Text fontSize="sm">{description}</Text>
    </Box>
  </Flex>
)

const Footer = () => {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 4 })
  
  // Color mode values
  const bgColor = useColorModeValue("gray.50", "gray.900")
  const textColor = useColorModeValue("gray.700", "gray.200")
  const headingColor = useColorModeValue("gray.800", "white")
  const dividerColor = useColorModeValue("gray.200", "gray.700")
  const inputBg = useColorModeValue("white", "gray.800")
  const btnBgColor = useColorModeValue("brand.primary.500", "brand.primary.400")

  const infoCards = [
    {
      icon: FiCreditCard,
      title: "Paga con tarjeta o efectivo",
      description: "Cuotas sin interés con tarjetas bancarias"
    },
    {
      icon: FiTruck,
      title: "Envío gratis desde $15.000",
      description: "Entregas a todo el país"
    },
    {
      icon: FiShield,
      title: "Seguridad de principio a fin",
      description: "Tus datos siempre protegidos"
    },
    {
      icon: FiHelpCircle,
      title: "Soporte 24/7",
      description: "Estamos para ayudarte"
    }
  ]

  const socialIcons = [FiFacebook, FiTwitter, FiInstagram, FiYoutube]

  return (
    <Box bg={bgColor} color={textColor} mt={10}>
      <Container maxW="container.xl" py={10}>
        {/* Payment and Shipping Info */}
        <SimpleGrid columns={columns} spacing={8} mb={10}>
          {infoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </SimpleGrid>

        <Divider mb={10} borderColor={dividerColor} />

        {/* Main Footer Links */}
        <SimpleGrid columns={columns} spacing={8} mb={10}>
          <Stack align="flex-start">
            <Heading size="sm" mb={3} color={headingColor}>
              Acerca de EcoMarket
            </Heading>
            <FooterLink>Quiénes somos</FooterLink>
            <FooterLink>Sustentabilidad</FooterLink>
            <FooterLink>Términos y condiciones</FooterLink>
            <FooterLink>Privacidad</FooterLink>
            <FooterLink>Defensa del consumidor</FooterLink>
          </Stack>

          <Stack align="flex-start">
            <Heading size="sm" mb={3} color={headingColor}>
              Cómo comprar
            </Heading>
            <FooterLink>Cómo comprar</FooterLink>
            <FooterLink>Costos y tiempos de envío</FooterLink>
            <FooterLink>Garantías</FooterLink>
            <FooterLink>Medios de pago</FooterLink>
            <FooterLink>Ayuda</FooterLink>
          </Stack>

          <Stack align="flex-start">
            <Heading size="sm" mb={3} color={headingColor}>
              Vender en EcoMarket
            </Heading>
            <FooterLink>Cómo vender</FooterLink>
            <FooterLink>Planes de venta</FooterLink>
            <FooterLink>Herramientas para vendedores</FooterLink>
            <FooterLink>Programa de protección</FooterLink>
            <FooterLink>Reglas de publicación</FooterLink>
          </Stack>

          <Stack align="flex-start">
            <Heading size="sm" mb={3} color={headingColor}>
              Suscríbete al newsletter
            </Heading>
            <Text fontSize="sm" mb={2}>
              Recibe ofertas y novedades en tu correo
            </Text>
            <InputGroup size="md">
              <Input 
                pr="4.5rem" 
                placeholder="Tu email" 
                bg={inputBg}
                borderColor={dividerColor}
                _hover={{ borderColor: "brand.primary.400" }}
                _focus={{ 
                  borderColor: "brand.primary.500",
                  boxShadow: `0 0 0 1px ${btnBgColor}`
                }}
              />
              <InputRightElement width="4.5rem">
                <Button 
                  h="1.75rem" 
                  size="sm" 
                  bg={btnBgColor}
                  _hover={{ bg: "brand.primary.600" }}
                  color="white"
                >
                  <Icon as={FiSend} />
                </Button>
              </InputRightElement>
            </InputGroup>

            <Heading size="sm" mt={4} mb={2} color={headingColor}>
              Síguenos
            </Heading>
            <Flex>
              {socialIcons.map((SocialIcon, index) => (
                <Icon
                  key={index}
                  as={SocialIcon}
                  w={6}
                  h={6}
                  mr={index < socialIcons.length - 1 ? 3 : 0}
                  cursor="pointer"
                  color={useColorModeValue("gray.600", "gray.400")}
                  _hover={{ 
                    color: useColorModeValue("brand.primary.500", "brand.primary.300") 
                  }}
                  transition="color 0.2s"
                />
              ))}
            </Flex>
          </Stack>
        </SimpleGrid>

        <Divider mb={6} borderColor={dividerColor} />

        {/* Copyright */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-start" }}
        >
          <Box mb={{ base: 4, md: 0 }}>
            <Image 
              src="/logo.svg" 
              alt="EcoMarket Logo" 
              h="50px" 
              mb={2}
              filter={useColorModeValue("none", "brightness(0) invert(1)")}
            />
            <Text fontSize="sm">© 2024 EcoMarket. Todos los derechos reservados.</Text>
          </Box>
          <Image 
            src="/Webpay.svg" 
            alt="Métodos de Pago" 
            h="70"
            filter={useColorModeValue("none", "brightness(0) invert(1)")}
          />
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer