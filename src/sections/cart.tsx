import {
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  AspectRatio,
  Image,
  Stack,
  Divider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Cart: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack
      w="full"
      h="full"
      p={10}
      spacing={10}
      alignItems="flex-start"
      bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,
          <br />
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} alignItems="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="/skateboard.jpg" alt="Skate Board" />
        </AspectRatio>
        <Stack
          spacing={6}
          alignItems="center"
          w="full"
          direction="row"
          justifyContent="space-between"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Penny board</Heading>
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm" textAlign="end">
            $119.00
          </Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm" textAlign="end">
            $19.99
          </Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm" textAlign="end">
            $23.80
          </Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg" textAlign="end">
          $162.79
        </Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
