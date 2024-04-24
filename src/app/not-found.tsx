import { Inter } from "next/font/google";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"] });

const NotFound = () => {
  return (
    <html className="min-h-screen flex" lang="en">
      <body className={cn(inter.className, "flex flex-col bg-orange-50 flex-auto text-indigo-950")}>
        <main className="max-w-screen-2xl px-1 sm:px-2 md:px-3 lg:px-4 xl:px-5 2xl:px-6">Page Not Found</main>
      </body>
    </html>
  );
};

export default NotFound;
