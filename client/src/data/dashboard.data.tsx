import { JSX } from "react";

import { IoSettingsOutline, IoStatsChartOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TiMortarBoard, TiThListOutline } from "react-icons/ti";

import Uebersicht from "../Dashboard/DashboardContent/Profil/Uebersicht/Uebersicht";
import Lernen from "../Dashboard/DashboardContent/Lernbereich/Lernen/Lernen";
import Lektionen from "../Dashboard/DashboardContent/Lernbereich/Lektionen/Lektionen";

export type DashboardSidebarSection = {
  section: string;
  categories: DashboardSidebarCategory[];
};

export type DashboardSidebarCategory = {
  category: string;
  urlPath: string;
  iconElement: JSX.Element;
  disabled: boolean;
};

export const dashboardSectionData: DashboardSidebarSection[] = [
  {
    section: "Lernbereich",
    categories: [
      {
        category: "Lernen",
        urlPath: "lernen",
        iconElement: <TiMortarBoard />,
        disabled: false,
      },
      {
        category: "Lektionen",
        urlPath: "lektionen",
        iconElement: <HiOutlineClipboardDocumentList />,
        disabled: false,
      },
    ],
  },
  {
    section: "Profil",
    categories: [
      {
        category: "Übersicht",
        urlPath: "uebersicht",
        iconElement: <TiThListOutline />,
        disabled: false,
      },
      {
        category: "Statistik",
        urlPath: "statistik",
        iconElement: <IoStatsChartOutline />,
        disabled: false,
      },
    ],
  },
  {
    section: "Anderes",
    categories: [
      {
        category: "Multiplayer",
        urlPath: "multiplayer",
        iconElement: <HiOutlineUserGroup />,
        disabled: false,
      },
      {
        category: "Einstellungen",
        urlPath: "einstellungen",
        iconElement: <IoSettingsOutline />,
        disabled: false,
      },
    ],
  },
];

export type DashboardCategory = {
  url: string;
  element: JSX.Element;
};

export const dashboardCategoriesData: DashboardCategory[] = [
  {
    url: "lernen",
    element: <Lernen />,
  },
  {
    url: "lektionen",
    element: <Lektionen />,
  },
  {
    url: "uebersicht",
    element: <Uebersicht />,
  },
  {
    url: "statistik",
    element: <></>,
  },
  {
    url: "multiplayer",
    element: <></>,
  },
  {
    url: "einstellungen",
    element: <></>,
  },
];
