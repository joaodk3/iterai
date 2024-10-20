import {UserButton} from "@clerk/nextjs"
import MobileSidebar from "./mobile-sidebar"
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet"
import Sidebar from "./sidebar"

const Navbar = () => { 
    return (
        <Sheet>
            <SheetTrigger>
                <div className="flex items-center p-4">
                    <MobileSidebar />
                    <div className="flex w-full justify-end">
                        <UserButton />
                    </div>
                </div>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}

export default Navbar