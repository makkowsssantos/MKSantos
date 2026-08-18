type stackCardProps = {
  title: string,
  subtitle: string,
  value: string | null
  className?: string
};

export default function stackCard({
  title,
  subtitle,
  value,
  className,
}:stackCardProps) {

  return(
    <div className={`p-3 ${className}`}>
      <h1 className="text-sm text-slate-700">{title}</h1>
      <h2 className="text-slate-600 text-xs">{subtitle}</h2>
      <p className="text-xl">{value}</p>
    </div>
  )

}