import { randomUUID } from 'node:crypto';
import { PUBLIC_TOSHI_TEST_ERROR_CODES, PublicToshiTestUnavailable, PublicToshiTestView } from '@/components/platform-checkout/PublicToshiTestView';
import { bridgeKeyFromEnvironment } from '@/lib/platform-checkout/server';
import { createPublicTestForm } from '@/lib/platform-checkout/public-test';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default function PublicToshiTestPage({ searchParams }: { searchParams?: { error?: string | string[] } }) {
  try {
    const form = createPublicTestForm(bridgeKeyFromEnvironment(process.env), new Date(), randomUUID());
    const code = searchParams?.error;
    const error = typeof code === 'string' && PUBLIC_TOSHI_TEST_ERROR_CODES.some(value => value === code) ? code : undefined;
    return <PublicToshiTestView form={form} error={error} />;
  } catch { return <PublicToshiTestUnavailable />; }
}
