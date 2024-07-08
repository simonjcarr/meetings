interface WidthLayoutProps {
    children: React.ReactNode
}

const WidthLayout: React.FC<WidthLayoutProps> = ({ children  }) => {
  return (
      <div className="px-20">{children}</div>
  )
}

export default WidthLayout