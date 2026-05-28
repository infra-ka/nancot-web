import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { janelinhaMenu } from "../data/janelinhaMenu";
import { MenuItem } from "../types/menu";
import { LocaleCode, locales } from "./locales";

type I18nContextValue = {
  locale: LocaleCode;
  setLocale: (locale: LocaleCode) => void;
  messages: (typeof locales)[LocaleCode];
  menu: MenuItem[];
  translateOption: (groupId: string, optionValue: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<LocaleCode>("en");
  const messages = locales[locale];

  const menu = useMemo(
    () =>
      janelinhaMenu.map((item) => {
        const translated = messages.menuItems[item.id];

        return {
          ...item,
          name: translated?.name ?? item.name,
          description: translated?.description ?? item.description,
          options: item.options?.map((group) => ({
            ...group,
            label: translated?.optionLabels?.[group.id] ?? group.label,
            options: group.options.map((option) => translated?.optionValues?.[option] ?? option)
          }))
        };
      }),
    [messages]
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      messages,
      menu,
      translateOption(groupId, optionValue) {
        const translatedItem = Object.values(messages.menuItems).find((item) => item.optionLabels?.[groupId]);
        return translatedItem?.optionValues?.[optionValue] ?? optionValue;
      }
    }),
    [locale, menu, messages]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
