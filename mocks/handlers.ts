import { authMock } from './apis/auth';
import { boriGoodsMock } from './apis/boriGoods';
import { cartMock } from './apis/cart';
import { orderMock } from './apis/order';
import { userMock } from './apis/user';

export const handlers = [
  ...authMock(),
  ...userMock(),
  ...boriGoodsMock(),
  ...orderMock(),
  ...cartMock()
]