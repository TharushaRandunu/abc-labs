import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import Booking from '../models/BookingSchema.js'

export const getCheckoutSession = async(req,res)=>{
    try{
        //get currentlu booked doctor
        const doctor = await Doctor.findById(req.params.doctorId)
        const user = await User.findById(req.userId)

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

        //create stripe checkout sesssion

        const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode: 'payment',
            success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url:`${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
            customer_email:email,
            client_reference_id:req.params.doctorId,
            line_items:[
                {
                    price_data:{
                        currency:'lkr',
                        unit_amount:doctor.ticketPrice * 100,
                        product_data:{
                            name:doctor.name,
                            description:doctor.bio,
                            images:[doctor.photo]
                        }
                    },
                    quantity:1
                }
            ]

        })
        //create new booking
        const Booking = new Booking({
            doctor: doctor._id,
            user: user._id,
            ticketPrice: doctor.ticketPrice,
            session: session.id,
        });

        await Booking.save();

        res 
        .send(200)

        .json({ success: true, messasge: "Succesfully paid", session});


    }
    catch(err){

        res 
        .status(500)
        .json({ success: false, message: "error creating checkout session"});
    }
}