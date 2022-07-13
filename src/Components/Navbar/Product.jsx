import { Box, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { BsFillTrashFill } from "react-icons/bs";

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

const Product = ({ product, deleteProduct }) => {
  return (
    <Flex mt="5">
      <Image
        src={product.image}
        w="70px"
        objectFit="cover"
        alt={`imagen de producto ${product.title}`}
      />
      <Box>
        <Heading size="sm"> {product.title}</Heading>
        <Text>{product.price}</Text>
        <Text>{product.cantidad}</Text>
      </Box>
      <IconButton
        icon={<BsFillTrashFill />}
        onClick={() => deleteProduct(product.id)}
      ></IconButton>
    </Flex>
  );
};

export default Product;
