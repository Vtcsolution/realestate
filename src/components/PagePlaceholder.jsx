function PagePlaceholder({ title, description }) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <span className="font-body text-sm font-medium uppercase tracking-widest text-gold">
        Coming soon
      </span>
      <h1 className="mt-4">{title}</h1>
      {description && <p className="mt-4 text-charcoal/70">{description}</p>}
    </section>
  )
}

export default PagePlaceholder
