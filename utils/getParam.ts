export const getParam = (): string => {
  const params = new URL(window.location.href.toString()).searchParams;
  let paramId: string | null = params.get("user_id");
  if(!paramId) {
    return '비어있음.';
  }
  return paramId;
}