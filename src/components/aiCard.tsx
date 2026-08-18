type aiCardProps = {
  title: string,
  subtitle: string,
  value: string | null
  className?: string
};

export default function aiCard({
  title,
  subtitle,
  value,
  className,
}:aiCardProps){

  return(
    <div className={`p-6 ${className}`}>
      <h1 className="text-6xl">{title}</h1>
      <h2 className="text-slate-600">{subtitle}</h2>
      <p className="text-xl">{value}</p>
    </div>
  )
}
