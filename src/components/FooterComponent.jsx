
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from 'flowbite-react';
import SocialMediaIcons from './SocialMediaIcons';

const customTheme = {
  "root": {
    "base": "w-full rounded-none bg-slate-200 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    "container": "w-full p-6",
    "bgDark": "bg-gray-800"
  },
  "groupLink": {
    "base": "flex flex-wrap text-sm text-gray-500 dark:text-white",
    "link": {
      "base": "last:mr-0 md:mr-6 me-4 hover:text-gray-800 dark:hover:text-gray-200",
      "href": "hover:underline"
    },
    "col": "flex-col space-y-4"
  },
  "icon": {
    "base": "text-gray-500 dark:hover:text-white",
    "size": "h-5 w-5"
  },
  "title": {
    "base": "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
  },
  "divider": {
    "base": "w-full my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8"
  },
  "copyright": {
    "base": "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
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

  return (
    <Footer container theme={customTheme}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterLinkGroup>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/excursions">Excursions</FooterLink>
            <FooterLink href="/comments">Reviews</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            {/*   <FooterLink href="/contact">Contact</FooterLink> */}
          </FooterLinkGroup>
        </div>

        <SocialMediaIcons />
        <div itemScope itemType="http://schema.org/LocalBusiness" className="mt-4">
          <div className="flex justify-center">
            <FooterBrand
              href="/assets/wft/logo X en png.png"
              src="/assets/wft/logo X en png.png"
              alt="WonderFullTime"
              name="WonderFullTime"
            />
          </div>
          <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="text-sm text-gray-600 dark:text-gray-300">
            <span itemProp="streetAddress">434 principal street</span>,
            <span itemProp="addressLocality">La Havana</span>,
            <span itemProp="addressRegion">Cuba</span>,
            <span itemProp="postalCode">10700</span>
          </div>
          <p itemProp="telephone" className="text-sm text-gray-600 dark:text-gray-300">+5355244394</p>
          <p itemProp="email" className="text-sm text-gray-600 dark:text-gray-300">info@wonderfulltime.com</p>
        </div>
        <FooterDivider />
        <div className='mt-4'>
          <FooterCopyright href="https://www.strongfreecode.com" by="StrongFreeCode™" year={new Date().getFullYear()} />
        </div>
      </div>
    </Footer>
  );
}