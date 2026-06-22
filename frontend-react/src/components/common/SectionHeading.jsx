function SectionHeading({ children, eyebrow }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {children}
      </h2>
    </div>
  )
}

export default SectionHeading
