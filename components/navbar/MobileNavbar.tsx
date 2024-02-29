import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import Navbar from "./Navbar";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <FaBars />
      </SheetTrigger>
      <SheetContent side={"top"} className="flex justify-center text-2xl">
        <div className="mt-6 ">
          <Navbar />
        </div>
      </SheetContent>
    </Sheet>
  );
}
