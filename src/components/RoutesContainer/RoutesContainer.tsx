import "./RoutesContainer.scss";

type RoutesContainerProps = {
  children: React.ReactNode
}

const RoutesContainer = ({ children }: RoutesContainerProps) => {
  return (
    <div className="RoutesContainer">
      {children}
    </div>
  )
}

export { RoutesContainer };
