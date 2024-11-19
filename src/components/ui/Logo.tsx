import Image from 'next/image'

interface ILogoProps {}

const Logo: React.FC<ILogoProps> = ({}) => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/logo_full.png" alt="Logo" width={121} height={40} priority />
    </div>
  )
}

export default Logo
