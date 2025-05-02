import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text } from "@chakra-ui/react"

const FaqAccordion = ({ faqs }) => {
  return (
    <Accordion allowMultiple>
      {faqs.map((faq, index) => (
        <AccordionItem key={index}>
          <h3>
            <AccordionButton py={4}>
              <Box flex="1" textAlign="left" fontWeight="medium">
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4}>
            <Text>{faq.answer}</Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default FaqAccordion
