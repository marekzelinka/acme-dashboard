import { fetchLatestInvoices, fetchRevenue } from "@/app/lib/data";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import { lusitana } from "@/app/ui/fonts";
import clsx from "clsx";

export default async function Page() {
  const revenue = await fetchRevenue();
  const lastestInvoices = await fetchLatestInvoices();

  return (
    <main>
      <h1 className={clsx(lusitana.className, "mb-4 text-xl md:text-2xl")}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"></div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={lastestInvoices} />
      </div>
    </main>
  );
}
