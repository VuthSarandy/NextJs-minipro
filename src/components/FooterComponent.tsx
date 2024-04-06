"use client";
import { Footer } from "flowbite-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function FooterComponent() {
  const pathname = usePathname();
  if (pathname === "/dashboard") {
    return null;
  }
  return (
<Footer container>
      <div className="w-full">
        <div className="grid ml-32 w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="/logo2.png"
              alt="Flowbite Logo"
              name="DIVIER"
            />
          </div>
          <div className="grid grid-cols-2 mr-80 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="DIVIER" year={1999} />
  
        </div>
      </div>
    </Footer>

  );
}
