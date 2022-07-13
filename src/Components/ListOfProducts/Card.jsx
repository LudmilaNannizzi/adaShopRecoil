import { Flex, Box, Image, useColorModeValue, Button } from "@chakra-ui/react";

// const product = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: {
//     rate: 3.9,
//     count: 120,
//   },
// };

const Card = ({ product, addProduct }) => {
  return (
    <Flex
      p={5}
      w="full"
      maxW="350px"
      m="10px"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
    >
      <Box h="50%">
        <Image
          m="auto"
          src={product.image}
          alt={`Picture of ${product.title}`}
          roundedTop="lg"
          h="full"
          objectFit="cover"
        />
      </Box>
      <Box p="6">
        <Box
          fontSize="2xl"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.title}
        </Box>

        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="lg">
              $
            </Box>
            {product.price} - {product.id}
          </Box>
        </Flex>
      </Box>
      <Button w="full" onClick={() => addProduct(product)}>
        Agregar al carrito
      </Button>
    </Flex>
  );
};
export default Card;
