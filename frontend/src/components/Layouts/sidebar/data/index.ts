import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MENU PRINCIPAL",
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        items: [
          {
            title: "eCommerce",
            url: "/",
          },
        ],
      },
      {
        title: "Calendário",
        url: "/calendar",
        icon: Icons.Calendar,
        items: [],
      },
      {
        title: "Perfil",
        url: "/profile",
        icon: Icons.User,
        items: [],
      },
      {
        title: "Formulários",
        icon: Icons.Alphabet,
        items: [
          {
            title: "Form Elements",
            url: "/forms/form-elements",
          },
          {
            title: "Form Layout",
            url: "/forms/form-layout",
          },
        ],
      },
      {
        title: "Tabelas",
        url: "/tables",
        icon: Icons.Table,
        items: [
          {
            title: "Tables",
            url: "/tables",
          },
        ],
      },
      {
        title: "Páginas",
        icon: Icons.Alphabet,
        items: [
          {
            title: "Settings",
            url: "/pages/settings",
          },
        ],
      },
    ],
  },
  {
    label: "OUTROS",
    items: [
      {
        title: "Gráficos",
        icon: Icons.PieChart,
        items: [
          {
            title: "Basic Chart",
            url: "/charts/basic-chart",
          },
        ],
      },
      {
        title: "UI Elements",
        icon: Icons.FourCircle,
        items: [
          {
            title: "Alerts",
            url: "/ui-elements/alerts",
          },
          {
            title: "Buttons",
            url: "/ui-elements/buttons",
          },
        ],
      },
      {
        title: "Atenticação",
        icon: Icons.Authentication,
        items: [
          {
            title: "Login",
            url: "/auth/sign-in",
          },
        ],
      },
    ],
  },
];
