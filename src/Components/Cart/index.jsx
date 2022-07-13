import { Container, Flex, Heading } from "@chakra-ui/react";
import Card from "./Card";
import React, { useContext } from "react";
import CartContext from "../Context/CartContext/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container maxW="container.xl" mt="5">
      <Heading mt="3">Carrito</Heading>
      <Flex flexWrap="wrap" justifyContent="space-around">
        {cart.map((product) => (
          <Card product={product} key={`productCard${product.id}`}></Card>
        ))}
      </Flex>
    </Container>
  );
};
export default Cart;
