
import { useGlobalContext } from '@/helpers/Global';
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
      "base": "last:mr-0 md:mr-6 me-4",
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
    "base": "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
  },
  "copyright": {
    "base": "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
    "href": "ml-1 hover:underline",
    "span": "ml-1"
  },
  "brand": {
    "base": "mb-4 flex items-center sm:mb-0",
    "img": "mr-3 h-8",
    "span": "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
  }
}

export const FooterComponent = () => {
  const { language } = useGlobalContext()
  return (
    <Footer container theme={customTheme}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="/assets/wft/logo X en png.png"
            src="/assets/wft/logo X en png.png"
            alt="WonderFullTime"
            name="WonderFullTime"
          />
          <FooterLinkGroup>
            {/*  <FooterLink href="/about">{language == 'es' ? 'Acerca' : 'About'}</FooterLink> */}
          </FooterLinkGroup>
        </div>
        <SocialMediaIcons />
        <FooterDivider />
        <FooterCopyright href="https://www.strongfreecode.com" by="StrongFreeCode™" year={new Date().getFullYear()} />
      </div>
    </Footer>
  );
}
