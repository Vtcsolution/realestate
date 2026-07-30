function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-neutral-light bg-white p-6 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
        <Icon size={22} />
      </span>
      <span className="mt-4 font-heading text-2xl font-bold text-navy">{value}</span>
      <span className="mt-1 font-body text-sm text-charcoal/60">{label}</span>
    </div>
  )
}

export default StatCard
