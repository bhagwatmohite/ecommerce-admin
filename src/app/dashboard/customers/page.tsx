import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronLeftIcon, ChevronRightIcon, FilterIcon, MoreHorizontalIcon } from "@/icons/Icons"

export default function Customer() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-4">
        <h1 className="font-semibold text-lg md:text-2xl">
          Customers
          <span className="font-normal text-gray-500 dark:text-gray-400">View and manage your customers</span>
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
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Input className="w-full" placeholder="Search customers..." type="search" />
          </div>
          <Accordion collapsible type="single">
            <AccordionItem value="filters">
              <AccordionTrigger className="flex items-center gap-2">
                {/* <FilterIcon className="h-4 w-4" /> */}
                <FilterIcon className="h-4 w-4" />
                Filters
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="status">Status</Label>
                    {/* <Select id="status"> */}
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    {/* <Select id="location"> */}
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="all">All</SelectItem>
                          <SelectItem value="usa">USA</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="europe">Europe</SelectItem>
                          <SelectItem value="asia">Asia</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="signup-date">Signup Date</Label>
                    <div className="flex gap-2">
                      <Input className="w-full" id="signup-date-from" placeholder="From" type="date" />
                      <Input className="w-full" id="signup-date-to" placeholder="To" type="date" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="order-count">Order Count</Label>
                    <div className="flex gap-2">
                      <Input className="w-full" id="order-count-min" placeholder="Min" type="number" />
                      <Input className="w-full" id="order-count-max" placeholder="Max" type="number" />
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button size="sm" variant="outline">
                      Reset
                    </Button>
                    <Button size="sm">Apply</Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="border shadow-sm rounded-lg p-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Customer</TableHead>
                <TableHead className="min-w-[150px]">Email</TableHead>
                <TableHead className="hidden md:table-cell">Location</TableHead>
                <TableHead className="hidden md:table-cell">Orders</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Olivia Martin</TableCell>
                <TableCell>olivia@example.com</TableCell>
                <TableCell className="hidden md:table-cell">USA</TableCell>
                <TableCell className="hidden md:table-cell">12</TableCell>
                <TableCell className="hidden sm:table-cell">Active</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View customer</DropdownMenuItem>
                      <DropdownMenuItem>Edit customer</DropdownMenuItem>
                      <DropdownMenuItem>Orders</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ava Johnson</TableCell>
                <TableCell>ava@example.com</TableCell>
                <TableCell className="hidden md:table-cell">Canada</TableCell>
                <TableCell className="hidden md:table-cell">7</TableCell>
                <TableCell className="hidden sm:table-cell">Active</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View customer</DropdownMenuItem>
                      <DropdownMenuItem>Edit customer</DropdownMenuItem>
                      <DropdownMenuItem>Orders</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Michael Johnson</TableCell>
                <TableCell>michael@example.com</TableCell>
                <TableCell className="hidden md:table-cell">Europe</TableCell>
                <TableCell className="hidden md:table-cell">3</TableCell>
                <TableCell className="hidden sm:table-cell">Inactive</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View customer</DropdownMenuItem>
                      <DropdownMenuItem>Edit customer</DropdownMenuItem>
                      <DropdownMenuItem>Orders</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Lisa Anderson</TableCell>
                <TableCell>lisa@example.com</TableCell>
                <TableCell className="hidden md:table-cell">Asia</TableCell>
                <TableCell className="hidden md:table-cell">9</TableCell>
                <TableCell className="hidden sm:table-cell">Active</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  )
}