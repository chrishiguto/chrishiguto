export type ButtonProps = {
  children?: React.ReactNode
  icon?: React.ReactNode
}

const Button = ({ children, icon }: ButtonProps) => (
  <button className="py-2 px-5 bg-transparent outline-none cursor-pointer border border-solid border-neutral50 hover:border-neutral60 rounded transition-all">
    <div className="text-text">{!!icon && icon}</div>
    {children}
  </button>
)

export default Button
