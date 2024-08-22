import paypal from '@paypal/checkout-server-sdk'
import { NextRequest, NextResponse } from 'next/server'

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENTID
const clientSecret = process.env.NEXT_PUBLIC_PAYPAL_CLIENTSECRET
const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret)

const client = new paypal.core.PayPalHttpClient(environment)

export async function POST(req) {

    console.log(req)
    const request = new paypal.orders.OrdersCreateRequest()
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: '25.00',
                breakdown: {
                    item_total: {
                        currency_code: 'USD',
                        value: '25.00'
                    }
                }


            },

            items: [
                {
                    name: 'T-shirt',
                    description: "a T-shirt",
                    quantity: '1',
                    category: 'PHYSICAL_GOODS',
                    unit_amount: {
                        currency_code: 'USD',
                        value: '12.50'
                    }
                },
                {
                    name: 'B-shirt',
                    description: "a B-shirt",
                    quantity: '1',
                    category: 'PHYSICAL_GOODS',
                    unit_amount: {
                        currency_code: 'USD',
                        value: '12.50'
                    }
                }
            ]
        }],
        application_context: {
            brand_name: 'StrongFreeCode'
        },
    })
    const response = await client.execute(request)
    //console.log(response)
    return NextResponse.json({
        id: response.result.id
    })
}