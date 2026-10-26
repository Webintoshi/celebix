import { handleCheckoutRequest } from '@/lib/platform-checkout/runtime';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export async function POST(request: Request, { params }: { params: { orderId: string } }) { return handleCheckoutRequest('pay', request, params.orderId); }
