import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CalendarBox from "@/components/CalenderBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendário",
  // other metadata
};

const CalendarPage = () => {
  return (
    <>
      <Breadcrumb pageName="Calendário" />

      <CalendarBox />
    </>
  );
};

export default CalendarPage;
