"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "@/icons/Icons";
import { useState } from 'react';

// Sample data for payments
const paymentsData = [
  { customer: 'Olivia Martin', amount: '$120.00', method: 'Credit Card', status: 'Paid', date: 'April 15, 2023' },
  { customer: 'Ava Johnson', amount: '$49.00', method: 'PayPal', status: 'Paid', date: 'March 28, 2023' },
  { customer: 'Michael Johnson', amount: '$75.00', method: 'Bank Transfer', status: 'Pending', date: 'May 1, 2023' },
  { customer: 'Lisa Anderson', amount: '$89.00', method: 'Credit Card', status: 'Failed', date: 'April 30, 2023' }
];

export default function Payments() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtering function
  const filterPayments = () => {
    return paymentsData.filter(payment =>
      payment.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.method.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.amount.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-4">
        <Button size="icon" variant="outline">
          <ArrowLeftIcon className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="font-semibold text-lg md:text-2xl">
          Payments
          <span className="font-normal text-gray-500 dark:text-gray-400">View and manage your payments</span>
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
            <Input className="w-full" placeholder="Search payments..." type="search" onChange={e => setSearchQuery(e.target.value)} />
          </div>
          {/* Accordion for filters */}
        </div>
        <div className="border shadow-sm rounded-lg p-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Customer</TableHead>
                <TableHead className="min-w-[150px]">Amount</TableHead>
                <TableHead className="hidden md:table-cell">Payment Method</TableHead>
                <TableHead className="hidden md:table-cell">Status</TableHead>
                <TableHead className="hidden sm:table-cell">Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filterPayments().map((payment, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{payment.customer}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell className="hidden md:table-cell">{payment.method}</TableCell>
                  <TableCell className="hidden md:table-cell">{payment.status}</TableCell>
                  <TableCell className="hidden sm:table-cell">{payment.date}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View payment</DropdownMenuItem>
                        <DropdownMenuItem>Refund</DropdownMenuItem>
                        <DropdownMenuItem>Email receipt</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
