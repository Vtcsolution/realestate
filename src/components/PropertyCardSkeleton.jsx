function PropertyCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-light bg-white shadow-sm">
      <div className="aspect-[4/3] animate-pulse bg-neutral-light" />
      <div className="p-6">
        <div className="h-5 w-3/4 animate-pulse rounded bg-neutral-light" />
        <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-neutral-light" />

        <div className="mt-5 flex items-center gap-5 border-t border-neutral-light pt-4">
          <div className="h-4 w-14 animate-pulse rounded bg-neutral-light" />
          <div className="h-4 w-14 animate-pulse rounded bg-neutral-light" />
          <div className="h-4 w-16 animate-pulse rounded bg-neutral-light" />
        </div>

        <div className="mt-6 h-10 w-full animate-pulse rounded-full bg-neutral-light" />
      </div>
    </div>
  )
}

export default PropertyCardSkeleton
