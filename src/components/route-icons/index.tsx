import React from "react"
import Svg, { Path, Rect, Circle, Line } from "react-native-svg"

// 1. Centro de distribuição SP (Warehouse + Delivery truck)
export function WarehouseTruckIcon({ size = 70, color = "#000000" }: { size?: number, color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Warehouse */}
      <Path
        d="M10 40 L45 22 L80 40 L80 65 L65 65"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 40 L10 70 L25 70"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx="45" cy="33" r="3.5" stroke={color} strokeWidth="3.5" />
      {/* Warehouse roller door */}
      <Path
        d="M19 65 L19 48 L71 48 L71 65"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Line x1="19" y1="55" x2="71" y2="55" stroke={color} strokeWidth="2.5" />
      <Line x1="19" y1="62" x2="71" y2="62" stroke={color} strokeWidth="2.5" />

      {/* Truck */}
      <Path
        d="M38 72 L38 58 L72 58 L72 72 Z"
        fill="#FFFFFF"
        stroke={color}
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <Path
        d="M72 63 L83 63 L87 69 L87 75 L72 75"
        fill="#FFFFFF"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Package inside truck */}
      <Rect x="46" y="62" width="12" height="9" stroke={color} strokeWidth="2.5" />
      <Path d="M48 64 L52 68 L56 64" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Truck Wheels */}
      <Circle cx="47" cy="77" r="5" fill="#FFFFFF" stroke={color} strokeWidth="3.5" />
      <Circle cx="77" cy="77" r="5" fill="#FFFFFF" stroke={color} strokeWidth="3.5" />
      <Line x1="52" y1="75" x2="72" y2="75" stroke={color} strokeWidth="3" />
      <Line x1="33" y1="75" x2="42" y2="75" stroke={color} strokeWidth="3" />
    </Svg>
  )
}

// 2. Deslocamento (Route curve with start/end pins)
export function RouteDisplacementIcon({ size = 70, color = "#000000" }: { size?: number, color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Top Pin */}
      <Path
        d="M72 26 C72 21 76 17 80 17 C84 17 88 21 88 26 C88 31 80 39 80 39 C80 39 72 31 72 26 Z"
        stroke={color}
        strokeWidth="3"
        fill="#FFFFFF"
      />
      <Circle cx="80" cy="25" r="2.5" fill={color} />

      {/* Dotted curve route */}
      <Path
        d="M77 38 C60 42 55 52 70 58 C85 64 68 76 43 78"
        stroke={color}
        strokeWidth="3"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />

      {/* Bottom Large Pin */}
      <Path
        d="M30 65 C30 57 37 50 45 50 C53 50 60 57 60 65 C60 74 45 88 45 88 C45 88 30 74 30 65 Z"
        stroke={color}
        strokeWidth="3.5"
        fill={color}
      />
      <Circle cx="45" cy="65" r="5" fill="#FFFFFF" />
    </Svg>
  )
}

// 3. Centro logístico (Warehouse with hierarchy flow boxes)
export function LogisticHubIcon({ size = 70, color = "#000000" }: { size?: number, color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Main Hub Building */}
      <Path
        d="M20 48 L50 24 L80 48 L80 66 L20 66 Z"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#FFFFFF"
      />
      <Circle cx="50" cy="38" r="4" stroke={color} strokeWidth="3" />
      <Rect x="35" y="48" width="30" height="18" stroke={color} strokeWidth="3" fill="#FFFFFF" />
      <Line x1="35" y1="56" x2="65" y2="56" stroke={color} strokeWidth="2" />

      {/* Connection branches */}
      <Line x1="50" y1="66" x2="50" y2="76" stroke={color} strokeWidth="3.5" />
      <Line x1="28" y1="76" x2="72" y2="76" stroke={color} strokeWidth="3.5" />
      <Line x1="28" y1="76" x2="28" y2="82" stroke={color} strokeWidth="3.5" />
      <Line x1="50" y1="76" x2="50" y2="82" stroke={color} strokeWidth="3.5" />
      <Line x1="72" y1="76" x2="72" y2="82" stroke={color} strokeWidth="3.5" />

      {/* Sub-boxes */}
      <Rect x="20" y="82" width="16" height="12" stroke={color} strokeWidth="3" fill="#FFFFFF" />
      <Rect x="42" y="82" width="16" height="12" stroke={color} strokeWidth="3" fill="#FFFFFF" />
      <Rect x="64" y="82" width="16" height="12" stroke={color} strokeWidth="3" fill="#FFFFFF" />
    </Svg>
  )
}

// 4. Coleta pela transportadora (Hand truck / Dolly with package)
export function HandTruckIcon({ size = 70, color = "#000000" }: { size?: number, color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Handle and vertical frame */}
      <Path
        d="M26 22 L38 27 L38 78 L65 78"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Large Wheel */}
      <Circle cx="37" cy="81" r="7.5" stroke={color} strokeWidth="4" fill="#FFFFFF" />

      {/* Heavy Package on dolly */}
      <Rect
        x="42"
        y="50"
        width="28"
        height="26"
        rx="2"
        fill={color}
      />
      {/* Fragile/Up arrows on box */}
      <Path d="M51 68 L51 60 M49 63 L51 60 L53 63" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <Path d="M60 68 L60 60 M58 63 L60 60 L62 63" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  )
}

// 5. Empresa X (Origem) (Office Building)
export function BuildingOriginIcon({ size = 70, color = "#000000" }: { size?: number, color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Left side wing */}
      <Rect x="15" y="46" width="18" height="46" stroke={color} strokeWidth="3.5" fill="#FFFFFF" />
      <Line x1="15" y1="56" x2="33" y2="56" stroke={color} strokeWidth="2.5" />
      <Line x1="15" y1="68" x2="33" y2="68" stroke={color} strokeWidth="2.5" />
      <Line x1="15" y1="80" x2="33" y2="80" stroke={color} strokeWidth="2.5" />

      {/* Main Building tower */}
      <Rect x="33" y="24" width="34" height="68" stroke={color} strokeWidth="3.5" fill="#FFFFFF" />
      {/* Windows grid */}
      <Rect x="40" y="32" width="6" height="6" fill={color} />
      <Rect x="54" y="32" width="6" height="6" fill={color} />
      <Rect x="40" y="44" width="6" height="6" fill={color} />
      <Rect x="54" y="44" width="6" height="6" fill={color} />
      <Rect x="40" y="56" width="6" height="6" fill={color} />
      <Rect x="54" y="56" width="6" height="6" fill={color} />
      <Rect x="40" y="68" width="6" height="6" fill={color} />
      <Rect x="54" y="68" width="6" height="6" fill={color} />
      {/* Front Entrance door */}
      <Rect x="45" y="80" width="10" height="12" stroke={color} strokeWidth="2.5" />

      {/* Right side wing */}
      <Rect x="67" y="52" width="18" height="40" stroke={color} strokeWidth="3.5" fill="#FFFFFF" />
      <Line x1="67" y1="64" x2="85" y2="64" stroke={color} strokeWidth="2.5" />
      <Line x1="67" y1="76" x2="85" y2="76" stroke={color} strokeWidth="2.5" />
    </Svg>
  )
}
