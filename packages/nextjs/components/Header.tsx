"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faBridge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BanknotesIcon, Bars3Icon, BuildingLibraryIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "~~/app/context/LanguageContext";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    label: "CDP",
    href: "/cdp",
    icon: <BuildingLibraryIcon className="h-4 w-4" />,
  },
  {
    label: "Lending",
    href: "/lending",
    icon: <BanknotesIcon className="h-4 w-4" />,
  },
  {
    label: "Bridge",
    href: "https://bridge.connext.network/XOC-from-polygon-to-ethereum?symbol=XOC",
    icon: <FontAwesomeIcon icon={faBridge} />,
  },
  /* {
    label: "Vault",
    href: "/vault",
    icon: <FontAwesomeIcon icon={faVault} className="h-4 w-4" />,
  } */
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        const isExternal = href.startsWith("http"); // Check if the href starts with "http" to determine if it's an external link

        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })} // Add target and rel only for external links
              className={`${
                isActive ? "bg-base-300 shadow-md" : ""
              } hover:bg-neutral hover:text-base-100 hover:shadow-md focus:!bg-base-200 active:!text-neutral-content py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const { t } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );
  const { setLocale, locale } = useTranslation();

  return (
    <div className="sticky top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-accent px-0 sm:px-2">
      <div className="navbar-start sticky w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <HeaderMenuLinks />
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="/xoc-logo.svg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">Xocolatl-XOC</span>
            <span className="text-xs">{t("navDescription")}</span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">
          <HeaderMenuLinks />
        </ul>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
        <select value={locale} onChange={e => setLocale(e.target.value)} className="select select-ghost mx-2">
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </div>
  );
};
