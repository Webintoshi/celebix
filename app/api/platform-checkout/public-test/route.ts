export const runtime='nodejs';
export const dynamic='force-dynamic';
export async function POST():Promise<Response>{
  return Response.json({error:'offer_retired'},{status:410,headers:{'cache-control':'private, no-store, max-age=0','referrer-policy':'no-referrer','x-robots-tag':'noindex, nofollow, noarchive','x-content-type-options':'nosniff'}});
}
