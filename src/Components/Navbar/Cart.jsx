import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Product from "./Product";
import useCartStore from "./";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const total = cart.length;
  const totalCart = cart.reduce(
    (acc, product) => acc + product.price * product.cantidad,
    0
  );

  /*   const deleteProduct = (id) => {
    deleteItemCart(id);
  }; */

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Carrito ({total})
      </Button>{" "}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito</DrawerHeader>
          {!!total || (
            <DrawerBody>
              <Text> No hay productos en el carrito ☹️</Text>
            </DrawerBody>
          )}

          {!!total && (
            <>
              <DrawerBody>
                {cart.map((product) => (
                  <Product
                    product={product}
                    key={`cartProduct${product.id}`}
                    deleteProduct={deleteProduct}
                  />
                ))}
              </DrawerBody>
              <DrawerFooter display="flex" flexDir="column">
                <Button
                  variant="outline"
                  mb={3}
                  w="full"
                  onClick={deleteAllProducts}
                >
                  Vaciar Carrito
                </Button>
                <Text>Total: {totalCart}</Text>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
