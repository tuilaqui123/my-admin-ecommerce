import {
  BadgePercent,
  BookText,
  ChartPie,
  ContactRound,
  LayoutDashboard,
  PackageSearch,
  Settings,
  UsersRound,
} from "lucide-react"

export const navigation = [
  {
    name: "Dashboard",
    // href: "/dashboard",
    href: "/details",
    icon: LayoutDashboard,
    notifications: false,
    active: false,
  },
  {
    name: "Analytics & Reports",
    href: "/report",
    icon: ChartPie,
    notifications: false,
    active: false,
  },
  {
    name: "Sales Order",
    href: "/sales",
    icon: BookText,
    notifications: 2,
    active: false,
  },
  {
    name: "Products",
    href: "/products/overview",
    icon: PackageSearch,
    notifications: 2,
    active: false,
    children: [
      {
        name: "Overview",
        href: "/products/overview",
        active: false,
      },
      {
        name: "Categories",
        href: "/products/categories",
        active: false,
      },
      {
        name: "Tags",
        href: "/products/tags",
        active: false,
      },
      {
        name: "Stocks",
        href: "/products/stocks",
        active: false,
      },
    ],
  },
  {
    name: "Customers",
    href: "/customers",
    icon: UsersRound,
    notifications: 2,
    active: false,
  },
  {
    name: "Discount",
    href: "/discount",
    icon: BadgePercent,
    notifications: 2,
    active: false,
  },
  {
    name: "Staffs",
    href: "/staffs",
    icon: ContactRound,
    notifications: 2,
    active: false,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
    notifications: 2,
    active: false,
  },
]

// current disable
export const navigationGroup = [
  // {
  //   name: "Products",
  //   href: "#",
  //   icon: PackageSearch,
  //   children: [
  //     {
  //       name: "Items",
  //       href: "/quotes/overview",
  //       active: false,
  //     },
  //     {
  //       name: "Categories",
  //       href: "/products",
  //       active: false,
  //     },
  //     {
  //       name: "Tags",
  //       href: "/products/overview",
  //       active: false,
  //     },
  //     {
  //       name: "Stocks",
  //       href: "/products/stocks",
  //       active: false,
  //     },
  //   ],
  // },
]
