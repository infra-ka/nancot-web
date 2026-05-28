import { MenuCategory } from "../types/menu";

export type LocaleCode = "en" | "pt-BR" | "es" | "fr" | "it" | "de" | "ja" | "zh-CN";

export type LocaleMessages = {
  languageName: string;
  app: {
    subtitle: string;
    badge: string;
    imageAlt: string;
    imageOpen: string;
    imageModalTitle: string;
    languageLabel: string;
    openCart: string;
    physicalQrDetected: string;
  };
  mission: {
    label: string;
    text: string;
  };
  categories: Record<MenuCategory, string>;
  product: {
    customizable: string;
    select: string;
    selectAria: string;
    customizeOrder: string;
    closeModal: string;
    quantity: string;
    decreaseQuantity: string;
    increaseQuantity: string;
    addToOrder: string;
    nextStep: string;
  };
  cart: {
    title: string;
    close: string;
    empty: string;
    subtotal: string;
    finishOrder: string;
    decrease: string;
    increase: string;
    remove: string;
  };
  checkout: {
    close: string;
    eyebrow: string;
    finishOrder: string;
    confirmedTitle: string;
    confirmedMessage: string;
    total: string;
    paymentMethod: string;
    pix: string;
    credit: string;
    debit: string;
    printedName: string;
    cardNumber: string;
    expirationDate: string;
    cvv: string;
    simulateCardPayment: string;
  };
  pix: {
    qrLabel: string;
    codeLabel: string;
    copy: string;
    paid: string;
    scan: string;
    copied: string;
  };
  camera: {
    close: string;
    eyebrow: string;
    title: string;
    copy: string;
    preview: string;
    denied: string;
    unsupported: string;
    allow: string;
    simulate: string;
  };
  menuItems: Record<
    string,
    {
      name: string;
      description: string;
      optionLabels?: Record<string, string>;
      optionValues?: Record<string, string>;
    }
  >;
};

