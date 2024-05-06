const stripe=require("stripe")
const Stripe = stripe("sk_test_51PDORlRomicKT5CpETH2EnqXYiPeLyCLskI8CZ4K3fJKgHc4h7pQGSiHyaeFU0iDC0wFio8R5uLPQxCPTwNWBICD0032oFfMhp")
exports.paiment=async(req,res)=>{
    console.log(req.body)
    const line_items=req.body.panier.map(e=>{
        return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: e.product.title,
                        images : [e.product.image],

                        description: e.product.description,
                        metadata:{
                            id:e.product._id
                        }
                    },
                    unit_amount: e.product.price*100,
                },
                quantity: e.quantity
            }

    })
    const session = await Stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: 'http://localhost:5173/success',
        cancel_url: 'http://localhost:5173/cancel',
    });
    res.send({url:session.url });
}