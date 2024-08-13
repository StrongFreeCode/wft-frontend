"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useGlobalContext } from "@/helpers/Global";
import { IS_DEVELOPMENT } from "@/config";
import { usePathname } from "next/navigation";
import { Dropdown } from "flowbite-react";
import { Contact } from "../components/ContactComponent";

const customTheme = {
  newtheme: {
    base:
      "md:bg-slate-200  hover:text-black md:px-2 md:py-2.5 md:dark:border-gray-700 md:dark:bg-gray-800 sm:px-4 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
  },
  root: {
    base:
      "bg-slate-200 px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    rounded: {
      on: "rounded",
      off: "",
    },
    bordered: {
      on: "border",
      off: "",
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  brand: {
    base: "flex items-center",
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list:
      "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0",
    active: {
      on:
        "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
      off:
        "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
  toggle: {
    base:
      "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    icon: "h-6 w-6 shrink-0",
  },
};
export const NavbarComponent = () => {
  const { language, setLanguage } = useGlobalContext();
  const pathname = usePathname();

  function handleClick() {
    return setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  }
  return (
    <Navbar fluid theme={customTheme}>
      <NavbarToggle />
      <NavbarBrand as={Link} href="/">
        <img
          src="/assets/wft/logo X en png.png"
          className="h-12 ml-12 md:ml-0 sm:h-16 "
          alt="Flowbite React Logo"
        />
        <span className="self-center hidden text-xl font-semibold md:block whitespace-nowrap dark:text-white">
          WonderFullTime
        </span>
      </NavbarBrand>
      <div className="flex mr-0 flex-col-1">
        <div className="block md:hidden">
          <Contact />
        </div>
        <DarkThemeToggle className="block md:hidden" />
        <img
          className="block ml-1 max-w-9 max-h-9 md:hidden"
          onClick={handleClick}
          src={language === "es" ? "/es.ico" : "/en.ico"}
          alt=""
        />
      </div>
      <NavbarCollapse>
        <Link
          className={`
            ${pathname === "/"
              ? customTheme.link.active.on
              : customTheme.link.active.off
            } ${customTheme.newtheme.base}
            `}
          href="/"
          active={pathname === "/" ? true : false}
        >
          {language === "es" ? "Inicio" : "Home"}
        </Link>
        <Link
          className={`
          ${pathname === "/excursions"
              ? customTheme.link.active.on
              : customTheme.link.active.off
            } ${customTheme.newtheme.base}
          `}
          href="/excursions"
          active={pathname === "/excursions" ? true : false}
        >
          {language === "es" ? "Excursiones" : "Excursions"}
        </Link>
        <Link
          className={`
          ${pathname === "/comments"
              ? customTheme.link.active.on
              : customTheme.link.active.off
            } ${customTheme.newtheme.base}
          `}
          href="/comments"
          active={pathname === "/comments" ? true : false}
        >
          {language === "es" ? "Reseñas" : "Reviews"}
        </Link>
        <Link
          className={`
          ${pathname === "/about"
              ? customTheme.link.active.on
              : customTheme.link.active.off
            } ${customTheme.newtheme.base}
          `}
          href="/about"
          active={pathname === "/about" ? true : false}
        >
          {language === "es" ? "Acerca" : "About"}
        </Link>
      </NavbarCollapse>

      <div className=" hidden md:flex md:flex-cols-1">
        <Contact />
        <DarkThemeToggle />
        <img
          className="ml-1 max-w-9 max-h-9"
          onClick={handleClick}
          src={language === "es" ? "/es.ico" : "/en.ico"}
          alt=""
        />
      </div>
    </Navbar>
  );
};
