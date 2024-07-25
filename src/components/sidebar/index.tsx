'use client'

import Image from 'next/image'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import {
  Building2Icon,
  DollarSignIcon,
  HandCoinsIcon,
  LayoutDashboard
} from 'lucide-react'

import { cn } from '@/lib/utils'

interface Paths {
  icon: React.ReactNode
  label: string
  href: string
  active: boolean
}

export const Sidebar = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname()

  const routes: Paths[] = [
    {
      icon: <LayoutDashboard />,
      label: 'Dashboard',
      href: `/`,
      active: pathname === `/`
    },
    {
      icon: <Building2Icon />,
      label: 'Imóveis',
      href: `/imoveis`,
      active: pathname === `/imoveis` || pathname === `/imoveis/novo`
    },
    {
      icon: <HandCoinsIcon />,
      label: 'Comissões',
      href: `/comissoes`,
      active: pathname === `/comissoes` || pathname === `/comissoes/novo`
    },
    {
      icon: <DollarSignIcon />,
      label: 'Pagamentos',
      href: `/pagamentos`,
      active: pathname === `/pagamentos` || pathname === `/pagamentos/novo`
    }
  ]

  return (
    <div
      className="
        w-[250px]
        max-w-[250px]
        h-full
        flex
        flex-col
        bg-violet-100
      "
    >
      <div className="p-4">
        <Link href="/">
          <Image alt="Logo" width={40} height={40} src="/logo.svg" />
        </Link>
      </div>
      <aside className="w-full h-full">
        <nav className={cn('p-2', className)}>
          {routes.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'gap-4 flex p-3 text-gray-500 rounded-lg mb-2',
                item.active
                  ? 'bg-violet-300 text-violet-800'
                  : 'hover:bg-violet-300 hover:text-violet-800'
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  )
}
