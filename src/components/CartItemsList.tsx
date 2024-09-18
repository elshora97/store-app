import { useAppSelector } from "@/hooks";
import { Card } from "./ui/card";
import {
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  FourthColumn,
} from "./CartItemColumns";

const CartItemsList = () => {
  const cartItems = useAppSelector((state) => state.cartState.cartItems);
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { cartID, image, title, price, amount, productColor, company } =
          cartItem;
        return (
          <Card
            key={cartID}
            className="flex flex-col gap-y-4 sm:flex-row flex-wrap mb-8 p-6">
            <FirstColumn
              image={image}
              title={title}
            />
            <SecondColumn
              title={title}
              company={company}
              productColor={productColor}
            />
            <ThirdColumn
              amount={amount}
              cartID={cartID}
            />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
};

export default CartItemsList;
