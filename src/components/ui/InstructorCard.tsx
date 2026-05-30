type InstructorCardProps = {
  name: string
  role: string
  image?: string
}

export function InstructorCard({ name, role, image }: InstructorCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c1428] transition-all duration-300 hover:border-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-slate-700/30 to-[#0a1020]">
        {image ? (
          <img
            src={image}
            alt={`${name}, ${role} instructor at brAInify`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#141c32] to-[#0c1428]">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/50 to-cyan-500/30 text-3xl font-bold text-white/90">
              {name.charAt(0)}
            </span>
            <p className="mt-4 text-xs text-slate-500">Photo coming soon</p>
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c1428] via-[#0c1428]/80 to-transparent" />
      </div>

      <div className="px-4 pb-5 pt-3 text-center">
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="mt-1 text-sm text-cyan-400/90">{role}</p>
      </div>
    </article>
  )
}
