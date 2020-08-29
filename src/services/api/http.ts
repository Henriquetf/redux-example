async function http<ResponseType>(request: RequestInfo, init?: RequestInit): Promise<ResponseType> {
  const response = await fetch(request, init);
  const body = (await response.json()) as ResponseType;

  return body;
}

export default http;
