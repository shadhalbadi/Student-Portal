/** ماسكوت البانر — SVG مرسوم يدويًا ليطابق روبوت الفيقما بدون صور خارجية. */
export function RobotMascot({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 190"
      className={className}
      role="img"
      aria-label="روبوت EduMentor AI"
    >
      {/* قصاصات ملوّنة خلف الروبوت */}
      <g opacity="0.85">
        <rect x="14" y="46" width="7" height="7" rx="1.5" fill="#f59e0b" transform="rotate(20 14 46)" />
        <rect x="196" y="70" width="6" height="6" rx="1.5" fill="#22d3ee" transform="rotate(-15 196 70)" />
        <circle cx="30" cy="120" r="3.5" fill="#a78bfa" />
        <circle cx="188" cy="34" r="3" fill="#f472b6" />
        <rect x="168" y="128" width="6" height="6" rx="1.5" fill="#34d399" transform="rotate(35 168 128)" />
      </g>

      {/* الهوائي */}
      <line x1="110" y1="34" x2="110" y2="14" stroke="#312e81" strokeWidth="4" strokeLinecap="round" />
      <circle cx="110" cy="10" r="6" fill="#312e81" />
      <line x1="76" y1="44" x2="62" y2="24" stroke="#312e81" strokeWidth="4" strokeLinecap="round" />
      <line x1="144" y1="44" x2="158" y2="24" stroke="#312e81" strokeWidth="4" strokeLinecap="round" />

      {/* الأذرع */}
      <path
        d="M46 96c-10 4-14 18-8 28 5 9 17 11 24 5"
        stroke="#a78bfa"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M174 96c10 4 14 18 8 28-5 9-17 11-24 5"
        stroke="#a78bfa"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* الجسم */}
      <rect x="62" y="120" width="96" height="52" rx="24" fill="#ffffff" />
      <rect x="62" y="120" width="96" height="52" rx="24" fill="none" stroke="#e0e7ff" strokeWidth="2" />
      <rect x="92" y="140" width="36" height="9" rx="4.5" fill="#6d28d9" />

      {/* الرأس */}
      <rect x="56" y="38" width="108" height="86" rx="34" fill="#ffffff" />
      <rect x="56" y="38" width="108" height="86" rx="34" fill="none" stroke="#e0e7ff" strokeWidth="2" />
      {/* شاشة الوجه */}
      <rect x="70" y="52" width="80" height="58" rx="26" fill="#111226" />
      <circle cx="93" cy="79" r="9" fill="#22d3ee" />
      <circle cx="127" cy="79" r="9" fill="#22d3ee" />
      <path
        d="M101 96q9 7 18 0"
        stroke="#22d3ee"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* الهيدفون */}
      <rect x="38" y="62" width="20" height="40" rx="10" fill="#a78bfa" />
      <rect x="162" y="62" width="20" height="40" rx="10" fill="#a78bfa" />
    </svg>
  )
}
