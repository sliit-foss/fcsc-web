interface ButtonProps {
  value: string
  onClick?: () => void
  width?: string
  padding?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button = ({
  value,
  onClick,
  width,
  padding = 'py-2 px-8',
  type = 'button',
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`${padding} ${width} text-white bg-fcsc-blue rounded-lg shadow-md hover:bg-fcsc-blue_light duration-150 transition ease-in font-medium outline-none`}
      type={type}
    >
      {value}
    </button>
  )
}

export default Button
