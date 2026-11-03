import { redirect } from 'next/navigation';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default function PublicToshiTestPage() {
  redirect('/tr/e-ticaret-paketleri#toshi-kredileri');
}
