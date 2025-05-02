import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Image,
  VStack,
  HStack,
  Icon,
  Button,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Card,
  CardBody,
  Badge,
  IconButton, // Import IconButton
} from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import {
  FaLeaf,
  FaHandshake,
  FaUsers,
  FaGlobe,
  FaShieldAlt,
  FaRecycle,
  FaArrowRight,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa"

const AboutPage = () => {
  // Colores según el tema
  const bgColor = useColorModeValue("gray.50", "gray.800")
  const cardBgColor = useColorModeValue("bg.card", "bg.card")
  const borderColor = useColorModeValue("border.default", "border.default")
  const accentColor = useColorModeValue("accent.primary", "accent.primary")
  const secondaryColor = useColorModeValue("accent.secondary", "accent.secondary")
  const textColor = useColorModeValue("text.primary", "text.primary")
  const textSecondaryColor = useColorModeValue("text.secondary", "text.secondary")

  // Datos del equipo
  const teamMembers = [
    {
      name: "María Rodríguez",
      position: "CEO & Fundadora",
      bio: "Con más de 15 años de experiencia en comercio electrónico y sostenibilidad.",
      image: "/placeholder.svg?height=150&width=150",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Carlos Mendoza",
      position: "Director de Tecnología",
      bio: "Especialista en desarrollo de plataformas de e-commerce y soluciones innovadoras.",
      image: "/placeholder.svg?height=150&width=150",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Ana Gómez",
      position: "Directora de Sostenibilidad",
      bio: "Experta en economía circular y desarrollo de productos eco-amigables.",
      image: "/placeholder.svg?height=150&width=150",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Luis Herrera",
      position: "Director de Operaciones",
      bio: "Especializado en logística sostenible y optimización de cadenas de suministro.",
      image: "/placeholder.svg?height=150&width=150",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
  ]

  // Valores de la empresa
  const values = [
    {
      title: "Sostenibilidad",
      description:
        "Promovemos prácticas comerciales que respetan el medio ambiente y contribuyen a un futuro más sostenible.",
      icon: FaLeaf,
    },
    {
      title: "Transparencia",
      description: "Creemos en la honestidad y la claridad en todas nuestras operaciones y relaciones comerciales.",
      icon: FaHandshake,
    },
    {
      title: "Comunidad",
      description:
        "Fomentamos la creación de una comunidad de vendedores y compradores comprometidos con el consumo responsable.",
      icon: FaUsers,
    },
    {
      title: "Innovación",
      description:
        "Buscamos constantemente nuevas formas de mejorar nuestra plataforma y ofrecer soluciones creativas.",
      icon: FaGlobe,
    },
    {
      title: "Seguridad",
      description: "Garantizamos la protección de datos y transacciones seguras para todos nuestros usuarios.",
      icon: FaShieldAlt,
    },
    {
      title: "Economía Circular",
      description:
        "Apoyamos modelos de negocio que maximizan el ciclo de vida de los productos y minimizan los residuos.",
      icon: FaRecycle,
    },
  ]

  // Hitos de la empresa
  const milestones = [
    {
      year: "2015",
      title: "Fundación",
      description: "EcoMarket nace como una startup con la misión de transformar el comercio electrónico.",
    },
    {
      year: "2017",
      title: "Expansión Regional",
      description: "Ampliamos nuestras operaciones a 5 países de Latinoamérica.",
    },
    {
      year: "2019",
      title: "Certificación B Corp",
      description: "Obtuvimos la certificación B Corp por nuestro compromiso con la sostenibilidad.",
    },
    {
      year: "2021",
      title: "Lanzamiento de EcoMarket 2.0",
      description: "Renovamos nuestra plataforma con nuevas funcionalidades y mejor experiencia de usuario.",
    },
    {
      year: "2023",
      title: "1 Millón de Usuarios",
      description: "Alcanzamos el hito de un millón de usuarios activos en nuestra plataforma.",
    },
  ]

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Hero Section */}
      <Box bg="brand.primary.500" color="white" py={20} position="relative" overflow="hidden">
        <Container maxW="1200px" position="relative" zIndex="1">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Nuestra Historia
              </Heading>
              <Text fontSize="xl" mb={6}>
                Transformando el comercio electrónico con un enfoque sostenible y centrado en la comunidad.
              </Text>
              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                rightIcon={<FaArrowRight />}
                bg="brand.secondary.500"
                _hover={{ bg: "brand.secondary.600" }}
                color="white"
                borderRadius="full"
              >
                Contáctanos
              </Button>
            </Box>
            <Flex justify="center">
              <Image
                src="/equipo_desarrollo.jpg?height=400&width=500"
                alt="Equipo de EcoMarket"
                borderRadius="lg"
                boxShadow="xl"
                objectFit="cover"
              />
            </Flex>
          </SimpleGrid>
        </Container>
        {/* Background overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="brand.primary.800"
          opacity="0.3"
          zIndex="0"
        />
      </Box>

      {/* Misión y Visión */}
      <Container maxW="1200px" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box
            p={8}
            borderRadius="lg"
            bg={cardBgColor}
            boxShadow="md"
            borderLeft="4px solid"
            borderColor="brand.primary.500"
          >
            <Heading as="h2" size="xl" mb={4} color={accentColor}>
              Nuestra Misión
            </Heading>
            <Text fontSize="lg" color={textColor}>
              Crear una plataforma de comercio electrónico que conecte a vendedores y compradores comprometidos con la
              sostenibilidad, ofreciendo productos y servicios que respetan el medio ambiente y promueven prácticas
              comerciales responsables.
            </Text>
          </Box>
          <Box
            p={8}
            borderRadius="lg"
            bg={cardBgColor}
            boxShadow="md"
            borderLeft="4px solid"
            borderColor="brand.secondary.500"
          >
            <Heading as="h2" size="xl" mb={4} color={secondaryColor}>
              Nuestra Visión
            </Heading>
            <Text fontSize="lg" color={textColor}>
              Ser la plataforma líder en comercio electrónico sostenible, reconocida por su impacto positivo en el medio
              ambiente y en las comunidades donde operamos, transformando la forma en que las personas compran y venden
              productos.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Estadísticas */}
      <Box bg="brand.primary.50" py={16}>
        <Container maxW="1200px">
          <Heading as="h2" size="xl" mb={10} textAlign="center" color={accentColor}>
            Nuestro Impacto
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stat bg={cardBgColor} p={6} borderRadius="lg" boxShadow="md" textAlign="center">
              <StatNumber fontSize="4xl" fontWeight="bold" color={accentColor}>
                1M+
              </StatNumber>
              <StatLabel fontSize="lg" mt={2} color={textColor}>
                Usuarios Activos
              </StatLabel>
              <StatHelpText color={textSecondaryColor}>En 10 países</StatHelpText>
            </Stat>
            <Stat bg={cardBgColor} p={6} borderRadius="lg" boxShadow="md" textAlign="center">
              <StatNumber fontSize="4xl" fontWeight="bold" color={accentColor}>
                50K+
              </StatNumber>
              <StatLabel fontSize="lg" mt={2} color={textColor}>
                Vendedores
              </StatLabel>
              <StatHelpText color={textSecondaryColor}>Emprendedores sostenibles</StatHelpText>
            </Stat>
            <Stat bg={cardBgColor} p={6} borderRadius="lg" boxShadow="md" textAlign="center">
              <StatNumber fontSize="4xl" fontWeight="bold" color={accentColor}>
                5M+
              </StatNumber>
              <StatLabel fontSize="lg" mt={2} color={textColor}>
                Productos
              </StatLabel>
              <StatHelpText color={textSecondaryColor}>Eco-amigables</StatHelpText>
            </Stat>
            <Stat bg={cardBgColor} p={6} borderRadius="lg" boxShadow="md" textAlign="center">
              <StatNumber fontSize="4xl" fontWeight="bold" color={accentColor}>
                -30%
              </StatNumber>
              <StatLabel fontSize="lg" mt={2} color={textColor}>
                Huella de Carbono
              </StatLabel>
              <StatHelpText color={textSecondaryColor}>Vs. comercio tradicional</StatHelpText>
            </Stat>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Valores */}
      <Container maxW="1200px" py={16}>
        <Heading as="h2" size="xl" mb={4} textAlign="center" color={textColor}>
          Nuestros Valores
        </Heading>
        <Text fontSize="lg" mb={10} textAlign="center" maxW="800px" mx="auto" color={textSecondaryColor}>
          Estos principios guían todas nuestras decisiones y acciones como empresa
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          {values.map((value, index) => (
            <Box
              key={index}
              p={6}
              borderRadius="lg"
              bg={cardBgColor}
              boxShadow="md"
              _hover={{ transform: "translateY(-5px)", transition: "transform 0.3s ease" }}
            >
              <Flex
                w={12}
                h={12}
                align="center"
                justify="center"
                borderRadius="full"
                bg={`brand.primary.${index % 2 ? "50" : "100"}`}
                color={accentColor}
                mb={4}
              >
                <Icon as={value.icon} boxSize={6} />
              </Flex>
              <Heading as="h3" size="md" mb={3} color={textColor}>
                {value.title}
              </Heading>
              <Text color={textSecondaryColor}>{value.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Historia y Línea de Tiempo */}
      <Box bg="brand.primary.50" py={16}>
        <Container maxW="1200px">
          <Heading as="h2" size="xl" mb={10} textAlign="center" color={textColor}>
            Nuestra Trayectoria
          </Heading>
          <VStack spacing={0} align="stretch">
            {milestones.map((milestone, index) => (
              <Flex key={index} mb={index === milestones.length - 1 ? 0 : 8}>
                <VStack align="center" minW="100px">
                  <Box
                    w={12}
                    h={12}
                    borderRadius="full"
                    bg={accentColor}
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="bold"
                    fontSize="lg"
                    boxShadow="md"
                  >
                    {milestone.year}
                  </Box>
                  {index !== milestones.length - 1 && <Box w="2px" h="100%" bg={accentColor} my={2} />}
                </VStack>
                <Box ml={6} p={6} borderRadius="lg" bg={cardBgColor} boxShadow="md" flex="1">
                  <Heading as="h3" size="md" mb={2} color={textColor}>
                    {milestone.title}
                  </Heading>
                  <Text color={textSecondaryColor}>{milestone.description}</Text>
                </Box>
              </Flex>
            ))}
          </VStack>
        </Container>
      </Box>

      {/* Equipo */}
      <Container maxW="1200px" py={16}>
        <Heading as="h2" size="xl" mb={4} textAlign="center" color={textColor}>
          Nuestro Equipo
        </Heading>
        <Text fontSize="lg" mb={10} textAlign="center" maxW="800px" mx="auto" color={textSecondaryColor}>
          Personas apasionadas que trabajan cada día para hacer de EcoMarket una plataforma mejor
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              bg={cardBgColor}
              boxShadow="md"
              borderRadius="lg"
              overflow="hidden"
              _hover={{ transform: "translateY(-5px)", transition: "transform 0.3s ease" }}
            >
              <CardBody p={0}>
                <Box position="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    w="full"
                    h="200px"
                    objectFit="cover"
                  />
                  <Box position="absolute" bottom="0" left="0" right="0" bg="rgba(0,0,0,0.7)" p={2}>
                    <HStack spacing={2} justify="center">
                      <IconButton
                        as="a"
                        href={member.social.linkedin}
                        aria-label="LinkedIn"
                        icon={<FaLinkedin />}
                        size="sm"
                        colorScheme="linkedin"
                        variant="ghost"
                      />
                      <IconButton
                        as="a"
                        href={member.social.twitter}
                        aria-label="Twitter"
                        icon={<FaTwitter />}
                        size="sm"
                        colorScheme="twitter"
                        variant="ghost"
                      />
                      <IconButton
                        as="a"
                        href={member.social.email}
                        aria-label="Email"
                        icon={<FaEnvelope />}
                        size="sm"
                        colorScheme="blue"
                        variant="ghost"
                      />
                    </HStack>
                  </Box>
                </Box>
                <VStack p={4} align="start" spacing={2}>
                  <Heading as="h3" size="md" color={textColor}>
                    {member.name}
                  </Heading>
                  <Badge colorScheme="blue">{member.position}</Badge>
                  <Text fontSize="sm" color={textSecondaryColor}>
                    {member.bio}
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* CTA */}
      <Box bg="brand.primary.600" color="white" py={16}>
        <Container maxW="1200px" textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Únete a Nuestra Comunidad
          </Heading>
          <Text fontSize="lg" mb={8} maxW="800px" mx="auto">
            Sé parte de la revolución del comercio electrónico sostenible. Juntos podemos crear un impacto positivo en
            el planeta mientras conectamos a vendedores y compradores responsables.
          </Text>
          <HStack spacing={4} justify="center" wrap="wrap">
            <Button
              as={RouterLink}
              to="/register"
              size="lg"
              bg="brand.secondary.500"
              _hover={{ bg: "brand.secondary.600" }}
              color="white"
              borderRadius="full"
            >
              Crear Cuenta
            </Button>
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
              borderRadius="full"
            >
              Contactar
            </Button>
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}

export default AboutPage
