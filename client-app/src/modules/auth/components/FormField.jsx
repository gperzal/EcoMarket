import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    FormErrorMessage,
    IconButton,
  } from "@chakra-ui/react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import { useState } from "react";
  
  const FormField = ({
    label,
    type,
    name,
    value,
    onChange,
    placeholder,
    error,
    isPassword,
  }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);
  
    return (
      <FormControl isInvalid={!!error}>
        <FormLabel color="text.primary">{label}</FormLabel>
        <InputGroup>
          <Input
            type={isPassword && showPassword ? "text" : type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            bg="bg.surface"
            borderColor="border.default"
            color="text.primary"
            _placeholder={{ color: "text.secondary" }}
            _focus={{
              borderColor: "accent.primary",
              boxShadow: "0 0 0 1px var(--chakra-colors-accent-primary)",
            }}
          />
          {isPassword && (
            <InputRightElement>
              <IconButton
                size="sm"
                variant="ghost"
                onClick={togglePassword}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                aria-label="Mostrar contraseña"
              />
            </InputRightElement>
          )}
        </InputGroup>
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    );
  };
  
  export default FormField;