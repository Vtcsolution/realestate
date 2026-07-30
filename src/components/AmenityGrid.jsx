import { Check, DoorOpen, X } from 'lucide-react'
import { AMENITY_META } from '../lib/amenities'

function AmenityGrid({ amenities, columns = 'sm:grid-cols-3' }) {
  return (
    <div className={`grid grid-cols-2 gap-3 ${columns}`}>
      {AMENITY_META.map(({ key, label, icon: Icon }) => {
        const included = Boolean(amenities[key])
        return (
          <div
            key={key}
            className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 font-body text-sm ${
              included
                ? 'border-gold/30 bg-gold/5 text-navy'
                : 'border-neutral-light text-charcoal/40'
            }`}
          >
            <Icon size={16} className={included ? 'text-gold' : 'text-charcoal/30'} />
            <span className="flex-1">{label}</span>
            {included ? (
              <Check size={15} className="text-gold" />
            ) : (
              <X size={15} className="text-charcoal/30" />
            )}
          </div>
        )
      })}
      <div className="flex items-center gap-2.5 rounded-xl border border-neutral-light px-4 py-3 font-body text-sm text-navy">
        <DoorOpen size={16} className="text-gold" />
        <span className="flex-1">Doors</span>
        <span className="font-semibold">{amenities.doors}</span>
      </div>
    </div>
  )
}

export default AmenityGrid
