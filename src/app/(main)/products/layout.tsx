"use client"
import { TabNavigation, TabNavigationLink } from "@/components/TabNavigation"
import { navigation } from "@/data/routePath"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const productsChildren = navigation.find(
    (item) => item.href == pathname,
  )?.children
  return (
    <div className="relative">
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Products Overview
      </h1>
      <TabNavigation className="mt-4 sm:mt-6 lg:mt-10">
        {productsChildren?.map((item) => (
          <TabNavigationLink
            key={item.name}
            asChild
            active={pathname == item.href}
          >
            <Link href={item.href}>{item.name}</Link>
          </TabNavigationLink>
        ))}
      </TabNavigation>
      <div>{children}</div>
    </div>
  )
}
