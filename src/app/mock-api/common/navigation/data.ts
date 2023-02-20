/* tslint:disable:max-line-length */
import { TreoNavigationItem } from "@treo/components/navigation";

export const defaultNavigation: TreoNavigationItem[] = [
  {
    id: "starter",
    title: "Starter",
    subtitle: "Treo Starter Kit",
    type: "group",
    icon: "apps",
    children: [
      {
        id: "starter.example",
        title: "Example component",
        type: "basic",
        link: "/example",
      },
      {
        id: "starter.dummy.1",
        title: "Dummy menu item #1",
        type: "basic",
      },
      {
        id: "starter.dummy.2",
        title: "Dummy menu item #1",
        type: "basic",
      },
    ],
  },
];
export const compactNavigation: TreoNavigationItem[] = [
  {
    id: "starter",
    title: "Starter",
    type: "aside",
    icon: "apps",
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
];

export const futuristicNavigation: TreoNavigationItem[] = [
  {
    id: "starter.example",
    title: "Dashboard",
    type: "basic",
    icon: "heroicons:chart-pie",
    link: "/bank/admin/dashboard",
  },

  {
    id: "starter.dummy.1",
    title: "Applications",
    icon: "heroicons:calendar",
    type: "basic",
    link: "/bank/admin/applications",
  },
  {
    id: "starter.dummy.1",
    title: "Payments",
    icon: "heroicons:calendar",
    type: "basic",
    link: "/bank/admin/payments",
  },
  {
    id: "starter.dummy.1",
    title: "Customers",
    icon: "heroicons:calendar",
    type: "basic",
    link: "/bank/admin/customers",
  },
  {
    id: "starter.dummy.1",
    title: "Revenue Lines",
    icon: "heroicons:calendar",
    type: "basic",
    link: "/bank/admin/revenue",
  },
];
export const horizontalNavigation: TreoNavigationItem[] = [
  {
    id: "starter",
    title: "Starter",
    type: "group",
    icon: "apps",
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
];

export const tubiAdminNavigation: TreoNavigationItem[] = [
  {
    id: "administration",
    title: "Administration",
    subtitle: "System, Tenants, User administration",
    type: "group",
    icon: "heroicons_outline:home",
    children: [
      {
        id: "administration.users",
        title: "Users",
        type: "basic",
        icon: "heroicons_outline:users",
        link: "/admin/administration/users",
      },
    ],
  },
];

export const countyAdminNavigation: TreoNavigationItem[] = [
  {
    id: "county",
    title: "County Administration",
    subtitle: "County Administration",
    type: "group",
    icon: "heroicons_outline:home",
    children: [
      {
        id: "county.applications",
        title: "Applications",
        type: "basic",
        icon: "heroicons_outline:collection",
        link: "/admin/administration/users",
      },
    ],
  },
];

export const bankAdminNavigation: TreoNavigationItem[] = [
  {
    id: "bank-admin-dashboard",
    title: "Dashboard",
    type: "basic",
    icon: "heroicons_outline:home",
    link: "/bank/admin/dashboard",
  },

  {
    id: "bank-admin-customers",
    title: "Customers",
    icon: "heroicons_outline:user-group",
    type: "collapsable",
    children: [
      {
        id: "bank.admin.customers.registeredcustomers",
        title: "Registered Customers",
        type: "basic",
        link: "/bank/admin/profiles",
      },
      {
        id: "bank.county.customers.secondaryaccounts",
        title: "Secondary Accounts",
        type: "basic",
        link: "/bank/admin/customers",
      },
      {
        id: "bank.county.customers.orderingcards",
        title: "Cards Ordered",
        type: "basic",
        link: "/bank/admin/orderedcards",
      },
      {
        id: "bank.county.customers.orderingcheckbooks",
        title: "Checkbooks Ordered",
        type: "basic",
        link: "/bank/admin/orderedcheckbooks",
      },
      {
        id: "bank.county.customers.customerslogs",
        title: "Customers logs",
        type: "basic",
        link: "/bank/admin/customerslogs",
      },
      
    ],
  },
  
  {
    id: "bank-admin-users",
    title: "Users",
    icon: "heroicons_outline:users",
    type: "collapsable",
    children: [
      {
        id: "bank.admin.users.usergroups",
        title: "Groups",
        type: "basic",
        link: "/bank/admin/groups",
      },
    ]
  },
  {
    id: "bank-admin-settings",
    title: "Settings",
    icon: "heroicons_outline:menu-alt-1",
    type: "collapsable",
    children: [
      {
        id: "bank.admin.settings.news",
        title: "News",
        type: "basic",
        link: "/bank/admin/news",
      },
    ]
  },
];
