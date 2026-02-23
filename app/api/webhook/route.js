export async function POST(request) {
    const data = await request.json();
    const webhookUrl = process.env.WEBHOOK_URL;

    if (!webhookUrl || webhookUrl === 'your_webhook_url_here') {
        console.log('Webhook URL not configured. Data received:', data);
        return new Response(JSON.stringify({ success: true, message: 'Mock success (Webhook URL missing)' }), {
            status: 200,
        });
    }

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return new Response(JSON.stringify({ success: true }), { status: 200 });
        } else {
            return new Response(JSON.stringify({ success: false }), { status: 500 });
        }
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
