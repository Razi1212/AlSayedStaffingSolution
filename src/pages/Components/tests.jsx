import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
    Navbar as NavbarComponent,
    NavbarLeft,
    NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "@/components/logos/launch-ui";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50  px-4   bg-BgColor-NavNewColor text-white">
            <div className="fade-bottom absolute left-0 h-18 w-full bg-background/15 backdrop-blur-lg"></div>
            <div className="relative mx-auto max-w-container">
                <NavbarComponent>
                    <NavbarLeft>
                        <a
                            href="/"
                            className="flex items-center gap-2 text-xl font-bold"
                        >
                            <LaunchUI />
                            AlSayed
                        </a>
                        <Navigation />
                    </NavbarLeft>

                    <NavbarRight>
                        <Button variant="default" className='text-black' asChild>
                            <a href="/Jobseekers">Find Jobs</a>
                        </Button>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="shrink-0 md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="grid gap-6 text-lg font-medium">
                                    <a
                                        href="/"
                                        className="flex items-center gap-2 text-xl font-bold"
                                    >
                                        <span>Launch UI</span>
                                    </a>
                                    <a
                                        href="/About"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        About
                                    </a>
                                    <a
                                        href="/Services"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Servicesss
                                    </a>

                                

                                    <a
                                        href="/Employers"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Employeers
                                    </a>

                                    <a
                                        href="/Jobseekers"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Jobseekers
                                    </a>


                                    <a
                                        href="/Contactus"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Contactus
                                    </a>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </NavbarRight>
                </NavbarComponent>
            </div>
        </header>
    );
}
