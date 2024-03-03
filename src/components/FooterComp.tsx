import { Navbar, NavbarContent, NavbarItem, colors } from "@nextui-org/react";
import { color } from "framer-motion";

const FooterComp = () => {
  return (
    <>
      <div className="flex h-[7dvh] justify-center items-center">
        <div className="">
          RandomAPI Powered by
          <a
            className="text-blue-800 ms-1 font-bold text-base"
            href="https://twitter.com/Rakesh74969"
          >
            Rakesh
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterComp;
