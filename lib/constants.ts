export const STORE_NAME = "Книжная Лавка Студента";
export const CITY = "Новороссийск";
export const ADDRESS = "ул. Революции 1905 г., д. 21";
export const FULL_ADDRESS = `${CITY}, ${ADDRESS}`;

export const PRIMARY_PHONE = "8 8617 306420";
export const PRIMARY_TEL = "tel:+78617306420";
export const CONTACT_LINK = PRIMARY_TEL;

export const TELEGRAM_LABEL = "@lavkastudentanvrs";
export const TELEGRAM_LINK = "https://t.me/lavkastudentanvrs";
export const MAX_LABEL = "Книжная Лавка Студента";
export const VK_LABEL = "lavka_studenta";
export const VK_LINK = "https://m.vk.com/lavka_studenta";

export const WORKING_HOURS = "Время работы уточняется";

export const MAP_EMBED_URL =
  "https://yandex.ru/map-widget/v1/?text=%D0%9D%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%2C%20%D1%83%D0%BB.%20%D0%A0%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8%201905%20%D0%B3.%2C%20%D0%B4.%2021&z=16";
export const MAP_LINK =
  "https://yandex.ru/maps/?text=%D0%9D%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%2C%20%D1%83%D0%BB.%20%D0%A0%D0%B5%D0%B2%D0%BE%D0%BB%D1%8E%D1%86%D0%B8%D0%B8%201905%20%D0%B3.%2C%20%D0%B4.%2021";

export const NAV_ITEMS = [
  { href: "/", label: "Главная" },
  { href: "/recommendations", label: "Рецензии" },
  { href: "/book-club", label: "Книжный клуб" },
  { href: "/#contacts", label: "Контакты" },
] as const;

export const HOME_METADATA = {
  title: "Книжная Лавка Студента — книги, учебники и букинистические издания в Новороссийске",
  description:
    "Книжный магазин в Новороссийске: учебники, методическая литература, наглядные пособия, книги для детей, внеклассное чтение, букинистические издания, рецензии и события книжного клуба.",
} as const;

export const CATALOG_METADATA = {
  title: "Каталог — Книжная Лавка Студента",
  description:
    "Каталог книжного магазина: учебная книга, методическая литература, наглядные пособия, книги для детей, внеклассное чтение и букинистические издания.",
} as const;

export const BOOK_CLUB_METADATA = {
  title: "Книжный клуб — Книжная Лавка Студента",
  description: "Встречи и мероприятия книжного клуба в Книжной Лавке Студента в Новороссийске.",
} as const;

export const RECOMMENDATIONS_METADATA = {
  title: "Рецензии — Книжная Лавка Студента",
  description: "Рецензии, заметки о книгах и выбор Книжной Лавки Студента.",
} as const;
