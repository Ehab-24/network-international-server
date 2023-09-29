import { getAccessToken } from "./auth.js";

export async function createOrder(req, res) {
  try {
    const reference = process.env.NETWORK_INTERNATIONAL_OUTLET_REFERENCE;
    const { amount, currency, customerEmail } = req.body;
    const { access_token } = await getAccessToken();

    console.log(access_token);

    const resp = await fetch(
      `https://api-gateway.ngenius-payments.com/transactions/outlets/${reference}/orders`,
      {
        method: "POST",
        body: {
          action: "AUTH",
          amount: {
            currencyCode: currency,
            value: amount,
          },
          emailAddress: customerEmail || "",
        },
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/vnd.ni-payment.v2+json",
          Accept: "application/vnd.ni-payment.v2+json",
        },
      }
    );

    const data = await resp.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
