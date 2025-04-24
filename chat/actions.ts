'use server'

export async function askAI(message: string) {
    const API_URL = process.env.MAGIC_LOOPS_API_URL;

    const res = await fetch(API_URL!, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: message }),
    });

    const data = await res.json();
    return data
}
