export async function getAccessToken() {
  const api_key = process.env.NETWROK_INTERNATIONAL_API_KEY;
  const resp = await fetch(
    "https://api-gateway.ngenius-payments.com/identity/auth/access-token",
    {
      method: "POST",
      headers: {
        Accept: "application/vnd.ni-identity.v1+json",
        "Content-Type": "application/vnd.ni-identity.v1+json",
        Authorization: `Basic ${api_key}`,
      },
    }
  );
  return await resp.json();
}

export async function authHandler(_, res) {
  try {
    const data = await getAccessToken();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
