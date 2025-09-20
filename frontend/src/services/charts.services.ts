export async function getDevicesUsedData(
  timeFrame?: "mensal" | "anual" | (string & {}),
) {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = [
    {
      name: "Desktop",
      percentage: 0.65,
      amount: 1625,
    },
    {
      name: "Tablet",
      percentage: 0.1,
      amount: 250,
    },
    {
      name: "Mobile",
      percentage: 0.2,
      amount: 500,
    },
    {
      name: "Desconhecido",
      percentage: 0.05,
      amount: 125,
    },
  ];

  if (timeFrame === "anual") {
    data[0].amount = 19500;
    data[1].amount = 3000;
    data[2].amount = 6000;
    data[3].amount = 1500;
  }

  return data;
}

export async function getPaymentsOverviewData(
  timeFrame?: "mensal" | "anual" | (string & {}),
) {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (timeFrame === "anual") {
    return {
      received: [
        { x: 2020, y: 450 },
        { x: 2021, y: 620 },
        { x: 2022, y: 780 },
        { x: 2023, y: 920 },
        { x: 2024, y: 1080 },
      ],
      due: [
        { x: 2020, y: 1480 },
        { x: 2021, y: 1720 },
        { x: 2022, y: 1950 },
        { x: 2023, y: 2300 },
        { x: 2024, y: 1200 },
      ],
    };
  }

  return {
    received: [
      { x: "Jan", y: 0 },
      { x: "Fev", y: 20 },
      { x: "Mar", y: 35 },
      { x: "Abr", y: 45 },
      { x: "Mai", y: 35 },
      { x: "Jun", y: 55 },
      { x: "Jul", y: 65 },
      { x: "Ago", y: 50 },
      { x: "Set", y: 65 },
      { x: "Out", y: 75 },
      { x: "Nov", y: 60 },
      { x: "Dez", y: 75 },
    ],
    due: [
      { x: "Jan", y: 15 },
      { x: "Fev", y: 9 },
      { x: "Mar", y: 17 },
      { x: "Abr", y: 32 },
      { x: "Mai", y: 25 },
      { x: "Jun", y: 68 },
      { x: "Jul", y: 80 },
      { x: "Ago", y: 68 },
      { x: "Set", y: 84 },
      { x: "Out", y: 94 },
      { x: "Nov", y: 74 },
      { x: "Dez", y: 62 },
    ],
  };
}

export async function getWeeksProfitData(timeFrame?: string) {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (timeFrame === "last week") {
    return {
      sales: [
        { x: "Seg", y: 33 },
        { x: "Ter", y: 44 },
        { x: "Qua", y: 31 },
        { x: "Qui", y: 57 },
        { x: "Sex", y: 12 },
        { x: "Sáb", y: 33 },
        { x: "Dom", y: 55 },
      ],
      revenue: [
        { x: "Seg", y: 17 }, // Mon
        { x: "Ter", y: 7 },  // Tue
        { x: "Qua", y: 10 }, // Wed
        { x: "Qui", y: 23 }, // Thu
        { x: "Sex", y: 13 }, // Fri
        { x: "Sáb", y: 10 }, // Sat
        { x: "Dom", y: 20 }  // Sun
      ],
    };
  }

  return {
    sales: [
      { x: "Seg", y: 41 }, // Mon
      { x: "Ter", y: 67 }, // Tue
      { x: "Qua", y: 22 }, // Wed
      { x: "Qui", y: 43 }, // Thu
      { x: "Sex", y: 65 }, // Fri
      { x: "Sáb", y: 44 }, // Sat
      { x: "Dom", y: 55 }, // Sun
    ],
    revenue: [
      { x: "Seg", y: 20 }, // Mon
      { x: "Ter", y: 8 },  // Tue
      { x: "Qua", y: 13 }, // Wed
      { x: "Qui", y: 27 }, // Thu
      { x: "Sex", y: 15 }, // Fri
      { x: "Sáb", y: 13 }, // Sat
      { x: "Dom", y: 23 }, // Sun
    ],
  }
}

export async function getCampaignVisitorsData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    total_visitors: 784_000,
    performance: -1.5,
    chart: [
      { x: "S", y: 168 },
      { x: "S", y: 385 },
      { x: "M", y: 201 },
      { x: "T", y: 298 },
      { x: "W", y: 187 },
      { x: "T", y: 195 },
      { x: "F", y: 291 },
    ],
  };
}

export async function getVisitorsAnalyticsData() {
  // Fake delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112, 123, 212, 270,
    190, 310, 115, 90, 380, 112, 223, 292, 170, 290, 110, 115, 290, 380, 312,
  ].map((value, index) => ({ x: index + 1 + "", y: value }));
}

export async function getCostsPerInteractionData() {
  return {
    avg_cost: 560.93,
    growth: 2.5,
    chart: [
      {
        name: "Google Ads",
        data: [
          { x: "Sep", y: 15 },
          { x: "Oct", y: 12 },
          { x: "Nov", y: 61 },
          { x: "Dec", y: 118 },
          { x: "Jan", y: 78 },
          { x: "Feb", y: 125 },
          { x: "Mar", y: 165 },
          { x: "Apr", y: 61 },
          { x: "May", y: 183 },
          { x: "Jun", y: 238 },
          { x: "Jul", y: 237 },
          { x: "Aug", y: 235 },
        ],
      },
      {
        name: "Facebook Ads",
        data: [
          { x: "Sep", y: 75 },
          { x: "Oct", y: 77 },
          { x: "Nov", y: 151 },
          { x: "Dec", y: 72 },
          { x: "Jan", y: 7 },
          { x: "Feb", y: 58 },
          { x: "Mar", y: 60 },
          { x: "Apr", y: 185 },
          { x: "May", y: 239 },
          { x: "Jun", y: 135 },
          { x: "Jul", y: 119 },
          { x: "Aug", y: 124 },
        ],
      },
    ],
  };
}