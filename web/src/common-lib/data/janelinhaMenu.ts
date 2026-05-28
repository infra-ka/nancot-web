import { MenuCategory, MenuItem } from "../types/menu";

export const categoryLabels: Record<MenuCategory, string> = {
  subs: "Subs",
  chopes: "Draft Beers",
  cafe: "Coffee",
  bebidas: "Other Drinks"
};

export const janelinhaMenu: MenuItem[] = [
  {
    id: "italian-sub",
    category: "subs",
    name: "Italian Sub",
    description:
      "Salami, ham, pepperoni, provolone, lettuce, tomato, red onion, bell pepper, olive oil, oregano.",
    price: 28.9,
    imageEmoji: "🥖",
    options: [
      {
        id: "sauce",
        label: "Add one sauce",
        required: true,
        options: ["Ranch", "Pesto", "Aioli"]
      }
    ]
  },
  {
    id: "philadelphia-sub",
    category: "subs",
    name: "Philadelphia Sub Cheese Steak",
    description: "Sliced beef, bell peppers, onion, and sub bread.",
    price: 32.9,
    imageEmoji: "🥩",
    options: [
      {
        id: "cheese",
        label: "Choose the cheese",
        required: true,
        options: ["Swiss", "Cheddar", "Mozzarella"]
      }
    ]
  },
  {
    id: "chicken-parma",
    category: "subs",
    name: "Chicken Parma",
    description: "Breaded chicken, marinara sauce, mozzarella, parmesan, oregano.",
    price: 30.9,
    imageEmoji: "🍗"
  },
  {
    id: "weiss",
    category: "chopes",
    name: "Weiss",
    description: "Light, refreshing, fruity draft beer with a 5.2% ABV profile.",
    price: 14.9,
    imageEmoji: "🍺"
  },
  {
    id: "pilsen",
    category: "chopes",
    name: "Pilsen",
    description: "Classic, light, and balanced draft beer with 4.7% ABV.",
    price: 13.9,
    imageEmoji: "🍺"
  },
  {
    id: "ipa",
    category: "chopes",
    name: "IPA",
    description: "Intense, fruity, and marked bitterness with 6.5% ABV.",
    price: 16.9,
    imageEmoji: "🍺"
  },
  {
    id: "cappuccino",
    category: "cafe",
    name: "Cappuccino",
    description: "Espresso coffee with steamed milk and creamy foam.",
    price: 11.9,
    imageEmoji: "☕"
  },
  {
    id: "filtered-coffee",
    category: "cafe",
    name: "Filtered coffee",
    description: "Simple, full-bodied coffee made fresh.",
    price: 7.9,
    imageEmoji: "☕"
  },
  {
    id: "water",
    category: "bebidas",
    name: "Water",
    description: "Still or sparkling water.",
    price: 5.9,
    imageEmoji: "💧"
  },
  {
    id: "soda",
    category: "bebidas",
    name: "Soda",
    description: "Assorted canned soda options.",
    price: 7.9,
    imageEmoji: "🥤"
  },
  {
    id: "juice",
    category: "bebidas",
    name: "Juice",
    description: "Selected fresh flavors.",
    price: 9.9,
    imageEmoji: "🧃"
  }
];
