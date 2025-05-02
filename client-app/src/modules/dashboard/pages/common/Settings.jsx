"use client"

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  HStack,
  Switch,
  Select,
  Card,
  CardBody,
  CardHeader,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
  Flex,
  Divider,
  useColorMode,
  useToast,
  Badge,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react"
import {
  FaSave,
  FaBell,
  FaGlobe,
  FaLock,
  FaShieldAlt,
  FaUserShield,
  FaInfoCircle,
  FaExclamationTriangle,
} from "react-icons/fa"
import { useState } from "react"

const Settings = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const toast = useToast()
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Estados para los formularios
  const [generalSettings, setGeneralSettings] = useState({
    language: "es",
    timezone: "America/Mexico_City",
    dateFormat: "DD/MM/YYYY",
    darkMode: colorMode === "dark",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    orderUpdates: true,
    marketingEmails: false,
    browserNotifications: true,
    soundAlerts: true,
  })

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: "public",
    activityTracking: true,
    dataSharing: false,
  })

  // Manejar cambios en formularios
  const handleGeneralChange = (e) => {
    const { name, value } = e.target
    setGeneralSettings({
      ...generalSettings,
      [name]: value,
    })
  }

  const handleSwitchChange = (formState, setFormState, name) => {
    setFormState({
      ...formState,
      [name]: !formState[name],
    })
  }

  // Manejar cambio de modo oscuro
  const handleDarkModeChange = () => {
    toggleColorMode()
    setGeneralSettings({
      ...generalSettings,
      darkMode: !generalSettings.darkMode,
    })
  }

  // Guardar configuración
  const handleSaveSettings = () => {
    toast({
      title: "Configuración guardada",
      description: "Tus preferencias han sido actualizadas correctamente.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <Box>
      <Heading mb={6}>Configuración</Heading>

      <Tabs colorScheme="blue" mb={6}>
        <TabList>
          <Tab>General</Tab>
          <Tab>Notificaciones</Tab>
          <Tab>Privacidad y Seguridad</Tab>
          <Tab>Avanzado</Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">Configuración General</Heading>
              </CardHeader>
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <FormControl>
                    <FormLabel>Idioma</FormLabel>
                    <Select name="language" value={generalSettings.language} onChange={handleGeneralChange}>
                      <option value="es">Español</option>
                      <option value="en">English</option>
                      <option value="pt">Português</option>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Zona Horaria</FormLabel>
                    <Select name="timezone" value={generalSettings.timezone} onChange={handleGeneralChange}>
                      <option value="America/Mexico_City">Ciudad de México (GMT-6)</option>
                      <option value="America/New_York">Nueva York (GMT-5)</option>
                      <option value="America/Los_Angeles">Los Ángeles (GMT-8)</option>
                      <option value="Europe/Madrid">Madrid (GMT+1)</option>
                      <option value="America/Bogota">Bogotá (GMT-5)</option>
                      <option value="America/Santiago">Santiago (GMT-4)</option>
                      <option value="America/Buenos_Aires">Buenos Aires (GMT-3)</option>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Formato de Fecha</FormLabel>
                    <Select name="dateFormat" value={generalSettings.dateFormat} onChange={handleGeneralChange}>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </Select>
                  </FormControl>

                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="dark-mode" mb="0">
                      Modo Oscuro
                    </FormLabel>
                    <Switch
                      id="dark-mode"
                      isChecked={generalSettings.darkMode}
                      onChange={handleDarkModeChange}
                      colorScheme="blue"
                    />
                  </FormControl>

                  <Flex justify="flex-end">
                    <Button colorScheme="blue" leftIcon={<FaSave />} onClick={handleSaveSettings}>
                      Guardar Cambios
                    </Button>
                  </Flex>
                </VStack>
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Flex align="center">
                  <Icon as={FaBell} mr={2} color="brand.primary.500" />
                  <Heading size="md">Configuración de Notificaciones</Heading>
                </Flex>
              </CardHeader>
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="email-notifications" mb="0">
                      Notificaciones por Email
                    </FormLabel>
                    <Switch
                      id="email-notifications"
                      isChecked={notificationSettings.emailNotifications}
                      onChange={() =>
                        handleSwitchChange(notificationSettings, setNotificationSettings, "emailNotifications")
                      }
                      colorScheme="blue"
                    />
                  </FormControl>

                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="order-updates" mb="0">
                      Actualizaciones de Pedidos
                    </FormLabel>
                    <Switch
                      id="order-updates"
                      isChecked={notificationSettings.orderUpdates}
                      onChange={() => handleSwitchChange(notificationSettings, setNotificationSettings, "orderUpdates")}
                      colorScheme="blue"
                    />
                  </FormControl>

                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="marketing-emails" mb="0">
                      Emails de Marketing
                    </FormLabel>
                    <Switch
                      id="marketing-emails"
                      isChecked={notificationSettings.marketingEmails}
                      onChange={() =>
                        handleSwitchChange(notificationSettings, setNotificationSettings, "marketingEmails")
                      }
                      colorScheme="blue"
                    />
                  </FormControl>

                  <Divider />

                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="browser-notifications" mb="0">
                      Notificaciones del Navegador
                    </FormLabel>
                    <Switch
                      id="browser-notifications"
                      isChecked={notificationSettings.browserNotifications}
                      onChange={() =>
                        handleSwitchChange(notificationSettings, setNotificationSettings, "browserNotifications")
                      }
                      colorScheme="blue"
                    />
                  </FormControl>

                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="sound-alerts" mb="0">
                      Alertas de Sonido
                    </FormLabel>
                    <Switch
                      id="sound-alerts"
                      isChecked={notificationSettings.soundAlerts}
                      onChange={() => handleSwitchChange(notificationSettings, setNotificationSettings, "soundAlerts")}
                      colorScheme="blue"
                    />
                  </FormControl>

                  <Flex justify="flex-end">
                    <Button colorScheme="blue" leftIcon={<FaSave />} onClick={handleSaveSettings}>
                      Guardar Cambios
                    </Button>
                  </Flex>
                </VStack>
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor} mb={6}>
              <CardHeader>
                <Flex align="center">
                  <Icon as={FaGlobe} mr={2} color="brand.primary.500" />
                  <Heading size="md">Privacidad</Heading>
                </Flex>
              </CardHeader>
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <FormControl>
                    <FormLabel>Visibilidad del Perfil</FormLabel>
                    <Select
                      name="profileVisibility"
                      value={privacySettings.profileVisibility}
                      onChange={(e) => setPrivacySettings({ ...privacySettings, profileVisibility: e.target.value })}
                    >
                      <option value="public">Público</option>
                      <option value="contacts">Solo Contactos</option>
                      <option value="private">Privado</option>
                    </Select>
                  </FormControl>

                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="activity-tracking" mb="0">
                      Seguimiento de Actividad
                    </FormLabel>
                    <Switch
                      id="activity-tracking"
                      isChecked={privacySettings.activityTracking}
                      onChange={() => handleSwitchChange(privacySettings, setPrivacySettings, "activityTracking")}
                      colorScheme="blue"
                    />
                  </FormControl>

                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="data-sharing" mb="0">
                      Compartir Datos con Socios
                    </FormLabel>
                    <Switch
                      id="data-sharing"
                      isChecked={privacySettings.dataSharing}
                      onChange={() => handleSwitchChange(privacySettings, setPrivacySettings, "dataSharing")}
                      colorScheme="blue"
                    />
                  </FormControl>

                  <Flex justify="flex-end">
                    <Button colorScheme="blue" leftIcon={<FaSave />} onClick={handleSaveSettings}>
                      Guardar Cambios
                    </Button>
                  </Flex>
                </VStack>
              </CardBody>
            </Card>

            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Flex align="center">
                  <Icon as={FaLock} mr={2} color="brand.primary.500" />
                  <Heading size="md">Seguridad</Heading>
                </Flex>
              </CardHeader>
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Box>
                    <Flex align="center" mb={2}>
                      <Icon as={FaShieldAlt} mr={2} color="brand.primary.500" />
                      <Text fontWeight="bold">Cambiar Contraseña</Text>
                    </Flex>
                    <HStack spacing={4} mb={4}>
                      <FormControl>
                        <FormLabel>Contraseña Actual</FormLabel>
                        <Input type="password" placeholder="••••••••" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Nueva Contraseña</FormLabel>
                        <Input type="password" placeholder="••••••••" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Confirmar Contraseña</FormLabel>
                        <Input type="password" placeholder="••••••••" />
                      </FormControl>
                    </HStack>
                    <Button colorScheme="blue" size="sm">
                      Actualizar Contraseña
                    </Button>
                  </Box>

                  <Divider />

                  <Box>
                    <Flex align="center" justify="space-between" mb={4}>
                      <Flex align="center">
                        <Icon as={FaUserShield} mr={2} color="brand.primary.500" />
                        <Box>
                          <Text fontWeight="bold">Autenticación de Dos Factores</Text>
                          <Text fontSize="sm" color="text.secondary">
                            Añade una capa extra de seguridad a tu cuenta
                          </Text>
                        </Box>
                      </Flex>
                      <Badge colorScheme="red">Desactivado</Badge>
                    </Flex>
                    <Button colorScheme="blue" size="sm">
                      Activar 2FA
                    </Button>
                  </Box>

                  <Divider />

                  <Box>
                    <Flex align="center" mb={2}>
                      <Icon as={FaInfoCircle} mr={2} color="brand.primary.500" />
                      <Text fontWeight="bold">Sesiones Activas</Text>
                    </Flex>
                    <Box p={4} borderWidth="1px" borderRadius="md" borderColor={borderColor} mb={4}>
                      <Flex justify="space-between" align="center">
                        <Box>
                          <Text fontWeight="bold">Este dispositivo</Text>
                          <Text fontSize="sm" color="text.secondary">
                            Última actividad: Hace 5 minutos
                          </Text>
                        </Box>
                        <Badge colorScheme="green">Activo</Badge>
                      </Flex>
                    </Box>
                    <Button colorScheme="red" size="sm" variant="outline">
                      Cerrar Todas las Sesiones
                    </Button>
                  </Box>
                </VStack>
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor} mb={6}>
              <CardHeader>
                <Heading size="md">Configuración Avanzada</Heading>
              </CardHeader>
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Box>
                    <Text fontWeight="bold" mb={2}>
                      Exportar Datos
                    </Text>
                    <Text fontSize="sm" color="text.secondary" mb={4}>
                      Descarga una copia de tus datos personales y actividad en la plataforma
                    </Text>
                    <Button colorScheme="blue" size="sm">
                      Exportar Mis Datos
                    </Button>
                  </Box>

                  <Divider />

                  <Box>
                    <Text fontWeight="bold" mb={2}>
                      Eliminar Historial de Búsqueda
                    </Text>
                    <Text fontSize="sm" color="text.secondary" mb={4}>
                      Elimina tu historial de búsqueda y navegación en la plataforma
                    </Text>
                    <Button colorScheme="red" size="sm" variant="outline">
                      Eliminar Historial
                    </Button>
                  </Box>

                  <Divider />

                  <Box>
                    <Flex
                      p={4}
                      borderWidth="1px"
                      borderRadius="md"
                      borderColor="red.200"
                      bg="red.50"
                      _dark={{ bg: "red.900", borderColor: "red.800" }}
                      mb={4}
                      align="flex-start"
                    >
                      <Icon as={FaExclamationTriangle} color="red.500" mr={3} mt={1} />
                      <Box>
                        <Text fontWeight="bold">Zona de Peligro</Text>
                        <Text fontSize="sm">
                          Las siguientes acciones son irreversibles y pueden resultar en la pérdida permanente de datos
                          o acceso a tu cuenta.
                        </Text>
                      </Box>
                    </Flex>

                    <Box p={4} borderWidth="1px" borderRadius="md" borderColor={borderColor}>
                      <Text fontWeight="bold" mb={2}>
                        Desactivar Cuenta
                      </Text>
                      <Text fontSize="sm" color="text.secondary" mb={4}>
                        Tu cuenta será desactivada temporalmente y podrás reactivarla iniciando sesión nuevamente.
                      </Text>
                      <Button colorScheme="orange" size="sm" variant="outline">
                        Desactivar Mi Cuenta
                      </Button>

                      <Divider my={4} />

                      <Text fontWeight="bold" mb={2}>
                        Eliminar Cuenta
                      </Text>
                      <Text fontSize="sm" color="text.secondary" mb={4}>
                        Esta acción eliminará permanentemente tu cuenta y todos tus datos. No podrás recuperarlos.
                      </Text>
                      <Button colorScheme="red" size="sm">
                        Eliminar Mi Cuenta
                      </Button>
                    </Box>
                  </Box>
                </VStack>
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Settings
