'use client'
import { PayPalScriptProvider, PayPalButtons, PayPalMarks, PayPalMessages } from '@paypal/react-paypal-js'
import { useState, useRef, useEffect } from 'react'

export default function PagoPage() {
    const [deferLoading, setDeferLoading] = useState(false)
    const [query, setQuery] = useState({
        cantidad: 1,
        precio: 350,
        total: null
    })
    const [error, setError] = useState(null)
    const handleChange = (event) => {
        const cantidad = event.target.name == 'cantidad' ? event.target.value : query.cantidad
        //const precio = event.target.name == 'precio' ? event.target.value : query.precio
        const total = cantidad * query.precio
        setQuery({
            cantidad: cantidad,
            precio: 350,
            total: total
        })
    }
    const handleClick = () => {
        setDeferLoading(false)
    }

    useEffect(() => {
        if (query.cantidad <= 0) {
            setQuery({
                cantidad: 1,
                precio: query.precio
            })
        }

    }, [query])

    return (

        <div className=' container mx-auto'>

            {JSON.stringify(query, null, 2)}
            <h1 className=' dark:text-white text-2xl mb-4'>Formulario</h1>
            <div className='flex space-x-2 m-2 items-center'>

                <label className='text-2xl uppercase'>cantidad</label>
                <input onChange={handleChange} value={query.cantidad} name='cantidad' className='boder bg-slate-200 rounded-lg w-1/2 ' type='number' placeholder='1'></input>
                <label className='text-2xl uppercase'>Precio</label>
                <input onChange={handleChange} disabled value={query.total == null ? query.precio : query.total} name='precio' className='boder bg-slate-200 rounded-lg w-1/2' type='number' placeholder='1'></input>

                <button className='text-nowrap bg-blue-300 px-2  rounded-lg hover:text-white hover:bg-blue-700 dark:text-white' onClick={handleClick}>Pay whith paypal</button>
            </div>
            <span className='text-red-600'>{error}</span>
            <div className=''>
                <PayPalScriptProvider deferLoading={deferLoading} options={{
                    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENTID
                }}  >
                    <PayPalButtons
                        createOrder={async () => {
                            const res = await fetch('/api/checkout', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    cantidad: 1,
                                    price: 350
                                })
                            })
                            const order = await res.json()
                            console.log(order)
                            return order.id
                        }}
                        onApprove={(
                            data,
                            actions
                        ) => {
                            console.log(data)
                            actions.order.capture()
                        }}
                        onCancel={(data) => {
                            console.log(data)
                        }}
                        style={{
                            color: 'gold',
                            layout: 'vertical',
                            shape: 'pill',
                            label: 'checkout',
                            tagline: ''
                            /*   height: 40,
                              size: 'responsive', */
                            /*  tagline: false,
                             fundingicons: false, */
                        }}
                    />
                    {/*  <PayPalMarks />
                    <PayPalMessages /> */}
                </PayPalScriptProvider>
            </div>
        </div>
    )
}
