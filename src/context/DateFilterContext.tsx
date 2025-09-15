import { createContext, useContext, useState, ReactNode } from "react";

interface DateFilterContextType {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
}

const DateFilterContext = createContext<DateFilterContextType | undefined>(undefined);

export function DateFilterProvider({ children }: { children: ReactNode }) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  return (
    <DateFilterContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </DateFilterContext.Provider>
  );
}

export function useDateFilter() {
  const context = useContext(DateFilterContext);
  if (context === undefined) {
    throw new Error("useDateFilter must be used within a DateFilterProvider");
  }
  return context;
}