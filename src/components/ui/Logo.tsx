import Image from 'next/image'

interface ILogoProps {
  type: 'default' | 'mono'
  width?: number
  height?: number
}

const Logo: React.FC<ILogoProps> = ({ type, width = 122, height = 40 }) => {
  switch (type) {
    case 'default':
      return (
        <div className="flex items-center justify-center">
          <Image
            src="/logo_full_default.png"
            alt="Logo"
            width={width}
            height={height}
            priority
          />
        </div>
      )

    case 'mono':
      return (
        <div className="flex items-center justify-center">
          <Image
            src="/logo_full_mono.png"
            alt="Logo"
            width={width}
            height={height}
            priority
          />
        </div>
      )

    default:
      return null
  }
}

export default Logo
