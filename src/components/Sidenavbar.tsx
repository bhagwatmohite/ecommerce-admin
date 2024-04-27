'use client'
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { HomeIcon, LineChartIcon, Package2Icon, PackageIcon, ShoppingCartIcon, TruckIcon, UsersIcon, WalletIcon } from "../icons/Icons";
import Notifications from "./Notifications";

export default function Sidenavbar() {
  const pathname = usePathname()
  return (
    <div className="sticky top-0 left-0 hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 ">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="sticky top-0 flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="">Ezio Admin</span>
          </Link>
          <Notifications />

        </div>
        <div className="static flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className={`${pathname === '/' ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'}`}
              href="/"
            >
              <HomeIcon className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              className={`${pathname === '/dashboard/orders' ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'}`}
              href={{
                pathname: '/dashboard/orders',
              }}
            >
              <ShoppingCartIcon className="h-4 w-4" />
              Orders
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge>
            </Link>
            <Link
              className={`${pathname === '/dashboard/products' ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'}`}
              href={{
                pathname: '/dashboard/products',
              }}
            >
              <PackageIcon className="h-4 w-4" />
              Products
            </Link>
            <Link
              className={`${pathname === '/dashboard/customers' ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'}`}
              href={{
                pathname: '/dashboard/customers',
              }}
            >
              <UsersIcon className="h-4 w-4" />
              Customers
            </Link>
            <Link
              className={`${pathname === '/dashboard/analytics' ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'}`}
              href="#"
            >
              <LineChartIcon className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              className={`${pathname === '/dashboard/shippings' ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'}`}
              href={{
                pathname: '/dashboard/shippings',
              }}
            >
              <TruckIcon className="h-4 w-4" />
              Shipping
            </Link>
            <Link
              className={`${pathname === '/dashboard/payments' ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50" : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'}`}
              href={{
                pathname: '/dashboard/payments',
              }}
            >
              <WalletIcon className="h-4 w-4" />
              Payments
            </Link>

          </nav>
        </div>
      </div>
    </div>
  )
}