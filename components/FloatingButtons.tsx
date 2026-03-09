"use client";

import { Instagram } from "lucide-react";

// WhatsApp phone number
const WHATSAPP_NUMBER = "905302099628";
const WHATSAPP_MESSAGE = "Merhaba, Celebix hakkında bilgi almak istiyorum.";
const INSTAGRAM_USERNAME = "celebix.co";

export default function FloatingButtons() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;
  const instagramUrl = `https://instagram.com/${INSTAGRAM_USERNAME}`;

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
      {/* Instagram Button - Half Circle */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-dark-900/90 hover:bg-dark-900 text-light-100 transition-all duration-300 hover:w-14"
        style={{
          borderRadius: "0 50% 50% 0",
          backgroundColor: "rgba(42, 42, 42, 0.95)",
        }}
        aria-label="Instagram"
      >
        <Instagram size={22} />
      </a>

      {/* WhatsApp Button - Half Circle */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-dark-900/90 hover:bg-[#25D366] text-light-100 hover:text-white transition-all duration-300 hover:w-14"
        style={{
          borderRadius: "0 50% 50% 0",
          backgroundColor: "rgba(42, 42, 42, 0.95)",
        }}
        aria-label="WhatsApp"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.6 6.32A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 12.1L4 20l4.05-1.06A7.93 7.93 0 0 0 20 12a7.85 7.85 0 0 0-2.4-5.68ZM12 18a5.88 5.88 0 0 1-3-.82l-.22-.13-2.67.7.71-2.6-.14-.23a5.88 5.88 0 0 1 5.5-8.68 5.88 5.88 0 0 1 5.88 5.88A5.88 5.88 0 0 1 12 18Zm3.4-4.66c-.18-.1-1.07-.53-1.24-.59-.16-.06-.28-.1-.4.1-.12.18-.46.59-.57.71-.1.12-.2.14-.38.04a4.8 4.8 0 0 1-1.4-.87 5.32 5.32 0 0 1-.97-1.2c-.1-.18 0-.28.08-.37.08-.08.18-.2.26-.3.1-.1.12-.18.18-.3.06-.12.03-.22-.02-.3-.04-.1-.4-.97-.55-1.32-.14-.35-.29-.3-.4-.3-.1 0-.22-.03-.34-.03-.12 0-.3.04-.46.22-.16.18-.62.6-.62 1.47 0 .87.63 1.72.72 1.84.1.12 1.24 1.9 3 2.66.42.18.75.29 1 .37.42.13.8.11 1.1.07.34-.05 1.07-.44 1.22-.86.15-.42.15-.78.1-.86-.04-.08-.16-.12-.34-.2Z" />
        </svg>
      </a>
    </div>
  );
}
