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
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import { Contact } from "../components/ContactComponent";
import Image from "next/image";

const isProduction = process.env.NODE_ENV === 'production';

const customTheme = {
  newtheme: {
    base: "md:bg-slate-200 hover:text-black md:px-2 md:py-2.5 md:dark:border-gray-700 md:dark:bg-gray-800 sm:px-4 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
  },
  root: {
    base: "bg-slate-200 px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
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
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0 w-full",
    active: {
      on: "bg-cyan-700 text-white dark:text-white md:text-cyan-700",
      off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    icon: "h-6 w-6 shrink-0",
  },
};

export const NavbarComponent = () => {
  const { language, setLanguage } = useGlobalContext();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Navbar');

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${newLanguage}`);
    router.replace(newPathname);
  };

  const renderNavbarLink = (href, label, active) => {
    const hrefWithLang = `/${language}${href}`;
    return (
      <NavbarLink
        as={Link}
        href={hrefWithLang}
        active={active}
        className={`
        ${active ? customTheme.link.active.on : customTheme.link.active.off} 
        ${customTheme.newtheme.base}
      `}
      >
        {label}
      </NavbarLink>
    );
  };

  return (
    <Navbar fluid theme={customTheme}>
      <NavbarToggle />
      <NavbarBrand as={Link} href="/">
        <Image
          width={50}
          height={50}
          src="/assets/wft/logo X en png.webp"
          className="h-12 ml-12 md:ml-0 sm:h-16"
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
        <select
          className="block ml-1 max-w-9 max-h-9 md:hidden dark:text-slate-100 bg-transparent"
          value={language}
          onChange={handleLanguageChange}
        >
          <option className={`dark:text-slate-800`} value="es">ES</option>
          <option className={`dark:text-slate-800`} value="en">EN</option>
        </select>
      </div>
      <NavbarCollapse>
        {renderNavbarLink("/", t('home'), pathname === `/${language}`)}
        {renderNavbarLink("/excursions", t('excursions'), pathname === `/${language}/excursions`)}
        {renderNavbarLink("/reviews", t('reviews'), pathname === `/${language}/reviews`)}
        {renderNavbarLink("/blogs", t('blogs'), pathname === `/${language}/blogs`)}
        {renderNavbarLink("/about", t('about'), pathname === `/${language}/about`)}
      </NavbarCollapse>
      <div className="hidden md:flex md:flex-cols-1">
        <Contact />
        <DarkThemeToggle />
        <select
          className="ml-1 max-w-9 max-h-9 bg-transparent dark:text-slate-100"
          value={language}
          onChange={handleLanguageChange}
        >
          <option className={`dark:text-slate-800`} value="es">Español</option>
          <option className={`dark:text-slate-800`} value="en">English</option>
        </select>
        <Image
          width={50}
          height={50}
          className="ml-1 max-w-9 max-h-9"
          src={language === "es" ? "/es.ico" : "/en.ico"}
          alt="icon lang"
        />
      </div>
    </Navbar>
  );
};