const menuItems = {
  en: {
    "italian-sub": {
      name: "Italian Sub",
      description:
        "Salami, ham, pepperoni, provolone, lettuce, tomato, red onion, bell pepper, olive oil, oregano.",
      optionLabels: { sauce: "Add one sauce" },
      optionValues: { Ranch: "Ranch", Pesto: "Pesto", Aioli: "Aioli" }
    },
    "philadelphia-sub": {
      name: "Philadelphia Sub Cheese Steak",
      description: "Sliced beef, bell peppers, onion, and sub bread.",
      optionLabels: { cheese: "Choose the cheese" },
      optionValues: { Swiss: "Swiss", Cheddar: "Cheddar", Mozzarella: "Mozzarella" }
    },
    "chicken-parma": {
      name: "Chicken Parma",
      description: "Breaded chicken, marinara sauce, mozzarella, parmesan, oregano."
    },
    weiss: { name: "Weiss", description: "Light, refreshing, fruity draft beer with a 5.2% ABV profile." },
    pilsen: { name: "Pilsen", description: "Classic, light, and balanced draft beer with 4.7% ABV." },
    ipa: { name: "IPA", description: "Intense, fruity, and marked bitterness with 6.5% ABV." },
    cappuccino: { name: "Cappuccino", description: "Espresso coffee with steamed milk and creamy foam." },
    "filtered-coffee": { name: "Filtered coffee", description: "Simple, full-bodied coffee made fresh." },
    water: { name: "Water", description: "Still or sparkling water." },
    soda: { name: "Soda", description: "Assorted canned soda options." },
    juice: { name: "Juice", description: "Selected fresh flavors." }
  },
  "pt-BR": {
    "italian-sub": {
      name: "Sub Italiano",
      description: "Salame, presunto, pepperoni, provolone, alface, tomate, cebola roxa, pimentao, azeite e oregano.",
      optionLabels: { sauce: "Adicione um molho" },
      optionValues: { Ranch: "Ranch", Pesto: "Pesto", Aioli: "Aioli" }
    },
    "philadelphia-sub": {
      name: "Philadelphia Sub Cheese Steak",
      description: "Carne fatiada, pimentoes, cebola e pao sub.",
      optionLabels: { cheese: "Escolha o queijo" },
      optionValues: { Swiss: "Suico", Cheddar: "Cheddar", Mozzarella: "Mucarela" }
    },
    "chicken-parma": { name: "Chicken Parma", description: "Frango empanado, molho marinara, mucarela, parmesao e oregano." },
    weiss: { name: "Weiss", description: "Chope leve, refrescante e frutado com 5,2% ABV." },
    pilsen: { name: "Pilsen", description: "Chope classico, leve e equilibrado com 4,7% ABV." },
    ipa: { name: "IPA", description: "Intensa, frutada e com amargor marcante, 6,5% ABV." },
    cappuccino: { name: "Cappuccino", description: "Cafe espresso com leite vaporizado e espuma cremosa." },
    "filtered-coffee": { name: "Cafe filtrado", description: "Simples, encorpado e feito na hora." },
    water: { name: "Agua", description: "Agua com ou sem gas." },
    soda: { name: "Refrigerante", description: "Diversas opcoes em lata." },
    juice: { name: "Suco", description: "Sabores selecionados." }
  },
  es: {
    "italian-sub": {
      name: "Sub italiano",
      description: "Salami, jamon, pepperoni, provolone, lechuga, tomate, cebolla roja, pimiento, aceite de oliva y oregano.",
      optionLabels: { sauce: "Agrega una salsa" },
      optionValues: { Ranch: "Ranch", Pesto: "Pesto", Aioli: "Aioli" }
    },
    "philadelphia-sub": {
      name: "Philadelphia Sub Cheese Steak",
      description: "Carne rebanada, pimientos, cebolla y pan sub.",
      optionLabels: { cheese: "Elige el queso" },
      optionValues: { Swiss: "Suizo", Cheddar: "Cheddar", Mozzarella: "Mozzarella" }
    },
    "chicken-parma": { name: "Chicken Parma", description: "Pollo empanizado, salsa marinara, mozzarella, parmesano y oregano." },
    weiss: { name: "Weiss", description: "Cerveza tirada ligera, refrescante y frutal con 5,2% ABV." },
    pilsen: { name: "Pilsen", description: "Cerveza tirada clasica, ligera y equilibrada con 4,7% ABV." },
    ipa: { name: "IPA", description: "Intensa, frutal y con amargor marcado, 6,5% ABV." },
    cappuccino: { name: "Capuchino", description: "Cafe espresso con leche vaporizada y espuma cremosa." },
    "filtered-coffee": { name: "Cafe filtrado", description: "Simple, con cuerpo y preparado al momento." },
    water: { name: "Agua", description: "Agua con o sin gas." },
    soda: { name: "Refresco", description: "Varias opciones en lata." },
    juice: { name: "Jugo", description: "Sabores seleccionados." }
  },
  fr: {
    "italian-sub": {
      name: "Sub italien",
      description: "Salami, jambon, pepperoni, provolone, laitue, tomate, oignon rouge, poivron, huile d'olive et origan.",
      optionLabels: { sauce: "Ajoutez une sauce" },
      optionValues: { Ranch: "Ranch", Pesto: "Pesto", Aioli: "Aioli" }
    },
    "philadelphia-sub": {
      name: "Philadelphia Sub Cheese Steak",
      description: "Boeuf tranche, poivrons, oignon et pain sub.",
      optionLabels: { cheese: "Choisissez le fromage" },
      optionValues: { Swiss: "Suisse", Cheddar: "Cheddar", Mozzarella: "Mozzarella" }
    },
    "chicken-parma": { name: "Chicken Parma", description: "Poulet pane, sauce marinara, mozzarella, parmesan et origan." },
    weiss: { name: "Weiss", description: "Biere pression legere, rafraichissante et fruitee avec 5,2% ABV." },
    pilsen: { name: "Pilsen", description: "Biere pression classique, legere et equilibree avec 4,7% ABV." },
    ipa: { name: "IPA", description: "Intense, fruitee et avec une amertume marquee, 6,5% ABV." },
    cappuccino: { name: "Cappuccino", description: "Cafe espresso avec lait vapeur et mousse cremeuse." },
    "filtered-coffee": { name: "Cafe filtre", description: "Simple, corse et prepare frais." },
    water: { name: "Eau", description: "Eau plate ou petillante." },
    soda: { name: "Soda", description: "Plusieurs options en canette." },
    juice: { name: "Jus", description: "Saveurs selectionnees." }
  },
  it: {
    "italian-sub": {
      name: "Sub italiano",
      description: "Salame, prosciutto, pepperoni, provolone, lattuga, pomodoro, cipolla rossa, peperone, olio d'oliva e origano.",
      optionLabels: { sauce: "Aggiungi una salsa" },
      optionValues: { Ranch: "Ranch", Pesto: "Pesto", Aioli: "Aioli" }
    },
    "philadelphia-sub": {
      name: "Philadelphia Sub Cheese Steak",
      description: "Manzo affettato, peperoni, cipolla e pane sub.",
      optionLabels: { cheese: "Scegli il formaggio" },
      optionValues: { Swiss: "Svizzero", Cheddar: "Cheddar", Mozzarella: "Mozzarella" }
    },
    "chicken-parma": { name: "Chicken Parma", description: "Pollo impanato, salsa marinara, mozzarella, parmigiano e origano." },
    weiss: { name: "Weiss", description: "Birra alla spina leggera, rinfrescante e fruttata con 5,2% ABV." },
    pilsen: { name: "Pilsen", description: "Birra alla spina classica, leggera ed equilibrata con 4,7% ABV." },
    ipa: { name: "IPA", description: "Intensa, fruttata e con amaro marcato, 6,5% ABV." },
    cappuccino: { name: "Cappuccino", description: "Caffe espresso con latte vaporizzato e schiuma cremosa." },
    "filtered-coffee": { name: "Caffe filtrato", description: "Semplice, corposo e preparato al momento." },
    water: { name: "Acqua", description: "Acqua naturale o frizzante." },
    soda: { name: "Bibita", description: "Diverse opzioni in lattina." },
    juice: { name: "Succo", description: "Gusti selezionati." }
  },
  de: {
    "italian-sub": {
      name: "Italienischer Sub",
      description: "Salami, Schinken, Pepperoni, Provolone, Salat, Tomate, rote Zwiebel, Paprika, Olivenol und Oregano.",
      optionLabels: { sauce: "Eine Sauce hinzufugen" },
      optionValues: { Ranch: "Ranch", Pesto: "Pesto", Aioli: "Aioli" }
    },
    "philadelphia-sub": {
      name: "Philadelphia Sub Cheese Steak",
      description: "Geschnittenes Rindfleisch, Paprika, Zwiebel und Sub-Brot.",
      optionLabels: { cheese: "Kase auswahlen" },
      optionValues: { Swiss: "Schweizer", Cheddar: "Cheddar", Mozzarella: "Mozzarella" }
    },
    "chicken-parma": { name: "Chicken Parma", description: "Paniertes Huhn, Marinara-Sauce, Mozzarella, Parmesan und Oregano." },
    weiss: { name: "Weiss", description: "Leichtes, erfrischendes und fruchtiges Fassbier mit 5,2% ABV." },
    pilsen: { name: "Pilsen", description: "Klassisches, leichtes und ausgewogenes Fassbier mit 4,7% ABV." },
    ipa: { name: "IPA", description: "Intensiv, fruchtig und mit markanter Bitterkeit, 6,5% ABV." },
    cappuccino: { name: "Cappuccino", description: "Espresso mit aufgeschaumter Milch und cremigem Schaum." },
    "filtered-coffee": { name: "Filterkaffee", description: "Einfach, vollmundig und frisch zubereitet." },
    water: { name: "Wasser", description: "Still oder sprudelnd." },
    soda: { name: "Limonade", description: "Verschiedene Dosenoptionen." },
    juice: { name: "Saft", description: "Ausgewahlte Sorten." }
  },
  ja: {
    "italian-sub": { name: "イタリアンサブ", description: "サラミ、ハム、ペパロニ、プロヴォローネ、レタス、トマト、赤玉ねぎ、ピーマン、オリーブオイル、オレガノ。", optionLabels: { sauce: "ソースを1つ追加" }, optionValues: { Ranch: "ランチ", Pesto: "ペスト", Aioli: "アイオリ" } },
    "philadelphia-sub": { name: "フィラデルフィア・チーズステーキサブ", description: "薄切りビーフ、ピーマン、玉ねぎ、サブ用パン。", optionLabels: { cheese: "チーズを選択" }, optionValues: { Swiss: "スイス", Cheddar: "チェダー", Mozzarella: "モッツァレラ" } },
    "chicken-parma": { name: "チキンパルマ", description: "パン粉付きチキン、マリナーラソース、モッツァレラ、パルメザン、オレガノ。" },
    weiss: { name: "ヴァイス", description: "軽く爽やかでフルーティーなドラフトビール、ABV 5.2%。" },
    pilsen: { name: "ピルスナー", description: "クラシックで軽くバランスの良いドラフトビール、ABV 4.7%。" },
    ipa: { name: "IPA", description: "力強くフルーティーで苦味が際立つ、ABV 6.5%。" },
    cappuccino: { name: "カプチーノ", description: "エスプレッソにスチームミルクとクリーミーなフォーム。" },
    "filtered-coffee": { name: "フィルターコーヒー", description: "シンプルでコクがあり、淹れたて。" },
    water: { name: "水", description: "炭酸あり、または炭酸なし。" },
    soda: { name: "ソーダ", description: "缶入りの各種オプション。" },
    juice: { name: "ジュース", description: "厳選フレーバー。" }
  },
  "zh-CN": {
    "italian-sub": { name: "意大利潜艇三明治", description: "萨拉米、火腿、意式辣香肠、普罗卧干酪、生菜、番茄、红洋葱、甜椒、橄榄油和牛至。", optionLabels: { sauce: "添加一种酱料" }, optionValues: { Ranch: "牧场酱", Pesto: "青酱", Aioli: "蒜香蛋黄酱" } },
    "philadelphia-sub": { name: "费城芝士牛排潜艇堡", description: "薄切牛肉、甜椒、洋葱和潜艇面包。", optionLabels: { cheese: "选择奶酪" }, optionValues: { Swiss: "瑞士奶酪", Cheddar: "切达", Mozzarella: "马苏里拉" } },
    "chicken-parma": { name: "帕尔玛鸡肉堡", description: "裹粉鸡肉、玛丽娜拉酱、马苏里拉、帕尔马干酪和牛至。" },
    weiss: { name: "小麦啤酒", description: "清爽、轻盈、带果香的生啤，酒精度 5.2%。" },
    pilsen: { name: "皮尔森", description: "经典、轻盈且平衡的生啤，酒精度 4.7%。" },
    ipa: { name: "IPA", description: "浓郁、果香明显并带有突出苦味，酒精度 6.5%。" },
    cappuccino: { name: "卡布奇诺", description: "浓缩咖啡搭配蒸奶和绵密奶泡。" },
    "filtered-coffee": { name: "滤泡咖啡", description: "简单、醇厚、现做。" },
    water: { name: "水", description: "有气或无气。" },
    soda: { name: "汽水", description: "多种罐装选择。" },
    juice: { name: "果汁", description: "精选口味。" }
  }
};

