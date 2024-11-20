import Image from 'next/image'

interface ILogoProps {
  type: 'default' | 'mono'
  height?: number
}

const Logo: React.FC<ILogoProps> = ({ type, height = 38 }) => {
  switch (type) {
    case 'default':
      return (
        <div className="flex items-center justify-center">
          <Image
            src="/logo_full_default.png"
            alt="Logo"
            width={height * 3.025}
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
            width={height * 3.025}
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
