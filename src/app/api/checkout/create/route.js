export async function POST(request) {
  try {
    const body = await request.json();
    const token = request.headers.get('Token') || request.headers.get('token');
    const authHeader = request.headers.get('authorization');
    const authToken = authHeader?.replace('Bearer ', '');
    
    // Use Token header if available, otherwise fall back to Authorization
    const finalToken = token || authToken;
    
    console.log('Checkout API - Request body:', JSON.stringify(body, null, 2));
    console.log('Checkout API - Token header:', token);
    console.log('Checkout API - Auth token:', authToken);
    console.log('Checkout API - Final token:', finalToken);
    console.log('Checkout API - Token length:', finalToken?.length);
    
    if (!finalToken) {
      throw new Error('No token provided in Token or Authorization header');
    }
    
    const response = await fetch('https://api.paypro.com.pk/v2/ppro/co', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Token': finalToken,
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    console.log('PayPro Response:', JSON.stringify(data, null, 2));
    console.log('PayPro Status Code:', response.status);
    
    return Response.json(data, { status: response.status });
  } catch (error) {
    console.error('Checkout API Error:', error);
    return Response.json(
      { error: 'Failed to create checkout session', details: error.message }, 
      { status: 500 }
    );
  }
}