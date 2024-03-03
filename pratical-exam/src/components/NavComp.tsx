import {MoonIcon, SunIcon} from "@heroicons/react/16/solid";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Switch,
} from "@nextui-org/react";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import RefreshBtn from "./RefreshBtn";
import DarkModeSwitch from "./DarkModeSwitch";

const NavComp = () => {
  return (
    <>
      <div className="flex h-[10dvh] justify-center items-center">
        <Navbar className="" isBordered>
          <NavbarBrand className="font-bold text-xl">RandomUser</NavbarBrand>
          {/* <NavbarItem></NavbarItem> */}
          <NavbarContent justify="end">
            <NavbarItem className="flex justify-center gap-2 ">
              <DarkModeSwitch />
              {/* <Button color="primary">Refetch</Button> */}
              <RefreshBtn />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </>
  );
};

export default NavComp;
