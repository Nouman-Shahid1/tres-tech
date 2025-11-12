import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const paymentData = await request.json();
    
    const payproResponse = await fetch('https://api.paypro.com.pk/v1/payments', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PAYPRO_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });

    const result = await payproResponse.json();

    if (payproResponse.ok) {
      return NextResponse.json({ success: true, data: result });
    } else {
      return NextResponse.json({ success: false, error: result.message });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}