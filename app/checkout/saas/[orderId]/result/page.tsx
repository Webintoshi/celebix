import { headers } from 'next/headers';
import { CheckoutUnavailable, CheckoutView } from '@/components/platform-checkout/CheckoutView';
import { loadCheckoutOrder, readCheckoutSession } from '@/lib/platform-checkout/server';
import { checkoutBridge } from '@/lib/platform-checkout/runtime';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export default async function PlatformCheckoutResultPage({ params }: { params: { orderId: string } }) {
  try {
    const order = await loadCheckoutOrder(params.orderId, readCheckoutSession(headers().get('cookie')), checkoutBridge());
    return <CheckoutView order={order} result expired={Date.parse(order.expiresAt) <= Date.now()} />;
  } catch { return <CheckoutUnavailable orderId={params.orderId} result />; }
}
