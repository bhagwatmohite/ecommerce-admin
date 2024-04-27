import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeftIcon, ArrowRightIcon, DownloadIcon, FileEditIcon, FilterIcon, TrashIcon, UploadIcon } from "../../../icons/Icons"

export default function Products() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Products</h1>
        <div className="ml-auto flex gap-2">
          <Button size="sm" variant="outline">
            <FilterIcon className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button className="ml-auto" size="sm">
            Add product
          </Button>
        </div>
      </div>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Image</TableHead>
              <TableHead className="max-w-[150px]">Name</TableHead>
              <TableHead className="hidden md:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Inventory</TableHead>
              <TableHead>Vendor</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Sell In Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-yellow-50/50 dark:bg-yellow-900/10">
              <TableCell>
                <img
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">Glimmer Lamps</TableCell>
              <TableCell className="hidden md:table-cell">In Production</TableCell>
              <TableCell>500 in stock</TableCell>
              <TableCell className="hidden md:table-cell">Luminance Creations</TableCell>
              <TableCell className="text-right">$49.99</TableCell>
              <TableCell className="text-right">$99.99</TableCell>
              <TableCell className="text-right">
                <Button size="icon" variant="outline">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button className="ml-2" size="icon" variant="outline">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">Aqua Filters</TableCell>
              <TableCell className="hidden md:table-cell">Available for Order</TableCell>
              <TableCell>750 in stock</TableCell>
              <TableCell className="hidden md:table-cell">HydraClean Solutions</TableCell>
              <TableCell className="text-right">$29.99</TableCell>
              <TableCell className="text-right">$59.99</TableCell>
              <TableCell className="text-right">
                <Button size="icon" variant="outline">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button className="ml-2" size="icon" variant="outline">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="bg-red-50/50 dark:bg-red-900/10">
              <TableCell>
                <img
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">Eco Planters</TableCell>
              <TableCell className="hidden md:table-cell">Backordered</TableCell>
              <TableCell>300 in stock</TableCell>
              <TableCell className="hidden md:table-cell">GreenGrowth Designers</TableCell>
              <TableCell className="text-right">$39.99</TableCell>
              <TableCell className="text-right">$79.99</TableCell>
              <TableCell className="text-right">
                <Button size="icon" variant="outline">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button className="ml-2" size="icon" variant="outline">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">Zest Juicers</TableCell>
              <TableCell className="hidden md:table-cell">Newly Launched</TableCell>
              <TableCell>1000 in stock</TableCell>
              <TableCell className="hidden md:table-cell">FreshTech Appliances</TableCell>
              <TableCell className="text-right">$79.99</TableCell>
              <TableCell className="text-right">$159.99</TableCell>
              <TableCell className="text-right">
                <Button size="icon" variant="outline">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button className="ml-2" size="icon" variant="outline">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow className="bg-green-50/50 dark:bg-green-900/10">
              <TableCell>
                <img
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src="/placeholder.svg"
                  width="64"
                />
              </TableCell>
              <TableCell className="font-medium">Flexi Wearables</TableCell>
              <TableCell className="hidden md:table-cell">Selling Fast</TableCell>
              <TableCell>200 in stock</TableCell>
              <TableCell className="hidden md:table-cell">Vitality Gear Co.</TableCell>
              <TableCell className="text-right">$59.99</TableCell>
              <TableCell className="text-right">$119.99</TableCell>
              <TableCell className="text-right">
                <Button size="icon" variant="outline">
                  <FileEditIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button className="ml-2" size="icon" variant="outline">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <ArrowLeftIcon className="h-4 w-4" />
            Previous
          </Button>
          <Button size="sm" variant="outline">
            Next
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <DownloadIcon className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm" variant="outline">
            <UploadIcon className="h-4 w-4 mr-2" />
            Import
          </Button>
        </div>
      </div>
    </main>
  )
}