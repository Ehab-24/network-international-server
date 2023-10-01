import { getAccessToken } from "./auth.js";

export async function createOrder(req, res) {
  try {
    const reference = process.env.NETWROK_INTERNATIONAL_OUTLET_REFERENCE;
    const { amount, action, currency, customerEmail } = req.body;
    const { access_token } = await getAccessToken();

    const body = {
      action: action || "AUTH",
      amount: {
        currencyCode: currency,
        value: amount,
      },
      emailAddress: customerEmail || "",
      merchantAttributes: {
        maskPaymentInfo: true,
      },
    };
    const url = `https://api-gateway.ngenius-payments.com/transactions/outlets/${reference}/orders`;
    const headers = {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/vnd.ni-payment.v2+json",
      Accept: "application/vnd.ni-payment.v2+json",
    };

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers,
    });

    const data = await resp.json();
    if(resp.status === 201) {
      console.log(`Order created successfully {_id: ${data._id}}`);
    }

    res.status(resp.status).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
