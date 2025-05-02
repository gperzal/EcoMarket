"use client"

import { useState, useRef } from "react"
import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  VStack,
  HStack,
  Button,
  Flex,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import {
  FaSearch,
  FaShoppingCart,
  FaTruck,
  FaExchangeAlt,
  FaCreditCard,
  FaUserCircle,
  FaQuestionCircle,
  FaHeadset,
  FaLaptop,
} from "react-icons/fa"

// Datos de preguntas frecuentes por categoría
const faqData = {
  compras: [
    {
      question: "¿Cómo realizo una compra en la plataforma?",
      answer:
        "Para realizar una compra, simplemente busca el producto que deseas, haz clic en 'Agregar al carrito', y sigue el proceso de checkout. Puedes pagar con tarjeta de crédito, débito, transferencia bancaria o métodos de pago electrónicos.",
    },
    {
      question: "¿Es seguro comprar en esta plataforma?",
      answer:
        "Sí, nuestra plataforma cuenta con certificados de seguridad SSL y utilizamos métodos de pago seguros. Además, protegemos tus datos personales de acuerdo con las leyes de protección de datos vigentes.",
    },
    {
      question: "¿Puedo cancelar mi pedido?",
      answer:
        "Puedes cancelar tu pedido siempre y cuando no haya sido procesado para envío. Para hacerlo, ve a 'Mis compras' en tu perfil y selecciona la opción 'Cancelar pedido'.",
    },
    {
      question: "¿Cómo puedo ver el estado de mi pedido?",
      answer:
        "Puedes verificar el estado de tu pedido en la sección 'Mis compras' de tu perfil. Allí encontrarás información actualizada sobre el procesamiento y envío de tus productos.",
    },
  ],
  productos: [
    {
      question: "¿Cómo sé si un producto está disponible?",
      answer:
        "En la página del producto, se muestra claramente si está disponible o agotado. También puedes ver la cantidad disponible en stock para algunos productos.",
    },
    {
      question: "¿Los productos tienen garantía?",
      answer:
        "Sí, todos nuestros productos cuentan con garantía del fabricante. La duración de la garantía varía según el tipo de producto y marca. Puedes consultar los detalles específicos en la descripción de cada producto.",
    },
    {
      question: "¿Puedo dejar una reseña de un producto?",
      answer:
        "Sí, una vez que hayas recibido y probado el producto, puedes dejar una reseña en la página del producto. Tu opinión es muy valiosa para otros compradores y para nosotros.",
    },
    {
      question: "¿Qué hago si recibo un producto defectuoso?",
      answer:
        "Si recibes un producto defectuoso, contacta a nuestro servicio al cliente dentro de los 7 días posteriores a la recepción. Te guiaremos en el proceso de devolución y reemplazo.",
    },
  ],
  envios: [
    {
      question: "¿Cuánto tiempo tarda en llegar mi pedido?",
      answer:
        "El tiempo de entrega depende de tu ubicación y el tipo de envío seleccionado. Generalmente, los envíos estándar tardan entre 3-7 días hábiles, mientras que los envíos express pueden llegar en 1-2 días hábiles.",
    },
    {
      question: "¿Puedo rastrear mi envío?",
      answer:
        "Sí, una vez que tu pedido sea despachado, recibirás un correo electrónico con el número de seguimiento. También puedes ver esta información en la sección 'Mis compras' de tu perfil.",
    },
    {
      question: "¿Cuál es el costo de envío?",
      answer:
        "El costo de envío se calcula en base a la ubicación de entrega, el peso y dimensiones del paquete. Puedes ver el costo exacto durante el proceso de checkout antes de confirmar tu compra.",
    },
    {
      question: "¿Realizan envíos internacionales?",
      answer:
        "Sí, realizamos envíos a varios países. Los tiempos de entrega y costos varían según el destino. Puedes consultar los países disponibles y tarifas en nuestra sección de envíos.",
    },
  ],
  devoluciones: [
    {
      question: "¿Cómo puedo devolver un producto?",
      answer:
        "Para devolver un producto, accede a 'Mis compras' en tu perfil, selecciona el pedido correspondiente y haz clic en 'Solicitar devolución'. Sigue las instrucciones para completar el proceso.",
    },
    {
      question: "¿Cuál es el plazo para realizar una devolución?",
      answer:
        "Aceptamos devoluciones dentro de los 30 días posteriores a la recepción del producto. El producto debe estar en su estado original, con etiquetas y embalaje.",
    },
    {
      question: "¿Cómo se realiza el reembolso?",
      answer:
        "El reembolso se realiza al mismo método de pago utilizado en la compra. El tiempo de procesamiento puede variar entre 5-15 días hábiles, dependiendo de tu entidad bancaria.",
    },
    {
      question: "¿Puedo cambiar un producto por otro?",
      answer:
        "Sí, puedes solicitar un cambio por otro producto de igual o mayor valor (pagando la diferencia si aplica). Debes iniciar el proceso de devolución y especificar que deseas un cambio.",
    },
  ],
  cuenta: [
    {
      question: "¿Cómo creo una cuenta?",
      answer:
        "Para crear una cuenta, haz clic en 'Ingresar' en la parte superior derecha de la página y selecciona 'Crear cuenta'. Completa el formulario con tus datos personales y sigue las instrucciones.",
    },
    {
      question: "¿Cómo recupero mi contraseña?",
      answer:
        "Si olvidaste tu contraseña, haz clic en 'Ingresar' y luego en '¿Olvidaste tu contraseña?'. Ingresa tu correo electrónico y te enviaremos un enlace para restablecerla.",
    },
    {
      question: "¿Cómo actualizo mis datos personales?",
      answer:
        "Puedes actualizar tus datos personales en la sección 'Mi perfil' de tu cuenta. Allí podrás modificar tu nombre, dirección, teléfono y otros datos.",
    },
    {
      question: "¿Puedo tener más de una dirección de envío?",
      answer:
        "Sí, puedes guardar múltiples direcciones de envío en tu cuenta. Esto te permitirá seleccionar fácilmente la dirección deseada durante el proceso de checkout.",
    },
  ],
  pagos: [
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos diversos métodos de pago, incluyendo tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencias bancarias, PayPal, y en algunos países, pago contra entrega o en efectivo en puntos autorizados.",
    },
    {
      question: "¿Es seguro ingresar los datos de mi tarjeta?",
      answer:
        "Sí, utilizamos tecnología de encriptación SSL para proteger tus datos financieros. Además, no almacenamos los números completos de tarjetas en nuestros servidores.",
    },
    {
      question: "¿Puedo pagar en cuotas?",
      answer:
        "Sí, ofrecemos la posibilidad de pagar en cuotas con tarjetas de crédito seleccionadas. Las opciones disponibles se mostrarán durante el proceso de pago según tu banco emisor.",
    },
    {
      question: "¿Emiten factura por mi compra?",
      answer:
        "Sí, emitimos factura electrónica por todas las compras. Puedes solicitar factura con datos fiscales específicos durante el proceso de checkout.",
    },
  ],
}

