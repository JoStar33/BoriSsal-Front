import { store } from "@/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Oauth from ".";

//라우터 모킹
jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
}));

test("정상적인 리다이렉트 상황 테스트(리덕스에 정상적으로 유저 데이터가 들어가는지 테스트.)", () => {
  global.window = Object.create(window);
  const url = "http://example.com/?nick=우하하&email=rhwdf@gmail.com&id=23";
  Object.defineProperty(window, 'location', {
    value: {
      href: url
    }
  });
  expect(window.location.href).toEqual(url);
  render(<Provider store={store}><Oauth/></Provider>);
  const state = store.getState().userStore;
  expect(state.user.id).toEqual(23);
  expect(state.user.email).toEqual("rhwdf@gmail.com");
  expect(state.user.nick).toEqual("우하하");
});