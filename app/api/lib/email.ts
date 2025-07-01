import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderConfirmationEmail(order: { customer_email: string; amount: number; order_id: string }) {
  try {
    await resend.emails.send({
      from: 'Your Shop <shabbohussain21@gmail.com>',
      to: order.customer_email,
      subject: 'Your Order Confirmation',
      html: `
        <h2>Thank you for your order shabbo!</h2>
        <p>Order ID: ${order.order_id}</p>
        <p>Amount Paid: ₹${(order.amount / 100).toFixed(2)}</p>
      `,
    });
  } catch (error) {
    console.error('Email send failed:', error);
  }
}
