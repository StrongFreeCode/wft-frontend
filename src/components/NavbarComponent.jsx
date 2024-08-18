"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  Badge,
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useGlobalContext } from "@/helpers/Global";
import { usePathname } from "next/navigation";
import { Contact } from "../components/ContactComponent";
const isProduction = process.env.NODE_ENV === 'production';
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
    base: "block py-2 pr-4 pl-3 md:p-0 w-full",
    active: {
      on:
        "bg-cyan-700 text-white dark:text-white  md:text-cyan-700",
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
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
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
          alt="icon lang"
        />
      </div>
      <NavbarCollapse>
        <NavbarLink
          as={Link}
          href="/"
          active={pathname === "/"}
          className={`
            ${pathname === "/"
              ? customTheme.link.active.on
              : customTheme.link.active.off
            } ${customTheme.newtheme.base}
            `}
        >
          {language === "es" ? "Inicio" : "Home"}
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/excursions"
          active={pathname === "/excursions"}
          className={`
          ${pathname === "/excursions"
              ? customTheme.link.active.on
              : customTheme.link.active.off
            } ${customTheme.newtheme.base}
          `}
        >
          {language === "es" ? "Excursiones" : "Excursions"}
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/comments"
          active={pathname === "/comments"}
          className={`
          ${pathname === "/comments"
              ? customTheme.link.active.on
              : customTheme.link.active.off
            } ${customTheme.newtheme.base}
          `}
        >
          {language === "es" ? "Reseñas" : "Reviews"}
        </NavbarLink>

        <NavbarLink
          as={Link}
          href="/blogs"
          disabled={isProduction}
          active={pathname === "/blogs"}
          className={`
          ${pathname === "/blogs"
              ? customTheme.link.active.on
              : customTheme.link.active.off
            } ${customTheme.newtheme.base}
          `}
        >
          {language === "es" ? "Blogs" : "Blogs"}<Badge className="bg-success-400 text-slate-600 ml-1 -mt-2">beta</Badge>
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/about"
          active={pathname === "/about"}
          className={`
          ${pathname === "/about"
              ? customTheme.link.active.on
              : customTheme.link.active.off
            } ${customTheme.newtheme.base}
          `}
        >
          {language === "es" ? "Acerca" : "About"}
        </NavbarLink>
      </NavbarCollapse>

      <div className=" hidden md:flex md:flex-cols-1">
        <Contact />
        <DarkThemeToggle />
        <img
          className="ml-1 max-w-9 max-h-9"
          onClick={handleClick}
          src={language === "es" ? "/es.ico" : "/en.ico"}
          alt='icon lang'
        />
      </div>
    </Navbar>
  );
};