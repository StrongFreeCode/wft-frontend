/* eslint-disable @next/next/no-img-element */

import dataContacts from "@/data/contacts.json";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import avatar from "../../public/assets/avatar2.png";
import Image from "next/image";
import { useGlobalContext } from "@/helpers/Global";
import { HiPhone } from "react-icons/hi";
const customTheme = {
  arrowIcon: "ml-2 h-4 w-4 hidden",
  content: "py-1 focus:outline-none",
  floating: {
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700",
      },
      placement: "-4px",
    },
    base:
      "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
    content: "py-1 text-sm text-gray-700 dark:text-gray-200",
    divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
    header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base:
        "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      icon: "mr-2 h-4 w-4",
    },
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto:
        "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
    },
    target: "w-fit",
  },
  inlineWrapper: "flex items-center",
};
const datos = dataContacts.contacts
export const Contact = () => {
  const { language } = useGlobalContext();
  return (
    <Dropdown
      theme={customTheme}
      dismissOnClick={false}
      className=""
      color=""
      aria-label="Abrir menú desplegable"
      label={
        <HiPhone className="dark:text-slate-400 text-slate-600 text-xl  " />
      }
    >
      <Dropdown.Header>
        <span className="block text-sm"></span>
        <span className="block truncate text-sm font-medium text-center">
          <a
            className="text-blue-500 font-bold  text-xl"
            href="mailto:info@wonderfulltime.com"
          >
            info@wonderfulltime.com
          </a>
        </span>
      </Dropdown.Header>
      {datos.map((i) => (
        <Dropdown.Item
          as={Link}
          href={`https://wa.me/${i.number}?text=${language == "es"
            ? `Hola ${i.nombre.split(" ")[0]} necesito ayuda`
            : `Hi ${i.nombre.split(" ")[0]} need help`
            }`}
          target="_blank"
          className=""
          key={i.id}
        >
          <div className="flex flex-col shadow-2xl dark:shadow-slate-600 m-0 p-2 w-full dark:bg-slate-700 bg-slate-200 rounded-lg hover:scale-105 transition duration-300">
            <div className="flex flex-col-1 justify-left items-center ">
              <Image
                loading="lazy"
                className="rounded-full"
                alt="una imagen de avatar"
                src={avatar}
                width={25}
                height={25}
              />
              <h1 className="text-center text-sm font-semibold ml-2">
                {i.nombre}
              </h1>{" "}
            </div>

            <div className="flex">
              <svg
                className="h-6 w-6 hover:text-blue-400"
                data-slot="icon"
                aria-hidden="true"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Email</title>
                <path
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <h1 className="text-gren-950 dark:text-blue-100 hover:text-blue-500 dark:hover:text-blue-400">
                <a href={`mailto:${i.email}`}>{i.email}</a>
              </h1>
            </div>
            <div className="flex space-x-3">
              <svg
                className="h-6 w-6 fill-current hover:text-[#25D366]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <h1 className="">
                <a
                  href={`https://wa.me/${i.number}?text=${language == "es"
                    ? `Hola ${i.nombre.split(" ")[0]} necesito ayuda`
                    : `Hi ${i.nombre.split(" ")[0]} need help`
                    }`}
                  target="_blank"
                  className="text-green-950 dark:text-green-100 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  +{i.number}
                </a>
              </h1>
            </div>
          </div>
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};
