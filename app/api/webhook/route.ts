import { NextRequest } from 'next/server';
import Stripe from 'stripe';
import { buffer } from 'micro';
import { sendOrderConfirmationEmail } from '../lib/email'; // Adjust the path as necessary

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const sig = req.headers.get('stripe-signature')!;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err: any) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Save order to DB (mock example)
    const order = {
      customer_email: session.customer_email || '', // Provide a default value
      amount: session.amount_total || 0, // Provide a default value
      order_id: session.id,
    };

    // Send email
    await sendOrderConfirmationEmail(order);
  }

  return new Response('OK', { status: 200 });
}
