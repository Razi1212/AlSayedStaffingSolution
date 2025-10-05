// // 'use client';

// // import { useState } from 'react';
// // import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
// // import { motion, AnimatePresence } from 'framer-motion';

// // import Navigation from "@/components/ui/navigation";
// // import { Button } from "@/components/ui/button";
// // import {
// //     Navbar as NavbarComponent,
// //     NavbarLeft,
// //     NavbarRight,
// // } from "@/components/ui/navbar";
// // import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// // import LaunchUI from "@/components/logos/launch-ui";

// // export default function Navbar() {
// //     const [isServicesOpen, setIsServicesOpen] = useState(false);

// //     return (
// //         <header className="sticky top-0 z-50 px-4 bg-BgColor-NavNewColor text-black">
// //             <div className="fade-bottom absolute left-0 h-18 w-full bg-background/15 backdrop-blur-lg"></div>
// //             <div className="relative mx-auto max-w-container">
// //                 <NavbarComponent>
// //                     <NavbarLeft>
// //                         <a
// //                             href="/"
// //                             className="flex items-center gap-2 text-xl font-bold"
// //                         >
// //                             <LaunchUI />

// //                         </a>
// //                         <Navigation />
// //                     </NavbarLeft>

// //                     <NavbarRight>
// //                         <Button variant="default" className='text-black' asChild>
// //                             <a href="/Jobseekers">Find Jobs</a>
// //                         </Button>
// //                         <Sheet>
// //                             <SheetTrigger asChild>
// //                                 <Button
// //                                     variant="ghost"
// //                                     size="icon"
// //                                     className="shrink-0 md:hidden"
// //                                     aria-label="Toggle navigation menu"
// //                                 >
// //                                     <Menu className="h-5 w-5" />
// //                                     <span className="sr-only">Toggle navigation menu</span>
// //                                 </Button>
// //                             </SheetTrigger>
// //                             <SheetContent side="right">
// //                                 <nav className="grid gap-6 text-lg font-medium">
// //                                     <a
// //                                         href="/"
// //                                         className="flex items-center gap-2 text-xl font-bold"
// //                                     >
// //                                         <span>Launch UI</span>
// //                                     </a>

// //                                     <a
// //                                         href="/About"
// //                                         className="text-muted-foreground hover:text-foreground"
// //                                     >
// //                                         About
// //                                     </a>

// //                                     {/* Services Dropdown */}
// //                                     <div>
// //                                         <button
// //                                             onClick={() => setIsServicesOpen(!isServicesOpen)}
// //                                             className="flex w-full items-center justify-between text-muted-foreground hover:text-foreground"
// //                                         >
// //                                             <span>Services</span>
// //                                             {isServicesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
// //                                         </button>

// //                                         <AnimatePresence initial={false}>
// //                                             {isServicesOpen && (
// //                                                 <motion.div
// //                                                     initial={{ opacity: 0, height: 0 }}
// //                                                     animate={{ opacity: 1, height: 'auto' }}
// //                                                     exit={{ opacity: 0, height: 0 }}
// //                                                     transition={{ duration: 0.3 }}
// //                                                     className="ml-4 mt-2 flex flex-col gap-2 text-sm overflow-hidden"
// //                                                 >
// //                                                     <a
// //                                                         href="/Services/JobSeekers"
// //                                                         className="hover:text-foreground text-muted-foreground"
// //                                                     >
// //                                                         Job Seekers
// //                                                     </a>
// //                                                     <a
// //                                                         href="/Services/Employers"
// //                                                         className="hover:text-foreground text-muted-foreground"
// //                                                     >
// //                                                         Employers
// //                                                     </a>
// //                                                 </motion.div>
// //                                             )}
// //                                         </AnimatePresence>
// //                                     </div>


// //                                     <a
// //                                         href="/Employers"
// //                                         className="text-muted-foreground hover:text-foreground"
// //                                     >
// //                                         Employers
// //                                     </a>
// //                                     <a
// //                                         href="/Jobseekers"
// //                                         className="text-muted-foreground hover:text-foreground"
// //                                     >
// //                                         Jobseekers
// //                                     </a>
// //                                     <a
// //                                         href="/Contactus"
// //                                         className="text-muted-foreground hover:text-foreground"
// //                                     >
// //                                         Contact Us
// //                                     </a>
// //                                 </nav>
// //                             </SheetContent>
// //                         </Sheet>
// //                     </NavbarRight>
// //                 </NavbarComponent>
// //             </div>
// //         </header>
// //     );
// // }
// 'use client';

