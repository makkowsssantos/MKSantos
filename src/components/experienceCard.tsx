
type experienceCardProps = {
      title: string,
      subtitle: string,
      value: string,
      className?: string
};



export default function experienceCard({
  title,
  subtitle,
  value,
  className,
}:experienceCardProps) {

  return(
    <div className={`w-full max-w-md border mt-10 border-slate-200 p-10 shadow-xs ${className}`}>
      <h1 className="text-6xl">{title}</h1>
      <h2 className="text-slate-600 text-xl">{subtitle}</h2>
      <p className="text-xs">{value}</p>
    </div>

    
  )

}