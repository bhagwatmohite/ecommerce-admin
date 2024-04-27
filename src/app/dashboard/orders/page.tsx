import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "../../../icons/Icons"

export default function Order() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-4">
        <Button size="icon" variant="outline">
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="font-semibold text-lg md:text-2xl">
          Orders
          <span className="font-normal text-gray-500 dark:text-gray-400">Recent orders</span>
        </h1>
        <div className="ml-auto flex items-center gap-2">
          <Button size="icon" variant="outline">
            <ChevronLeftIcon className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          <Button size="icon" variant="outline">
            <ChevronRightIcon className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
      <div className="border shadow-sm rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order</TableHead>
              <TableHead className="min-w-[150px]">Customer</TableHead>
              <TableHead className="hidden md:table-cell">Channel</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">#3210</TableCell>
              <TableCell>Olivia Martin</TableCell>
              <TableCell className="hidden md:table-cell">Online Store</TableCell>
              <TableCell className="hidden md:table-cell">February 20, 2022</TableCell>
              <TableCell className="text-right">$42.25</TableCell>
              <TableCell className="hidden sm:table-cell">Shipped</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <MoreHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View order</DropdownMenuItem>
                    <DropdownMenuItem>Customer details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#3209</TableCell>
              <TableCell>Ava Johnson</TableCell>
              <TableCell className="hidden md:table-cell">Shop</TableCell>
              <TableCell className="hidden md:table-cell">January 5, 2022</TableCell>
              <TableCell className="text-right">$74.99</TableCell>
              <TableCell className="hidden sm:table-cell">Paid</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <MoreHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View order</DropdownMenuItem>
                    <DropdownMenuItem>Customer details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#3204</TableCell>
              <TableCell>Michael Johnson</TableCell>
              <TableCell className="hidden md:table-cell">Shop</TableCell>
              <TableCell className="hidden md:table-cell">August 3, 2021</TableCell>
              <TableCell className="text-right">$64.75</TableCell>
              <TableCell className="hidden sm:table-cell">Unfulfilled</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <MoreHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View order</DropdownMenuItem>
                    <DropdownMenuItem>Customer details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#3203</TableCell>
              <TableCell>Lisa Anderson</TableCell>
              <TableCell className="hidden md:table-cell">Online Store</TableCell>
              <TableCell className="hidden md:table-cell">July 15, 2021</TableCell>
              <TableCell className="text-right">$34.50</TableCell>
              <TableCell className="hidden sm:table-cell">Shipped</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <MoreHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View order</DropdownMenuItem>
                    <DropdownMenuItem>Customer details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#3202</TableCell>
              <TableCell>Samantha Green</TableCell>
              <TableCell className="hidden md:table-cell">Shop</TableCell>
              <TableCell className="hidden md:table-cell">June 5, 2021</TableCell>
              <TableCell className="text-right">$89.99</TableCell>
              <TableCell className="hidden sm:table-cell">Paid</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <MoreHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View order</DropdownMenuItem>
                    <DropdownMenuItem>Customer details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#3201</TableCell>
              <TableCell>Adam Barlow</TableCell>
              <TableCell className="hidden md:table-cell">Online Store</TableCell>
              <TableCell className="hidden md:table-cell">May 20, 2021</TableCell>
              <TableCell className="text-right">$24.99</TableCell>
              <TableCell className="hidden sm:table-cell">Unfulfilled</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <MoreHorizontalIcon className="w-4 h-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View order</DropdownMenuItem>
                    <DropdownMenuItem>Customer details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#3207</TableCell>
              <TableCell>Sophia Anderson</TableCell>
              <TableCell className="hidden md:table-cell">Shop</TableCell>
              <TableCell className="hidden md:table-cell">November 2, 2021</TableCell>
              <TableCell className="text-right">$99.99</TableCell>
              <TableCell className="hidden sm:table-cell">Paid</TableCell>
              <TableCell className="text-right" />
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  )

}