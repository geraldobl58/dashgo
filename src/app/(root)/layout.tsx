import { Sidebar } from '@/components/sidebar'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default RootLayout
