import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSignIcon, PackageIcon, UsersIcon } from "@/icons/Icons";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <Card className="bg-green-500 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSignIcon className="w-4 h-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-500 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <UsersIcon className="w-4 h-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-orange-500 text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Most Selling Products</CardTitle>
            <PackageIcon className="w-4 h-4 text-white" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs">+19% from last month</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Most Buying Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Total Spent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>$2,500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>$1,800</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Michael Johnson</TableCell>
                  <TableCell>$1,500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Emily Davis</TableCell>
                  <TableCell>$1,200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>David Lee</TableCell>
                  <TableCell>$1,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#3210</TableCell>
                  <TableCell>Olivia Martin</TableCell>
                  <TableCell>Shipped</TableCell>
                  <TableCell>$42.25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#3209</TableCell>
                  <TableCell>Ava Johnson</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>$74.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#3204</TableCell>
                  <TableCell>Michael Johnson</TableCell>
                  <TableCell>Cancelled</TableCell>
                  <TableCell>$64.75</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#3203</TableCell>
                  <TableCell>Lisa Anderson</TableCell>
                  <TableCell>Shipped</TableCell>
                  <TableCell>$34.50</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#3202</TableCell>
                  <TableCell>Samantha Green</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>$89.99</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Most Selling Products</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Sold</TableHead>
                  <TableHead>Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>T-Shirt</TableCell>
                  <TableCell>1,500</TableCell>
                  <TableCell>$22,500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jeans</TableCell>
                  <TableCell>1,200</TableCell>
                  <TableCell>$36,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sneakers</TableCell>
                  <TableCell>900</TableCell>
                  <TableCell>$27,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dress</TableCell>
                  <TableCell>800</TableCell>
                  <TableCell>$24,000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Jacket</TableCell>
                  <TableCell>700</TableCell>
                  <TableCell>$21,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