// import { useState } from 'react';
// import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// import Navigation from "@/components/ui/navigation";
// import { Button } from "@/components/ui/button";
// import {
//     Navbar as NavbarComponent,
//     NavbarLeft,
//     NavbarRight,
// } from "@/components/ui/navbar";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import LaunchUI from "@/components/logos/launch-ui";

// export default function Navbar() {
//     const [isServicesOpen, setIsServicesOpen] = useState(false);

//     return (
//         <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md shadow-sm">
//             <div className="relative mx-auto max-w-container px-4">
//                 <NavbarComponent className="flex items-center justify-between py-3">
//                     {/* Left Section */}
//                     <NavbarLeft className="flex items-center gap-6">
//                         <a
//                             href="/"
//                             className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-90 transition"
//                         >
//                             <LaunchUI />
//                             <span className="hidden sm:inline-block">Launch UI</span>
//                         </a>
//                         <div className="hidden md:block">
//                             <Navigation />
//                         </div>
//                     </NavbarLeft>

//                     {/* Right Section */}
//                     <NavbarRight className="flex items-center gap-4">
//                         <Button
//                             variant="default"
//                             className="text-white bg-primary hover:bg-primary/90 transition"
//                             asChild
//                         >
//                             <a href="/Jobseekers">Find Jobs</a>
//                         </Button>

//                         {/* Mobile Menu */}
//                         <Sheet>
//                             <SheetTrigger asChild>
//                                 <Button
//                                     variant="ghost"
//                                     size="icon"
//                                     className="md:hidden hover:bg-accent transition"
//                                     aria-label="Toggle navigation menu"
//                                 >
//                                     <Menu className="h-6 w-6" />
//                                 </Button>
//                             </SheetTrigger>

//                             <SheetContent
//                                 side="right"
//                                 className="bg-white text-foreground p-6"
//                             >
//                                 <nav className="grid gap-4 text-base font-medium">
//                                     <a
//                                         href="/"
//                                         className="flex items-center gap-2 text-lg font-bold text-primary"
//                                     >
//                                         <LaunchUI />
//                                         <span>Launch UI</span>
//                                     </a>

//                                     <hr className="border-border/40 my-3" />

//                                     <a
//                                         href="/About"
//                                         className="hover:text-primary transition-colors"
//                                     >
//                                         About
//                                     </a>

//                                     {/* Services Dropdown */}
//                                     <div>
//                                         <button
//                                             onClick={() => setIsServicesOpen(!isServicesOpen)}
//                                             className="flex w-full items-center justify-between hover:text-primary transition-colors"
//                                         >
//                                             <span>Services</span>
//                                             {isServicesOpen ? (
//                                                 <ChevronUp className="h-4 w-4" />
//                                             ) : (
//                                                 <ChevronDown className="h-4 w-4" />
//                                             )}
//                                         </button>

//                                         <AnimatePresence initial={false}>
//                                             {isServicesOpen && (
//                                                 <motion.div
//                                                     initial={{ opacity: 0, height: 0 }}
//                                                     animate={{ opacity: 1, height: 'auto' }}
//                                                     exit={{ opacity: 0, height: 0 }}
//                                                     transition={{ duration: 0.3 }}
//                                                     className="ml-3 mt-2 flex flex-col gap-2 text-sm text-muted-foreground overflow-hidden"
//                                                 >
//                                                     <a
//                                                         href="/Services/JobSeekers"
//                                                         className="hover:text-primary transition"
//                                                     >
//                                                         Job Seekers
//                                                     </a>
//                                                     <a
//                                                         href="/Services/Employers"
//                                                         className="hover:text-primary transition"
//                                                     >
//                                                         Employers
//                                                     </a>
//                                                 </motion.div>
//                                             )}
//                                         </AnimatePresence>
//                                     </div>

