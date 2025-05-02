"use client"
import {
  Box,
  Text,
  Flex,
  Heading,
  Button,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Checkbox,
  Stack,
} from "@chakra-ui/react"

const FilterSidebar = ({
  priceRange,
  setPriceRange,
  selectedSubcategories = [],
  handleSubcategoryChange = () => {},
  subcategories = [],
  resetFilters,
  selectedShipping,
  setSelectedShipping,
  selectedConditions = [],
  setSelectedConditions = () => {},
  selectedRatings = [],
  setSelectedRatings = () => {},
}) => {
  const handleShippingChange = (e) => {
    setSelectedShipping?.(e.target.checked ? "free" : null)
  }

  const handleConditionChange = (condition) => {
    setSelectedConditions?.((prev) =>
      prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition]
    )
  }

  const handleRatingChange = (rating) => {
    setSelectedRatings?.((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    )
  }

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={4}>
        <Heading size="md">Filtros</Heading>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          Limpiar filtros
        </Button>
      </Flex>

      {/* Filtro por precio */}
      <Box mb={6}>
        <Text fontWeight="bold" mb={2}>Precio</Text>
        <Flex justify="space-between" mb={2}>
          <Text>${priceRange?.[0]?.toLocaleString?.() ?? '0'}</Text>
          <Text>${priceRange?.[1]?.toLocaleString?.() ?? '0'}</Text>
        </Flex>
        <RangeSlider
          aria-label={["min", "max"]}
          defaultValue={[0, 2000000]}
          min={0}
          max={2000000}
          step={1000}
          value={priceRange ?? [0, 2000000]}
          onChange={setPriceRange}
          colorScheme="blue"
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </Box>

      {/* Subcategorías */}
      {Array.isArray(subcategories) && subcategories.length > 0 && (
        <Box mb={6}>
          <Text fontWeight="bold" mb={2}>Subcategorías</Text>
          <Stack spacing={2}>
            {[...subcategories].sort().map((subcat) => (
              <Checkbox
                key={subcat}
                isChecked={selectedSubcategories.includes(subcat)}
                onChange={() => handleSubcategoryChange(subcat)}
                colorScheme="blue"
              >
                {subcat}
              </Checkbox>
            ))}
          </Stack>
        </Box>
      )}

      {/* Envío */}
      <Box mb={6}>
        <Text fontWeight="bold" mb={2}>Envío</Text>
        <Checkbox
          isChecked={selectedShipping === "free"}
          onChange={handleShippingChange}
          colorScheme="blue"
        >
          Envío gratis
        </Checkbox>
      </Box>

      {/* Condición */}
      <Box mb={6}>
        <Text fontWeight="bold" mb={2}>Condición</Text>
        <Stack spacing={2}>
          {["new", "used", "refurbished"].map((condition) => (
            <Checkbox
              key={condition}
              isChecked={selectedConditions.includes(condition)}
              onChange={() => handleConditionChange(condition)}
              colorScheme="blue"
            >
              {condition === "new" && "Nuevo"}
              {condition === "used" && "Usado"}
              {condition === "refurbished" && "Reacondicionado"}
            </Checkbox>
          ))}
        </Stack>
      </Box>

      {/* Calificación */}
      <Box mb={6}>
        <Text fontWeight="bold" mb={2}>Calificación</Text>
        <Stack spacing={2}>
          {[4, 3, 2].map((rating) => (
            <Checkbox
              key={rating}
              isChecked={selectedRatings.includes(rating)}
              onChange={() => handleRatingChange(rating)}
              colorScheme="blue"
            >
              {rating} estrellas o más
            </Checkbox>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

export default FilterSidebar
