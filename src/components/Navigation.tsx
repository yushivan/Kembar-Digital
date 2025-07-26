import {
    Dropdown,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle,
} from "flowbite-react";

import Link from "next/link";

export function Navigation() {
    return (
        <Navbar
            className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 font-source px-5 lg:px-40"
            fluid
        >
            <NavbarBrand href="/">
                <span className="self-center">
                    <img src="img/logo.webp" alt="logo" className="w-[120px] lg:w-[150px]" />
                </span>
            </NavbarBrand>
            <div className="flex md:order-2 gap-3 items-center">
                <Link href="/" className="hidden lg:block me-3 py-2 px-2 text-gray-700 hover:text-[#1E61D9]">Log in</Link>
                <Link href="/" target="_blank" className="hidden lg:block bg-[#1E61D9] font-medium text-white hover:bg-black px-5 py-2 transition-all duration-300 rounded-full">
                    Sign up
                </Link>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <Link href="/" className="block text-base me-3 py-2 px-2 text-gray-700 hover:text-[#1E61D9]">Buy your dream</Link>
                <Link href="#" className="block text-base me-3 py-2 px-2 text-gray-700 hover:text-[#1E61D9]">List your property</Link>
                <Link href="#" className="block text-base me-3 py-2 px-2 text-gray-700 hover:text-[#1E61D9]">Blog & FAQ</Link>
                <Link href="#" className="block text-base me-3 py-2 px-2 text-gray-700 hover:text-[#1E61D9]">Agencies</Link>
                <Link href="#" className="block text-base me-3 py-2 px-2 text-gray-700 hover:text-[#1E61D9]">About us</Link>
            </NavbarCollapse>
        </Navbar>
    );
}