function withFallbackMenuItems(items: LocaleMessages["menuItems"]): LocaleMessages["menuItems"] {
  return { ...menuItems.en, ...items };
}

const shared = {
  languageName: "English",
  app: {
    subtitle: "CHOPE E CAFE",
    badge: "Nancot Web Menu v1",
    imageAlt: "Neon Janelinha Subs menu reference",
    imageOpen: "Open menu artwork",
    imageModalTitle: "Janelinha Subs menu artwork",
    languageLabel: "Language",
    openCart: "Open cart",
    physicalQrDetected: "Physical QR Code detected - payment pending confirmation."
  },
  mission: {
    label: "Active mission",
    text: "Live the purpose. Make a difference. Share love."
  },
  categories: {
    subs: "Subs",
    chopes: "Draft Beers",
    cafe: "Coffee",
    bebidas: "Other Drinks"
  },
  product: {
    customizable: "Customizable",
    select: "Select",
    selectAria: "Select",
    customizeOrder: "Customize order",
    closeModal: "Close product modal",
    quantity: "Quantity",
    decreaseQuantity: "Decrease quantity",
    increaseQuantity: "Increase quantity",
    addToOrder: "Add to order",
    nextStep: "Next step"
  },
  cart: {
    title: "Current order",
    close: "Close cart",
    empty: "Your order is waiting for a first signal.",
    subtotal: "Subtotal",
    finishOrder: "Finish order",
    decrease: "Decrease",
    increase: "Increase",
    remove: "Remove"
  },
  checkout: {
    close: "Close checkout",
    eyebrow: "Mocked checkout",
    finishOrder: "Finish order",
    confirmedTitle: "Order confirmed",
    confirmedMessage: "Order confirmed - protocol",
    total: "Total",
    paymentMethod: "Payment method",
    pix: "PIX",
    credit: "Credit card",
    debit: "Debit card",
    printedName: "Printed name",
    cardNumber: "Card number",
    expirationDate: "Expiration date",
    cvv: "CVV",
    simulateCardPayment: "Simulate card payment"
  },
  pix: {
    qrLabel: "Mocked PIX QR Code",
    codeLabel: "PIX copy-and-paste code",
    copy: "Copy PIX code",
    paid: "I have paid",
    scan: "Scan physical QR Code",
    copied: "PIX code copied."
  },
  camera: {
    close: "Close camera permission",
    eyebrow: "Physical QR Code",
    title: "Camera scan",
    copy: "The app needs camera access to preview a physical QR Code at the counter.",
    preview: "Camera preview",
    denied: "Camera permission was blocked by the browser.",
    unsupported: "This browser does not support camera access.",
    allow: "Allow camera",
    simulate: "Simulate QR Code read"
  }
};