// Componente principal de la página FAQ
const FaqPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const searchInputRef = useRef(null)

  // Colores según el tema
  const bgColor = useColorModeValue("white", "gray.800")
  const cardBgColor = useColorModeValue("bg.card", "bg.card")
  const borderColor = useColorModeValue("border.default", "border.default")
  const accentColor = useColorModeValue("accent.primary", "accent.primary")
  const secondaryColor = useColorModeValue("accent.secondary", "accent.secondary")

  // Función para buscar en todas las preguntas
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)

    if (query.length > 2) {
      setIsSearching(true)
      const results = []

      // Buscar en todas las categorías
      Object.keys(faqData).forEach((category) => {
        faqData[category].forEach((item) => {
          if (item.question.toLowerCase().includes(query) || item.answer.toLowerCase().includes(query)) {
            results.push({
              ...item,
              category,
            })
          }
        })
      })

      setSearchResults(results)
    } else {
      setIsSearching(false)
      setSearchResults([])
    }
  }

  // Función para limpiar la búsqueda
  const clearSearch = () => {
    setSearchQuery("")
    setIsSearching(false)
    setSearchResults([])
    if (searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }

  // Categorías de FAQ con iconos
  const categories = [
    { id: "compras", name: "Compras", icon: FaShoppingCart },
    { id: "productos", name: "Productos", icon: FaLaptop },
    { id: "envios", name: "Envíos", icon: FaTruck },
    { id: "devoluciones", name: "Devoluciones", icon: FaExchangeAlt },
    { id: "cuenta", name: "Mi Cuenta", icon: FaUserCircle },
    { id: "pagos", name: "Pagos", icon: FaCreditCard },
  ]

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="1200px">
        {/* Encabezado y búsqueda */}
        <Box textAlign="center" mb={10}>
          <Heading as="h1" size="2xl" mb={4} color="accent.primary">
            Preguntas Frecuentes
          </Heading>
          <Text fontSize="lg" mb={6} color="text.secondary">
            Encuentra respuestas a las preguntas más comunes sobre nuestra plataforma
          </Text>
          <InputGroup size="lg" maxW="600px" mx="auto">
            <InputLeftElement pointerEvents="none">
              <Icon as={FaSearch} color="gray.400" />
            </InputLeftElement>
            <Input
              ref={searchInputRef}
              placeholder="Buscar en preguntas frecuentes..."
              value={searchQuery}
              onChange={handleSearch}
              borderRadius="full"
              bg="bg.surface"
              borderColor={borderColor}
              _focus={{
                borderColor: "brand.primary.400",
                boxShadow: "0 0 0 1px var(--chakra-colors-brand-primary-400)",
              }}
            />
          </InputGroup>
        </Box>

        {/* Resultados de búsqueda */}
        {isSearching ? (
          <Box mb={10}>
            <Flex justify="space-between" align="center" mb={4}>
              <Heading as="h2" size="lg" color="text.primary">
                Resultados de búsqueda ({searchResults.length})
              </Heading>
              <Button variant="ghost" colorScheme="blue" onClick={clearSearch}>
                Limpiar búsqueda
              </Button>
            </Flex>
            {searchResults.length > 0 ? (
              <Accordion allowMultiple>
                {searchResults.map((result, index) => (
                  <AccordionItem
                    key={index}
                    border="1px"
                    borderColor={borderColor}
                    borderRadius="md"
                    mb={3}
                    overflow="hidden"
                  >
                    <h2>
                      <AccordionButton py={4} _expanded={{ bg: "brand.primary.50", color: "accent.primary" }}>
                        <Box flex="1" textAlign="left" fontWeight="600">
                          {result.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} bg={cardBgColor}>
                      <Text color="text.secondary">{result.answer}</Text>
                      <Text mt={2} fontSize="sm" fontStyle="italic" color="text.secondary">
                        Categoría: {categories.find((cat) => cat.id === result.category)?.name}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <Box textAlign="center" py={10}>
                <Icon as={FaQuestionCircle} boxSize={12} color="gray.400" mb={4} />
                <Heading as="h3" size="md" mb={2} color="text.primary">
                  No se encontraron resultados
                </Heading>
                <Text color="text.secondary">Intenta con otros términos o explora las categorías a continuación</Text>
              </Box>
            )}
          </Box>
        ) : (
          <>
            {/* Categorías destacadas */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6} mb={10}>
              {categories.map((category) => (
                <Card
                  key={category.id}
                  bg={cardBgColor}
                  borderRadius="lg"
                  boxShadow="md"
                  _hover={{ transform: "translateY(-5px)", transition: "transform 0.3s ease" }}
                  borderTop="4px solid"
                  borderColor={accentColor}
                >
                  <CardBody>
                    <VStack spacing={4} align="center" p={2}>
                      <Icon as={category.icon} boxSize={10} color={accentColor} />
                      <Heading as="h3" size="md" textAlign="center" color="text.primary">
                        {category.name}
                      </Heading>
                      <Text fontSize="sm" textAlign="center" color="text.secondary">
                        {faqData[category.id].length} preguntas
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>

            {/* Tabs con preguntas por categoría */}
            <Box
              borderRadius="lg"
              overflow="hidden"
              bg={cardBgColor}
              boxShadow="md"
              borderColor={borderColor}
              borderWidth="1px"
            >
              <Tabs colorScheme="blue" isLazy>
                <TabList overflowX="auto" py={2} px={4}>
                  {categories.map((category) => (
                    <Tab
                      key={category.id}
                      fontWeight="600"
                      _selected={{ color: accentColor, borderColor: accentColor }}
                    >
                      <HStack spacing={2}>
                        <Icon as={category.icon} />
                        <Text>{category.name}</Text>
                      </HStack>
                    </Tab>
                  ))}
                </TabList>
                <Divider borderColor={borderColor} />
                <TabPanels>
                  {categories.map((category) => (
                    <TabPanel key={category.id} p={6}>
                      <Accordion allowMultiple>
                        {faqData[category.id].map((item, index) => (
                          <AccordionItem
                            key={index}
                            border="1px"
                            borderColor={borderColor}
                            borderRadius="md"
                            mb={3}
                            overflow="hidden"
                          >
                            <h2>
                              <AccordionButton py={4} _expanded={{ bg: "brand.primary.50", color: "accent.primary" }}>
                                <Box flex="1" textAlign="left" fontWeight="600">
                                  {item.question}
                                </Box>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <Text color="text.secondary">{item.answer}</Text>
                            </AccordionPanel>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </TabPanel>
                  ))}
                </TabPanels>
              </Tabs>
            </Box>
          </>
        )}

        {/* Sección de contacto */}
        <Box
          mt={16}
          p={8}
          borderRadius="lg"
          bg={cardBgColor}
          boxShadow="md"
          textAlign="center"
          borderColor={borderColor}
          borderWidth="1px"
        >
          <Icon as={FaHeadset} boxSize={12} color={secondaryColor} mb={4} />
          <Heading as="h2" size="lg" mb={4} color="text.primary">
            ¿No encontraste lo que buscabas?
          </Heading>
          <Text fontSize="lg" mb={6} color="text.secondary">
            Nuestro equipo de soporte está listo para ayudarte con cualquier duda o problema
          </Text>
          <HStack spacing={4} justify="center" wrap="wrap">
            <Button
              as={RouterLink}
              to="/contact"
              colorScheme="blue"
              size="lg"
              leftIcon={<FaHeadset />}
              borderRadius="full"
            >
              Contactar Soporte
            </Button>
            <Button
              as={RouterLink}
              to="/support"
              variant="outline"
              colorScheme="blue"
              size="lg"
              leftIcon={<FaQuestionCircle />}
              borderRadius="full"
            >
              Centro de Ayuda
            </Button>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}

export default FaqPage
