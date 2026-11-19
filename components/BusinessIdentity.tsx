export default function BusinessIdentity({ locale = "tr" }: { locale?: string }) {
  const isTr = locale !== "en";

  return (
    <dl className="mb-3 space-y-1">
      <div className="flex flex-wrap gap-x-2">
        <dt className="font-medium text-dark-900">{isTr ? "Ticaret unvanı" : "Registered business name"}</dt>
        <dd lang="tr">CELEBIX YAZILIM</dd>
      </div>
      <div className="flex flex-wrap gap-x-2">
        <dt className="font-medium text-dark-900">{isTr ? "Marka" : "Brand"}</dt>
        <dd>Celebix</dd>
      </div>
      <div className="flex flex-wrap gap-x-2">
        <dt className="font-medium text-dark-900">{isTr ? "İşletme türü" : "Business type"}</dt>
        <dd>{isTr ? "Şahıs işletmesi" : "Sole proprietorship"}</dd>
      </div>
    </dl>
  );
}
