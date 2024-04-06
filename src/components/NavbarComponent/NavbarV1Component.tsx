"use client";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";

export default function NavbarV1Component() {
  return (
    <Navbar className="bg-sec">
      <NavbarBrand href="/">
        <Image
          src="/logo2.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
          width={50}
          height={100}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          DIVIER
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 sm:hidden md:block lg:block">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="/my.jpeg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Vuth Sarandy</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Wishlist</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" className="text-lg" active>
          Home
        </NavbarLink>
        <NavbarLink href="/policy" className="text-lg text-primaryColor">
          Policy
        </NavbarLink>
        <NavbarLink href="/dashboard" className="text-lg text-primaryColor">
          Dashboard
        </NavbarLink>
        <NavbarLink href="/about" className="text-lg text-primaryColor">
          About-Us
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