export const locales: Record<LocaleCode, LocaleMessages> = {
  en: {
    ...shared,
    languageName: "English",
    menuItems: menuItems.en
  },
  "pt-BR": {
    ...shared,
    languageName: "Portugues-BR",
    app: { ...shared.app, languageLabel: "Idioma", openCart: "Abrir carrinho" },
    mission: { label: "Missao ativa", text: "Viva o proposito. Faca a diferenca. Compartilhe o amor." },
    categories: { subs: "Subs", chopes: "Chopes", cafe: "Cafe", bebidas: "Outras bebidas" },
    product: {
      ...shared.product,
      customizable: "Personalizavel",
      select: "Selecionar",
      selectAria: "Selecionar",
      customizeOrder: "Personalizar pedido",
      quantity: "Quantidade",
      addToOrder: "Adicionar ao pedido",
      nextStep: "Proximo passo"
    },
    cart: { ...shared.cart, title: "Pedido atual", empty: "Seu pedido espera o primeiro sinal.", subtotal: "Subtotal", finishOrder: "Finalizar pedido" },
    checkout: { ...shared.checkout, finishOrder: "Finalizar pedido", confirmedTitle: "Pedido confirmado", total: "Total", credit: "Credito", debit: "Debito" },
    pix: { ...shared.pix, copy: "Copiar codigo PIX", paid: "Ja paguei", copied: "Codigo PIX copiado." },
    camera: { ...shared.camera, title: "Escanear camera", allow: "Permitir camera" },
    menuItems: menuItems["pt-BR"]
  },
  es: {
    ...shared,
    languageName: "Espanol",
    app: { ...shared.app, languageLabel: "Idioma", openCart: "Abrir carrito" },
    mission: { label: "Mision activa", text: "Vive el proposito. Haz la diferencia. Comparte amor." },
    categories: { subs: "Subs", chopes: "Cervezas tiradas", cafe: "Cafe", bebidas: "Otras bebidas" },
    product: { ...shared.product, customizable: "Personalizable", select: "Elegir", selectAria: "Elegir", addToOrder: "Agregar al pedido", nextStep: "Siguiente" },
    cart: { ...shared.cart, title: "Pedido actual", finishOrder: "Finalizar pedido" },
    checkout: { ...shared.checkout, confirmedTitle: "Pedido confirmado", credit: "Tarjeta de credito", debit: "Tarjeta de debito" },
    menuItems: menuItems.es
  },
  fr: {
    ...shared,
    languageName: "Francais",
    app: { ...shared.app, languageLabel: "Langue", openCart: "Ouvrir le panier" },
    mission: { label: "Mission active", text: "Vis le but. Fais la difference. Partage l'amour." },
    categories: { subs: "Subs", chopes: "Bieres pression", cafe: "Cafe", bebidas: "Autres boissons" },
    product: { ...shared.product, customizable: "Personnalisable", select: "Choisir", selectAria: "Choisir", addToOrder: "Ajouter", nextStep: "Etape suivante" },
    cart: { ...shared.cart, title: "Commande actuelle", finishOrder: "Finaliser" },
    checkout: { ...shared.checkout, confirmedTitle: "Commande confirmee", credit: "Carte credit", debit: "Carte debit" },
    menuItems: menuItems.fr
  },
  it: {
    ...shared,
    languageName: "Italiano",
    app: { ...shared.app, languageLabel: "Lingua", openCart: "Apri carrello" },
    mission: { label: "Missione attiva", text: "Vivi lo scopo. Fai la differenza. Condividi amore." },
    categories: { subs: "Subs", chopes: "Birre alla spina", cafe: "Caffe", bebidas: "Altre bevande" },
    product: { ...shared.product, customizable: "Personalizzabile", select: "Scegli", selectAria: "Scegli", addToOrder: "Aggiungi", nextStep: "Prossimo passo" },
    cart: { ...shared.cart, title: "Ordine attuale", finishOrder: "Completa ordine" },
    checkout: { ...shared.checkout, confirmedTitle: "Ordine confermato", credit: "Carta di credito", debit: "Carta di debito" },
    menuItems: menuItems.it
  },
  de: {
    ...shared,
    languageName: "Deutsch",
    app: { ...shared.app, languageLabel: "Sprache", openCart: "Warenkorb offnen" },
    mission: { label: "Aktive Mission", text: "Lebe den Zweck. Mach einen Unterschied. Teile Liebe." },
    categories: { subs: "Subs", chopes: "Fassbiere", cafe: "Kaffee", bebidas: "Andere Getranke" },
    product: { ...shared.product, customizable: "Anpassbar", select: "Auswahlen", selectAria: "Auswahlen", addToOrder: "Hinzufugen", nextStep: "Nachster Schritt" },
    cart: { ...shared.cart, title: "Aktuelle Bestellung", finishOrder: "Bestellung abschliessen" },
    checkout: { ...shared.checkout, confirmedTitle: "Bestellung bestatigt", credit: "Kreditkarte", debit: "Debitkarte" },
    menuItems: menuItems.de
  },
  ja: {
    ...shared,
    languageName: "日本語",
    app: { ...shared.app, languageLabel: "言語", openCart: "カートを開く", imageOpen: "メニュー画像を開く" },
    mission: { label: "アクティブミッション", text: "目的を生きる。違いを生み出す。愛を分かち合う。" },
    categories: { subs: "サブ", chopes: "生ビール", cafe: "コーヒー", bebidas: "その他の飲み物" },
    product: { ...shared.product, customizable: "カスタマイズ可", select: "選択", selectAria: "選択", customizeOrder: "注文をカスタマイズ", quantity: "数量", addToOrder: "注文に追加", nextStep: "次へ" },
    cart: { ...shared.cart, title: "現在の注文", empty: "最初の商品を選んでください。", subtotal: "小計", finishOrder: "注文を確定" },
    checkout: { ...shared.checkout, finishOrder: "注文を確定", confirmedTitle: "注文確認済み", total: "合計", credit: "クレジットカード", debit: "デビットカード" },
    pix: { ...shared.pix, copy: "PIXコードをコピー", paid: "支払い済み", copied: "PIXコードをコピーしました。" },
    camera: { ...shared.camera, title: "カメラスキャン", allow: "カメラを許可" },
    menuItems: menuItems.ja
  },
  "zh-CN": {
    ...shared,
    languageName: "中文普通话",
    app: { ...shared.app, languageLabel: "语言", openCart: "打开购物车", imageOpen: "打开菜单图片" },
    mission: { label: "当前使命", text: "活出目标。创造改变。分享爱。" },
    categories: { subs: "潜艇堡", chopes: "生啤", cafe: "咖啡", bebidas: "其他饮品" },
    product: { ...shared.product, customizable: "可定制", select: "选择", selectAria: "选择", customizeOrder: "定制订单", quantity: "数量", addToOrder: "加入订单", nextStep: "下一步" },
    cart: { ...shared.cart, title: "当前订单", empty: "你的订单正在等待第一件商品。", subtotal: "小计", finishOrder: "完成订单" },
    checkout: { ...shared.checkout, finishOrder: "完成订单", confirmedTitle: "订单已确认", total: "合计", credit: "信用卡", debit: "借记卡" },
    pix: { ...shared.pix, copy: "复制 PIX 代码", paid: "我已付款", copied: "PIX 代码已复制。" },
    camera: { ...shared.camera, title: "相机扫描", allow: "允许相机" },
    menuItems: menuItems["zh-CN"]
  }
};

export const localeOptions = Object.entries(locales).map(([code, messages]) => ({
  code: code as LocaleCode,
  label: `${messages.languageName} ${
    {
      en: "EN",
      "pt-BR": "PT-BR",
      es: "ES",
      fr: "FR",
      it: "IT",
      de: "DE",
      ja: "JA",
      "zh-CN": "ZH"
    }[code as LocaleCode]
  }`
}));
