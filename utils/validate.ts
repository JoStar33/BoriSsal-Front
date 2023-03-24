const validatePassword = (password: string) => {
  if (password) {
    const patternCnt = [
      { type: /^(?=.*?[a-zA-Z])/ },
      { type: /^(?=.*?[0-9]).{8,16}$/ },
      { type: /^(?=.*?[#?!@$%^&*-])/ },
    ].filter((item) => {
      return item.type.test(password);
    }).length;
    return patternCnt < 3
      ? "비밀번호는 특수문자, 영문 대소문자, 숫자가 포함된 9자~16자로 입력해주세요."
      : null;
  }
  return null;
};

const validateEmail = (email: string) => {
  if (email)
    return !/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)
      ? "이메일 형식에 맞지않습니다. 다시 입력해주세요."
      : null;
  return null;
};

const validateCount = (count: number) => {
  if (count) {
    if (count < 0)
      return "갯수가 0보다 작을 수 없습니다.";
    if (count > 10)
      return "10개이상 구매가 불가능합니다."
  }
  return null;
}

const validateNick = (nick: string) => {
  if (nick) {
    const patternCnt = [
      { type: /^(?=.*?[가-힣])/ },
      { type: /^.{3,8}$/ },
    ].filter((item) => {
      return item.type.test(nick);
    }).length;
    return patternCnt < 2
      ? "닉네임은 한글 3글자 이상 8글자 이하만 가능합니다."
      : null;
  }
  return null;
};

const validatePasswordCheck = (password: string | undefined, passwordCheck: string | undefined) =>
  password !== passwordCheck
    ? "비밀번호가 확인값과 다릅니다. 다시입력 해주세요."
    : null;

export { validatePassword, validateEmail, validateNick, validatePasswordCheck, validateCount };

