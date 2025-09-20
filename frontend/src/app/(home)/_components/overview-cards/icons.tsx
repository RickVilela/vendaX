import { EyeIcon, CurrencyDollarIcon, CubeIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function DashboardIcons() {
  return (
    <div className="flex gap-6 text-gray-700">
      <EyeIcon className="w-8 h-8" />
      <CurrencyDollarIcon className="w-8 h-8" />
      <CubeIcon className="w-8 h-8" />
      <UserGroupIcon className="w-8 h-8" />
    </div>
  );
}
