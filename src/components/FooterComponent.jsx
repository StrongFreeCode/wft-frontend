'use client'
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';
import SocialMediaIcons from './SocialMediaIcons';
import { useGlobalContext } from '@/helpers/Global';
import Link from 'next/link';
import dataContacts from "../data/contacts.json";

const customTheme = {
  "root": {
    "base": "w-full rounded-none bg-slate-100 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    "container": "w-full p-6",
    "bgDark": "bg-gray-800"
  },
  "groupLink": {
    "base": "flex flex-wrap text-sm text-gray-800 dark:text-white",
    "link": {
      "base": "last:mr-0 md:mr-6 me-4 hover:text-gray-800 dark:hover:text-gray-200",
      "href": "hover:underline"
    },
    "col": "flex-col space-y-4"
  },
  "icon": {
    "base": "text-gray-800 dark:hover:text-white",
    "size": "h-5 w-5"
  },
  "title": {
    "base": "mb-6 text-sm font-semibold uppercase text-gray-800 dark:text-white"
  },
  "divider": {
    "base": "w-full my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8"
  },
  "copyright": {
    "base": "text-sm sm:text-center text-gray-800 dark:text-gray-200",
    "href": "ml-1 hover:underline",
    "span": "ml-1"
  },
  "brand": {
    "base": "mb-4 flex items-center sm:mb-0 hover:opacity-80",
    "img": "mr-3 h-8",
    "span": "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
  }
}

export const FooterComponent = () => {
  const { language } = useGlobalContext()

  return (
    <Footer container theme={customTheme} className='border-t-4 border-dotted border-black dark:border-white'>
      <div className="w-full text-center">
        <div className="flex justify-center space-x-4 p-6 ">
          <FooterLinkGroup>
            <FooterLink className={'text-gray-800 dark:text-gray-200'} href={`/${language}`}>Home</FooterLink>
            <FooterLink className={'text-gray-800 dark:text-gray-200'} href={`/${language}/excursions`}>Excursions</FooterLink>
            <FooterLink className={'text-gray-800 dark:text-gray-200'} href={`/${language}/reviews`}>Reviews</FooterLink>
            <FooterLink className={'text-gray-800 dark:text-gray-200'} href={`/${language}/about`}>About</FooterLink>
          </FooterLinkGroup>
        </div>

        <SocialMediaIcons />
        <div itemScope itemType="http://schema.org/LocalBusiness" className="mt-4">
          <div className="flex justify-center mb-4">
            <FooterBrand
              href="/assets/wft/logo X en png.webp"
              src="/assets/wft/logo X en png.webp"
              alt="Logo de WFT"
              name="WonderFullTime"
            />
          </div>
          <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="text-sm text-gray-800 dark:text-gray-300">
            {/*    <span itemProp="streetAddress">434 principal street</span>, */}
            <span itemProp="addressLocality">La Havana</span>,
            <span itemProp="addressRegion">Cuba</span>,
            <span itemProp="postalCode">10700</span>
          </div>
          <p itemProp="telephone" className="text-sm text-gray-800 dark:text-gray-300">{dataContacts.contacts[1].number}</p>
          <p itemProp="email" className="text-sm text-gray-800 dark:text-gray-300">{dataContacts.contacts[1].email}</p>
        </div>

        <FooterDivider />
        <div className='flex text-xs md:text-md justify-center '>
          <Link href={`/${language}/privacy-policy`} className="uppercase px-3 text-gray-800 dark:text-gray-200">Privacy Policy</Link>
          <Link href={`/${language}/cookiepolicy`} className="uppercase px-3 text-gray-800 dark:text-gray-200">Cookie Policy</Link>
          <Link href={`/${language}/legal-notice`} className="uppercase px-3 text-gray-800 dark:text-gray-200">Terms & Conditions</Link>
          <Link href={`/${language}/contacus`} className="uppercase px-3 text-gray-800 dark:text-gray-200">Contact Us</Link>
        </div>
        <div className='mt-4'>
          <FooterCopyright className='text-gray-800 dark:text-gray-200' href="https://www.strongfreecode.com" by="StrongFreeCode™" year={new Date().getFullYear()} />
        </div>
      </div>
    </Footer>
  );
}