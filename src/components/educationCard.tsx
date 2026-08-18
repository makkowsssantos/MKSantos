type educationCardProps = {
  title: string,
  subtitle: string,
  value: string | null
  className?: string
};

export default function educationCard({
  title,
  subtitle,
  value,
  className,
}:educationCardProps) {

  return(
    <div className={`p-6 ${className}`}>
      <h1 className="text-xl">{title}</h1>
      <h2 className="text-slate-600">{subtitle}</h2>
      <p className="text-xl">{value}</p>
    </div>
  )

}