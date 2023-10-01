## API Usage

### Create an Order

#### Request
**url:** http://127.0.0.1:3000/orders
**method:** POST
**body:**
```json
{
    "amount":1,
    "currency":"EUR",
    "customerEmail":"john.doe@domain.com"
}
```

#### Response
```json
{
    "_id": "urn:order:639e999e-4e2e-4fc7-9ad2-ae49d88d9ccb",
    "_links": {
        "cancel": {
            "href": "https://api-gateway.ngenius-payments.com/transactions/outlets/c8cc1574-e1fd-4357-89ca-4879f44111fc/orders/639e999e-4e2e-4fc7-9ad2-ae49d88d9ccb/cancel"
        },
        "cnp:payment-link": {
            "href": "https://api-gateway.ngenius-payments.com/transactions/outlets/c8cc1574-e1fd-4357-89ca-4879f44111fc/orders/639e999e-4e2e-4fc7-9ad2-ae49d88d9ccb/payment-link"
        },
        "payment-authorization": {
            "href": "https://api-gateway.ngenius-payments.com/transactions/paymentAuthorization"
        },
        "self": {
            "href": "https://api-gateway.ngenius-payments.com/transactions/outlets/c8cc1574-e1fd-4357-89ca-4879f44111fc/orders/639e999e-4e2e-4fc7-9ad2-ae49d88d9ccb"
        },
        "tenant-brand": {
            "href": "http://config-service/config/outlets/c8cc1574-e1fd-4357-89ca-4879f44111fc/configs/tenant-brand"
        },
        "payment": {
            "href": "https://paypage.ngenius-payments.com/?code=8ef02c3f2424790"
        },
        "merchant-brand": {
            "href": "http://config-service/config/outlets/c8cc1574-e1fd-4357-89ca-4879f44111fc/configs/merchant-brand"
        }
    },
    "type": "SINGLE",
    "merchantDefinedData": {},
    "action": "AUTH",
    "amount": {
        "currencyCode": "EUR",
        "value": 1
    },
    "language": "en",
    "merchantAttributes": {
        "maskPaymentInfo": "true"
    },
    "emailAddress": "john.doe@domain.com",
    "reference": "639e999e-4e2e-4fc7-9ad2-ae49d88d9ccb",
    "outletId": "c8cc1574-e1fd-4357-89ca-4879f44111fc",
    "createDateTime": "2023-10-01T05:00:46.812Z",
    "paymentMethods": {
        "wallet": [
            "SAMSUNG_PAY"
        ]
    },
    "referrer": "urn:Ecom:639e999e-4e2e-4fc7-9ad2-ae49d88d9ccb",
    "formattedAmount": "EUR 0.01",
    "formattedOrderSummary": {},
    "_embedded": {
        "payment": [
            {
                "_id": "urn:payment:2b1ba2e5-f2fe-4f73-a006-270cd84858cc",
                "_links": {
                    "self": {
                        "href": "https://api-gateway.ngenius-payments.com/transactions/outlets/c8cc1574-e1fd-4357-89ca-4879f44111fc/orders/639e999e-4e2e-4fc7-9ad2-ae49d88d9ccb/payments/2b1ba2e5-f2fe-4f73-a006-270cd84858cc"
                    },
                    "payment:samsung_pay": {
                        "href": "https://api-gateway.ngenius-payments.com/transactions/outlets/c8cc1574-e1fd-4357-89ca-4879f44111fc/orders/639e999e-4e2e-4fc7-9ad2-ae49d88d9ccb/payments/2b1ba2e5-f2fe-4f73-a006-270cd84858cc/samsung-pay"
                    },
                    "curies": [
                        {
                            "name": "cnp",
                            "href": "https://api-gateway.ngenius-payments.com/docs/rels/{rel}",
                            "templated": true
                        }
                    ]
                },
                "reference": "2b1ba2e5-f2fe-4f73-a006-270cd84858cc",
                "state": "STARTED",
                "amount": {
                    "currencyCode": "EUR",
                    "value": 1
                },
                "updateDateTime": "2023-10-01T05:00:46.812Z",
                "outletId": "c8cc1574-e1fd-4357-89ca-4879f44111fc",
                "orderReference": "639e999e-4e2e-4fc7-9ad2-ae49d88d9ccb"
            }
        ]
    }
}

```

 - Use ***_links.payment.href*** to go to the N-Genius Hosted Payments page. 