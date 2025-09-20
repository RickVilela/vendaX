import { compactFormat } from "@/lib/format-number";
import { getOverviewData } from "../../fetch";
import { OverviewCard } from "./card";

import {
  ShoppingCartIcon,  // vendas
  DocumentTextIcon,  // contratos
  UserGroupIcon,     // clientes
  CurrencyDollarIcon // receita
} from "@heroicons/react/24/outline";

export async function OverviewCardsGroup() {
  const { sales, contracts, clients, revenue } = await getOverviewData();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard
        label="Total de Vendas"
        data={{
          ...sales,
          value: compactFormat(sales.value),
        }}
        Icon={ShoppingCartIcon}
      />

      <OverviewCard
        label="Total de Contratos"
        data={{
          ...contracts,
          value: compactFormat(contracts.value),
        }}
        Icon={DocumentTextIcon}
      />

      <OverviewCard
        label="Total de Clientes"
        data={{
          ...clients,
          value: compactFormat(clients.value),
        }}
        Icon={UserGroupIcon}
      />

      <OverviewCard
        label="Receita"
        data={{
          ...revenue,
          value: "R$" + compactFormat(revenue.value),
        }}
        Icon={CurrencyDollarIcon}
      />
    </div>
  );
}
