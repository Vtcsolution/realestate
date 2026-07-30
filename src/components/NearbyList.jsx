import { MapPin } from 'lucide-react'

function NearbyList({ nearby, columns = 'sm:grid-cols-2' }) {
  return (
    <div className={`grid grid-cols-1 gap-3 ${columns}`}>
      {nearby.map((place) => (
        <div
          key={place.name}
          className="flex items-center justify-between rounded-xl border border-neutral-light bg-white px-4 py-3 font-body text-sm"
        >
          <span className="flex items-center gap-2 text-charcoal/80">
            <MapPin size={15} className="text-gold" />
            {place.name}
          </span>
          <span className="font-medium text-navy">{place.distance}</span>
        </div>
      ))}
    </div>
  )
}

export default NearbyList
