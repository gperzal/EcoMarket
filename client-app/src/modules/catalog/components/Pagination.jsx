"use client"
import { Flex, Button, IconButton, Text, useColorModeValue } from "@chakra-ui/react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const buttonBg = useColorModeValue("white", "gray.800")
  const buttonBorderColor = useColorModeValue("gray.200", "gray.700")
  const activeBg = useColorModeValue("blue.500", "blue.300")
  const activeColor = useColorModeValue("white", "gray.800")

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = []

    // Always show first page
    pageNumbers.push(1)

    // Calculate range around current page
    let rangeStart = Math.max(2, currentPage - 1)
    let rangeEnd = Math.min(totalPages - 1, currentPage + 1)

    // Adjust range to always show 3 pages if possible
    if (rangeEnd - rangeStart < 2 && totalPages > 3) {
      if (currentPage < totalPages / 2) {
        rangeEnd = Math.min(totalPages - 1, rangeStart + 2)
      } else {
        rangeStart = Math.max(2, rangeEnd - 2)
      }
    }

    // Add ellipsis before range if needed
    if (rangeStart > 2) {
      pageNumbers.push("...")
    }

    // Add range pages
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pageNumbers.push(i)
    }

    // Add ellipsis after range if needed
    if (rangeEnd < totalPages - 1) {
      pageNumbers.push("...")
    }

    // Always show last page if there is more than one page
    if (totalPages > 1) {
      pageNumbers.push(totalPages)
    }

    return pageNumbers
  }

  return (
    <Flex justify="center" align="center" wrap="wrap" gap={2}>
      {/* Previous Page Button */}
      <IconButton
        icon={<FiChevronLeft />}
        aria-label="Previous Page"
        onClick={() => onPageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        bg={buttonBg}
        borderWidth="1px"
        borderColor={buttonBorderColor}
      />

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) =>
        typeof page === "number" ? (
          <Button
            key={index}
            onClick={() => onPageChange(page)}
            bg={currentPage === page ? activeBg : buttonBg}
            color={currentPage === page ? activeColor : undefined}
            borderWidth="1px"
            borderColor={currentPage === page ? activeBg : buttonBorderColor}
            _hover={{
              bg: currentPage === page ? activeBg : "gray.100",
              _dark: {
                bg: currentPage === page ? activeBg : "gray.700",
              },
            }}
          >
            {page}
          </Button>
        ) : (
          <Text key={index} mx={1}>
            {page}
          </Text>
        ),
      )}

      {/* Next Page Button */}
      <IconButton
        icon={<FiChevronRight />}
        aria-label="Next Page"
        onClick={() => onPageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        bg={buttonBg}
        borderWidth="1px"
        borderColor={buttonBorderColor}
      />
    </Flex>
  )
}

export default Pagination
