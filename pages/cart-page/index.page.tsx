import CartEmpty from "@/components/cart/CartEmpty/CartEmpty";
import CartItem from "@/components/cart/CartItem/CartItem";
import { useLoginCheckQuery } from "@/hooks/auth/useLoginCheckQuery/useLoginCheckQuery";
import { useCartQuery } from "@/hooks/user/useCartQuery/useCartQuery";
import { useCartStore } from "@/store/cart";
import { useUserStore } from "@/store/user";
import { useRouter } from "next/router";
import styles from "./cart_page.module.scss";

const CartPage = () => {
  useLoginCheckQuery();
  let { data: cartData } = useCartQuery();
  const { setPageState } = useUserStore();
  const { setCart } = useCartStore();
  const router = useRouter();
  if (!cartData) {
    cartData = [];
  }
  const handleShowGoods = () => {
    router.push("/bori-goods");
  }
  const handleOrder = () => {
    if (!cartData) {
      cartData = [];
    }
    setPageState("order");
    setCart(cartData);
    router.push("/order");
  };
  return (
    <div className={styles.order_container}>
      <h1 className={styles.info_head}>장바구니 페이지</h1>
      <div className={styles.cart_container}>
        {
          cartData.length > 0
          ? cartData.map((cartElement) => (
            <CartItem
              key={cartElement._id}
              cart_id={cartElement._id}
              cartGoods={{
                bori_goods_id: cartElement.bori_goods_id,
                bori_goods_name: cartElement.bori_goods_name,
                bori_goods_image: cartElement.bori_goods_image,
                bori_goods_count: cartElement.bori_goods_count,
                bori_goods_price: cartElement.bori_goods_price,
              }}
            ></CartItem>))
          : <CartEmpty/>
          }
      </div>
      {
        cartData.length > 0 
        ? <button className={styles.order_button} onClick={() => handleOrder()}>
            주문하러 가기
          </button>
        : <button className={styles.order_button} onClick={() => handleShowGoods()}>
            굿즈보러 가기
          </button>
      }
    </div>
  );
};

export default CartPage;
