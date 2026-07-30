import {
  Armchair,
  ArrowUpDown,
  Dumbbell,
  Flame,
  PawPrint,
  ShieldCheck,
  Snowflake,
  Trees,
  Waves,
  Wifi,
  Car,
  Zap,
} from 'lucide-react'

export const AMENITY_META = [
  { key: 'pool', label: 'Swimming Pool', icon: Waves },
  { key: 'wifi', label: 'High-Speed Wifi', icon: Wifi },
  { key: 'garage', label: 'Garage', icon: Car },
  { key: 'gym', label: 'Gym', icon: Dumbbell },
  { key: 'garden', label: 'Garden', icon: Trees },
  { key: 'security', label: '24/7 Security', icon: ShieldCheck },
  { key: 'airConditioning', label: 'Air Conditioning', icon: Snowflake },
  { key: 'elevator', label: 'Elevator', icon: ArrowUpDown },
  { key: 'fireplace', label: 'Fireplace', icon: Flame },
  { key: 'furnished', label: 'Furnished', icon: Armchair },
  { key: 'petFriendly', label: 'Pet Friendly', icon: PawPrint },
  { key: 'generator', label: 'Backup Generator', icon: Zap },
]
