export const BuildingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 19H17V5H7V19H9M15 19V13C15 12.4477 14.5523 12 14 12H10C9.44772 12 9 12.4477 9 13V19M15 19H9"
      stroke="url(#building-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M4 19H20" stroke="url(#building-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="10" y="7" width="4" height="3" rx="0.5" fill="#ffffff" />
    <rect x="10" y="14" width="4" height="3" rx="0.5" fill="#ffffff" />
    <defs>
      <linearGradient id="building-gradient" x1="4" y1="5" x2="20" y2="19" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
)

export const GovernmentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 12L12 3L21 12M7 21V12M17 21V12M12 21V15C12 14.4477 11.5523 14 11 14H13C13.5523 14 14 14.4477 14 15V21M9 21V12M15 21V12"
      stroke="url(#government-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10 17H14V21H10V17Z" fill="#ffffff" />
    <defs>
      <linearGradient id="government-gradient" x1="1" y1="2" x2="23" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A78BFA" />
        <stop offset="1" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
  </svg>
)

export const FinanceIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 22H21M3 10H21M3 18H21M3 14H21M3 6H21M5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2Z"
      stroke="url(#finance-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z"
      fill="#ffffff"
    />
    <path
      d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z"
      fill="#ffffff"
    />
    <defs>
      <linearGradient id="finance-gradient" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FBBF24" />
        <stop offset="1" stopColor="#F59E0B" />
      </linearGradient>
    </defs>
  </svg>
)

export const HealthcareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 12.5L8 16L12 12L16 16L19.5 12.5M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
      stroke="url(#healthcare-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 7V13M9 10H15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="healthcare-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F87171" />
        <stop offset="1" stopColor="#EF4444" />
      </linearGradient>
    </defs>
  </svg>
)

export const LegalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke="url(#legal-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 12H16M8 8H16M8 16H12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <defs>
      <linearGradient id="legal-gradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A3E635" />
        <stop offset="1" stopColor="#84CC16" />
      </linearGradient>
    </defs>
  </svg>
)

export const EducationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 17.5L12 22M12 22H8M12 22H16M12 17.5C14.7614 17.5 17 15.2614 17 12.5C17 9.73858 14.7614 7.5 12 7.5C9.23858 7.5 7 9.73858 7 12.5C7 15.2614 9.23858 17.5 12 17.5ZM12 7.5V2M12 2H8M12 2H16"
      stroke="url(#education-gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="education-gradient" x1="3" y1="4" x2="21" y2="18.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#0EA5E9" />
      </linearGradient>
    </defs>
  </svg>
)
export const AwareIcon = () => (
  <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text
      x="60"
      y="20"
      textAnchor="middle"
      fontSize="20"
      fontWeight="600"
      fontFamily="Arial, sans-serif"
      fill="url(#aware-gradient)"
    >
      aware
    </text>
    <defs>
      <linearGradient id="aware-gradient" x1="0" y1="0" x2="120" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1E90FF" />
        <stop offset="1" stopColor="#0066CC" />
      </linearGradient>
    </defs>
  </svg>
)
