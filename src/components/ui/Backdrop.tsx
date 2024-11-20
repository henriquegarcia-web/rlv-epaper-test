interface IBackdropProps {
  type: 'light' | 'dark'
  handleCloseBackdrop: () => void
}

const Backdrop: React.FC<IBackdropProps> = ({ type, handleCloseBackdrop }) => {
  switch (type) {
    case 'dark':
      return (
        <div
          className="!z-[110] fixed top-0 left-0 flex w-full h-full bg-backdrop opacity-70"
          onClick={handleCloseBackdrop}
        />
      )

    case 'light':
      return (
        <div
          className="!z-[10] fixed top-admin-header left-0 flex w-full h-admin-content backdrop-blur-[2px]"
          onClick={handleCloseBackdrop}
        />
      )

    default:
      return null
  }
}

export default Backdrop