//                                     <a
//                                         href="/Employers"
//                                         className="hover:text-primary transition-colors"
//                                     >
//                                         Employers
//                                     </a>
//                                     <a
//                                         href="/Jobseekers"
//                                         className="hover:text-primary transition-colors"
//                                     >
//                                         Jobseekers
//                                     </a>
//                                     <a
//                                         href="/Contactus"
//                                         className="hover:text-primary transition-colors"
//                                     >
//                                         Contact Us
//                                     </a>
//                                 </nav>
//                             </SheetContent>
//                         </Sheet>
//                     </NavbarRight>
//                 </NavbarComponent>
//             </div>
//         </header>
//     );
// }



'use client';

import { useState } from 'react';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from "@/components/ui/button";
import {
    Navbar as NavbarComponent,
    NavbarLeft,
    NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LaunchUI from "@/components/logos/launch-ui";

export default function Navbar() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-border/40 shadow-sm">
            <div className="relative mx-auto max-w-container px-4">
                <NavbarComponent className="flex items-center justify-between py-4">

                    {/* Logo on Left */}
                    <NavbarLeft className="flex items-center gap-2">
                        <a href="/" className="flex items-center gap-2 text-2xl font-bold text-black hover:opacity-90 transition">
                            <LaunchUI />
                        </a>
                    </NavbarLeft>

                    {/* Center Navigation */}
                    <div className="hidden md:flex items-center gap-12">

                        {/* Links Section */}
                        <div className="flex items-center gap-8 border-r border-border/40 pr-6">
                            {['About', 'Employers', 'Jobseekers', 'Contactus'].map((link) => (
                                <a
                                    key={link}
                                    href={`/${link}`}
                                    className="relative group px-1 py-1 text-base font-medium hover:text-foreground transition"
                                >
                                    {link}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-foreground transition-all group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>

                        {/* Services Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className="flex items-center gap-1 hover:text-foreground transition relative px-2 py-1 rounded-md"
                            >
                                Services <ChevronDown className="h-4 w-4 transition-transform" />
                            </button>
                            <AnimatePresence>
                                {isServicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl p-4 flex flex-col gap-3 z-50"
                                    >
                                        <a href="/Services/JobSeekers" className="hover:text-foreground transition px-2 py-1 rounded-md hover:bg-gray-100">
                                            Job Seekers
                                        </a>
                                        <a href="/Services/Employers" className="hover:text-foreground transition px-2 py-1 rounded-md hover:bg-gray-100">
                                            Employers
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Section */}
                    <NavbarRight className="flex items-center gap-4">
                        <Button
                            variant="default"
                            className="bg-black text-white hover:bg-gray-900 transition"
                            asChild
                        >
                            <a href="/Jobseekers">Find Jobs</a>
                        </Button>

                        {/* Mobile Menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="md:hidden hover:bg-accent transition"
                                    aria-label="Toggle navigation menu"
                                >
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="right" className="bg-white text-foreground p-6">
                                <nav className="flex flex-col gap-6 text-lg font-medium">

                                    {/* Logo */}
                                    <a href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
                                        <LaunchUI />
                                    </a>

                                    {/* Other Pages */}
                                    <div className="flex flex-col gap-3 border-b border-border/40 pb-4">
                                        {['About', 'Employers', 'Jobseekers', 'Contactus'].map((link) => (
                                            <a key={link} href={`/${link}`} className="hover:text-foreground transition px-2 py-1 rounded-md hover:bg-gray-100">
                                                {link}
                                            </a>
                                        ))}
                                    </div>

                                    {/* Services Dropdown */}
                                    <div className="mt-4">
                                        <button
                                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                                            className="flex w-full justify-between hover:text-foreground transition px-2 py-1 rounded-md hover:bg-gray-100"
                                        >
                                            Services
                                            {isServicesOpen ? (
                                                <ChevronUp className="h-4 w-4" />
                                            ) : (
                                                <ChevronDown className="h-4 w-4" />
                                            )}
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {isServicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="ml-4 mt-2 flex flex-col gap-3 text-sm overflow-hidden"
                                                >
                                                    <a href="/Services/JobSeekers" className="hover:text-foreground transition px-2 py-1 rounded-md hover:bg-gray-100">
                                                        Job Seekers
                                                    </a>
                                                    <a href="/Services/Employers" className="hover:text-foreground transition px-2 py-1 rounded-md hover:bg-gray-100">
                                                        Employers
                                                    </a>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </NavbarRight>
                </NavbarComponent>
            </div>
        </header>
    );
}

