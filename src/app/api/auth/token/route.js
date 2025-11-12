export async function POST(request) {
  try {
    const body = await request.json();
    
    console.log('Auth API - Request body:', JSON.stringify(body, null, 2));
    
    const response = await fetch('https://api.paypro.com.pk/v2/ppro/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    
    // Try multiple ways to get the token
    const token = response.headers.get('Token') || 
                  response.headers.get('token') || 
                  response.headers.get('TOKEN') ||
                  data.Token || 
                  data.token;
    
    console.log('PayPro Auth Response Status:', response.status);
    console.log('PayPro Auth Response Headers:', Object.fromEntries(response.headers.entries()));
    console.log('PayPro Auth Response Body:', data);
    console.log('Extracted Token:', token);
    console.log('Token length:', token?.length);
    
    if (!token) {
      console.error('No token found in response!');
      return Response.json({ error: 'No token received from PayPro' }, { status: 400 });
    }
    
    return Response.json({ Token: token, ...data }, { status: response.status });
  } catch (error) {
    console.error('Auth API Error:', error);
    return Response.json(
      { error: 'Failed to authenticate', details: error.message }, 
      { status: 500 }
    );
  }
}