import {  fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import RegistImage from "./RegistImage";

const queryClient = new QueryClient();

const user = userEvent.setup();

const initRender = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <RegistImage desc={"굿즈 이미지"} />
    </QueryClientProvider>
  );
};

test('이미지 반영 테스트', async () => {
  let file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
  initRender();
  const uploader = screen.getByRole("upload", {
    hidden: true
  });

  await waitFor(() =>
    fireEvent.change(uploader, {
      target: { files: [file] },
    })
  );
  const image = document.getElementById("input-file") as HTMLInputElement;
  if(!image.files) return;
  expect(image.files[0].name).toBe("chucknorris.png");
  expect(image.files.length).toBe(1);
})