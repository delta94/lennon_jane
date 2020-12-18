/** @jsx jsx */ /** @jsxRuntime classic */

import { jsx, Divider, Heading } from "theme-ui";
import Layout from "../components/Layout";
import CartItem from "../components/CartItem";
import useCart from "../hooks/useCart";
const Cart = () => {
  const cart = useCart();

  return (
    <Layout>
      <Heading
        sx={{
          fontWeight: "300",
          textAlign: "center",
          color: "secondary",
          fontSize: 80,
          transform: "translate(0, -10rem)",
        }}
      >
        Shopping Bag
      </Heading>
      <div sx={{ px: 200, py: 10 }}>
        {cart &&
          cart.data.map((cartItem) => {
            return (
              <div key={cartItem.id}>
                <CartItem
                  url={cartItem.media.source}
                  price={cartItem.line_total.formatted}
                  quantity={cartItem.quantity}
                  name={cartItem.name}
                  id={cartItem.id}
                  imageWidth={300}
                  imageHeight={300}
                  bagPage
                />
                <Divider sx={{ color: "secondary" }} />
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default Cart;