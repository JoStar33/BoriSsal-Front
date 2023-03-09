import { rest } from 'msw';

//보면 이거 배열임. 하나의 핸들러만 작성한건데 원하는 HTTP 메소드, 원하는 상태, 원하는 데이터 등을
//아래와 같이 확인할 수 있다.
export const handlers = [
  // Match a GET request to a third-party server.
  /*
  example)
  
  rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
    return res(
      ctx.status(200), 
      ctx.json([{
        userId: 0,
        id: 3,
        title: "안녕",
        completed: true
      }, {
        userId: 0,
        id: 2,
        title: "뭘까",
        completed: true
      }, {
        userId: 0,
        id: 4,
        title: "히히",
        completed: true
      }])
    )
  }),
  */
  rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/login`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        _id: 3333,
        email: "user12@test.com",
        nick: "클라나이"
      })
    );
  }),
  rest.post(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/auth/join`, (req, res, ctx) => {
    return res(
      ctx.status(200)
    );
  }),
  rest.get(`${process.env.NEXT_PUBLIC_BORI_SSAL_API_URL}/user/23`, (req, res, ctx) => {
    return res
    (
      ctx.status(200),
      ctx.json({
        _id: "23",
        email: 'rhwdf@gmail.com',
        nick: '우하하'
      })
    );
  })
]