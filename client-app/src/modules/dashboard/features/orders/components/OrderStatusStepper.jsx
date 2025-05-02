import {
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepSeparator,
  Box,
  useSteps,
} from "@chakra-ui/react"

const OrderStatusStepper = ({ status }) => {
  const steps = [
    { title: "Procesando", description: "Orden confirmada" },
    { title: "Preparando", description: "Empacando productos" },
    { title: "Enviado", description: "En camino" },
    { title: "Entregado", description: "Recibido" },
  ]

  // Determinar el paso activo basado en el estado
  let activeStep
  switch (status) {
    case "Procesando":
      activeStep = 0
      break
    case "Preparando":
      activeStep = 1
      break
    case "En camino":
      activeStep = 2
      break
    case "Entregado":
      activeStep = 3
      break
    default:
      activeStep = 0
  }

  const { activeStep: currentStep } = useSteps({
    index: activeStep,
    count: steps.length,
  })

  return (
    <Stepper index={currentStep} colorScheme="blue" size="sm">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
          <Box flexShrink="0">
            <StepSeparator />
          </Box>
        </Step>
      ))}
    </Stepper>
  )
}

export default OrderStatusStepper
