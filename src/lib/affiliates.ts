/**
 * Configuration des liens affiliés - Multi-plateformes
 * 
 * FORMAT: "slug-produit-store" -> URL affiliate
 * Exemple: "xiaomi-redmi-note-13-jumia", "xiaomi-redmi-note-13-amazon", "xiaomi-redmi-note-13-aliexpress"
 * 
 * PROGRAMMES D'AFFILIATION:
 * - Jumia Maroc: affiliate.jumia.ma (2-5% commission)
 * - Amazon Partenaires: club-partenaires.amazon.fr (1-10% commission)
 * - AliExpress: portals.aliexpress.com (3-8% commission)
 */

// Helper functions pour générer les URLs de recherche
const jumia = (q: string) => `https://www.jumia.ma/catalog/?q=${q.replace(/ /g, "+")}`;
const amazon = (q: string) => `https://www.amazon.fr/s?k=${q.replace(/ /g, "+")}&tag=goudgood21-21`;
const aliexpress = (q: string) => `https://fr.aliexpress.com/w/wholesale-${q.replace(/ /g, "-")}.html?spm=a2g0o.home.1000002.1.1234&aff_trace_key=goudgood`;

export const affiliateLinks: Record<string, string> = {
  // ============================================================
  // SMARTPHONES
  // ============================================================
  
  // --- Xiaomi Redmi Note 13 ---
  "xiaomi-redmi-note-13-jumia": jumia("xiaomi redmi note 13"),
  "xiaomi-redmi-note-13-amazon": amazon("xiaomi redmi note 13"),
  "xiaomi-redmi-note-13-aliexpress": "https://s.click.aliexpress.com/e/_c4E6RtgL",
  "xiaomi-redmi-note-13": jumia("xiaomi redmi note 13"),
  
  // --- Xiaomi Redmi Note 13 Pro ---
  "xiaomi-redmi-note-13-pro-jumia": jumia("xiaomi redmi note 13 pro"),
  "xiaomi-redmi-note-13-pro-amazon": amazon("xiaomi redmi note 13 pro"),
  "xiaomi-redmi-note-13-pro-aliexpress": "https://s.click.aliexpress.com/e/_c3iBSLmr",
  "xiaomi-redmi-note-13-pro": jumia("xiaomi redmi note 13 pro"),
  
  // --- Redmi Note 13 ---
  "redmi-note-13-jumia": jumia("redmi note 13"),
  "redmi-note-13-amazon": amazon("redmi note 13"),
  "redmi-note-13-aliexpress": "https://s.click.aliexpress.com/e/_c4E6RtgL",
  "redmi-note-13": jumia("redmi note 13"),
  
  // --- Xiaomi POCO X6 ---
  "xiaomi-poco-x6-jumia": jumia("xiaomi poco x6"),
  "xiaomi-poco-x6-amazon": amazon("xiaomi poco x6"),
  "xiaomi-poco-x6-aliexpress": "https://s.click.aliexpress.com/e/_c2IKxGBN",
  "xiaomi-poco-x6": jumia("xiaomi poco x6"),
  "poco-x6-jumia": jumia("poco x6"),
  "poco-x6-amazon": amazon("poco x6"),
  "poco-x6-aliexpress": "https://s.click.aliexpress.com/e/_c2IKxGBN",
  "poco-x6": jumia("poco x6"),
  "poco-x6-pro-jumia": jumia("poco x6 pro"),
  "poco-x6-pro-amazon": amazon("poco x6 pro"),
  "poco-x6-pro-aliexpress": "https://s.click.aliexpress.com/e/_c2IKxGBN",
  "poco-x6-pro": jumia("poco x6 pro"),
  
  // --- Xiaomi 14 ---
  "xiaomi-14-jumia": jumia("xiaomi 14"),
  "xiaomi-14-amazon": amazon("xiaomi 14"),
  "xiaomi-14-aliexpress": aliexpress("xiaomi 14"),
  "xiaomi-14": jumia("xiaomi 14"),
  "xiaomi-14-ultra-jumia": jumia("xiaomi 14 ultra"),
  "xiaomi-14-ultra-amazon": amazon("xiaomi 14 ultra"),
  "xiaomi-14-ultra-aliexpress": aliexpress("xiaomi 14 ultra"),
  "xiaomi-14-ultra": jumia("xiaomi 14 ultra"),
  
  // --- Xiaomi 13 ---
  "xiaomi-13-lite-jumia": jumia("xiaomi 13 lite"),
  "xiaomi-13-lite-amazon": amazon("xiaomi 13 lite"),
  "xiaomi-13-lite-aliexpress": aliexpress("xiaomi 13 lite"),
  "xiaomi-13-lite": jumia("xiaomi 13 lite"),
  "xiaomi-13t-jumia": jumia("xiaomi 13t"),
  "xiaomi-13t-amazon": amazon("xiaomi 13t"),
  "xiaomi-13t-aliexpress": aliexpress("xiaomi 13t"),
  "xiaomi-13t": jumia("xiaomi 13t"),
  
  // --- Samsung Galaxy A ---
  "samsung-galaxy-a15-jumia": jumia("samsung galaxy a15"),
  "samsung-galaxy-a15-amazon": amazon("samsung galaxy a15"),
  "samsung-galaxy-a15-aliexpress": "https://s.click.aliexpress.com/e/_c3AMuhqn",
  "samsung-galaxy-a15": jumia("samsung galaxy a15"),
  "samsung-galaxy-a35-jumia": jumia("samsung galaxy a35"),
  "samsung-galaxy-a35-amazon": amazon("samsung galaxy a35"),
  "samsung-galaxy-a35-aliexpress": "https://s.click.aliexpress.com/e/_c4b45u9Z",
  "samsung-galaxy-a35": jumia("samsung galaxy a35"),
  "samsung-galaxy-a54-jumia": jumia("samsung galaxy a54"),
  "samsung-galaxy-a54-amazon": amazon("samsung galaxy a54"),
  "samsung-galaxy-a54-aliexpress": "https://s.click.aliexpress.com/e/_c4b45u9Z",
  "samsung-galaxy-a54": jumia("samsung galaxy a54"),
  
  // --- Samsung Galaxy S24 ---
  "samsung-galaxy-s24-jumia": jumia("samsung galaxy s24"),
  "samsung-galaxy-s24-amazon": amazon("samsung galaxy s24"),
  "samsung-galaxy-s24-aliexpress": aliexpress("samsung galaxy s24"),
  "samsung-galaxy-s24": jumia("samsung galaxy s24"),
  "samsung-galaxy-s24-ultra-jumia": jumia("samsung galaxy s24 ultra"),
  "samsung-galaxy-s24-ultra-amazon": amazon("samsung galaxy s24 ultra"),
  "samsung-galaxy-s24-ultra-aliexpress": aliexpress("samsung galaxy s24 ultra"),
  "samsung-galaxy-s24-ultra": jumia("samsung galaxy s24 ultra"),
  
  // --- iPhone ---
  "iphone-15-jumia": jumia("iphone 15"),
  "iphone-15-amazon": amazon("iphone 15"),
  "iphone-15-aliexpress": "https://s.click.aliexpress.com/e/_c2J5isOT",
  "iphone-15": jumia("iphone 15"),
  "iphone-15-pro-jumia": jumia("iphone 15 pro"),
  "iphone-15-pro-amazon": amazon("iphone 15 pro"),
  "iphone-15-pro-aliexpress": "https://s.click.aliexpress.com/e/_c2J5isOT",
  "iphone-15-pro": jumia("iphone 15 pro"),
  "iphone-15-pro-max-jumia": jumia("iphone 15 pro max"),
  "iphone-15-pro-max-amazon": amazon("iphone 15 pro max"),
  "iphone-15-pro-max-aliexpress": "https://s.click.aliexpress.com/e/_c2J5isOT",
  "iphone-15-pro-max": jumia("iphone 15 pro max"),
  
  // --- Google Pixel ---
  "google-pixel-8-jumia": jumia("google pixel 8"),
  "google-pixel-8-amazon": amazon("google pixel 8"),
  "google-pixel-8-aliexpress": aliexpress("google pixel 8"),
  "google-pixel-8": amazon("google pixel 8"),
  "google-pixel-8-pro-jumia": jumia("google pixel 8 pro"),
  "google-pixel-8-pro-amazon": amazon("google pixel 8 pro"),
  "google-pixel-8-pro-aliexpress": aliexpress("google pixel 8 pro"),
  "google-pixel-8-pro": amazon("google pixel 8 pro"),
  "pixel-8-jumia": jumia("pixel 8"),
  "pixel-8-amazon": amazon("pixel 8"),
  "pixel-8-aliexpress": aliexpress("pixel 8"),
  "pixel-8": amazon("pixel 8"),
  
  // --- Realme / OPPO ---
  "realme-c55-jumia": jumia("realme c55"),
  "realme-c55-amazon": amazon("realme c55"),
  "realme-c55-aliexpress": aliexpress("realme c55"),
  "realme-c55": jumia("realme c55"),
  "realme-12-pro-jumia": jumia("realme 12 pro"),
  "realme-12-pro-amazon": amazon("realme 12 pro"),
  "realme-12-pro-aliexpress": aliexpress("realme 12 pro"),
  "realme-12-pro": jumia("realme 12 pro"),
  "oppo-a58-jumia": jumia("oppo a58"),
  "oppo-a58-amazon": amazon("oppo a58"),
  "oppo-a58-aliexpress": aliexpress("oppo a58"),
  "oppo-a58": jumia("oppo a58"),
  
  // ============================================================
  // PC PORTABLES
  // ============================================================
  
  // --- HP ---
  "hp-15-etudiant-jumia": jumia("hp laptop 15"),
  "hp-15-etudiant-amazon": amazon("hp laptop 15"),
  "hp-15-etudiant-aliexpress": aliexpress("hp laptop 15"),
  "hp-15-etudiant": jumia("hp laptop 15"),
  "hp-15s-eq2xxx-jumia": jumia("hp 15s eq2"),
  "hp-15s-eq2xxx-amazon": amazon("hp 15s eq2"),
  "hp-15s-eq2xxx-aliexpress": aliexpress("hp 15s laptop"),
  "hp-15s-eq2xxx": jumia("hp 15s"),
  "hp-pavilion-jumia": jumia("hp pavilion"),
  "hp-pavilion-amazon": amazon("hp pavilion laptop"),
  "hp-pavilion-aliexpress": "https://s.click.aliexpress.com/e/_c36fSJXv",
  "hp-pavilion": jumia("hp pavilion"),
  "hp-pavilion-15-jumia": jumia("hp pavilion 15"),
  "hp-pavilion-15-amazon": amazon("hp pavilion 15"),
  "hp-pavilion-15-aliexpress": "https://s.click.aliexpress.com/e/_c36fSJXv",
  "hp-pavilion-15": jumia("hp pavilion 15"),
  "hp-victus-jumia": jumia("hp victus"),
  "hp-victus-amazon": amazon("hp victus gaming"),
  "hp-victus-aliexpress": aliexpress("hp victus"),
  "hp-victus": jumia("hp victus"),
  "hp-victus-15-jumia": jumia("hp victus 15"),
  "hp-victus-15-amazon": amazon("hp victus 15"),
  "hp-victus-15-aliexpress": aliexpress("hp victus 15"),
  "hp-victus-15": jumia("hp victus 15"),
  "hp-probook-450-g10-jumia": jumia("hp probook 450"),
  "hp-probook-450-g10-amazon": amazon("hp probook 450 g10"),
  "hp-probook-450-g10-aliexpress": aliexpress("hp probook 450"),
  "hp-probook-450-g10": jumia("hp probook 450"),
  "hp-spectre-x360-14-jumia": jumia("hp spectre x360"),
  "hp-spectre-x360-14-amazon": amazon("hp spectre x360 14"),
  "hp-spectre-x360-14-aliexpress": aliexpress("hp spectre x360"),
  "hp-spectre-x360-14": amazon("hp spectre x360 14"),
  
  // --- Lenovo ---
  "lenovo-ideapad-3-jumia": jumia("lenovo ideapad 3"),
  "lenovo-ideapad-3-amazon": amazon("lenovo ideapad 3"),
  "lenovo-ideapad-3-aliexpress": "https://s.click.aliexpress.com/e/_c3enbwz1",
  "lenovo-ideapad-3": jumia("lenovo ideapad 3"),
  "lenovo-ideapad-3-15-jumia": jumia("lenovo ideapad 3 15"),
  "lenovo-ideapad-3-15-amazon": amazon("lenovo ideapad 3 15"),
  "lenovo-ideapad-3-15-aliexpress": "https://s.click.aliexpress.com/e/_c3enbwz1",
  "lenovo-ideapad-3-15": jumia("lenovo ideapad 3 15"),
  "lenovo-ideapad-slim-jumia": jumia("lenovo ideapad slim"),
  "lenovo-ideapad-slim-amazon": amazon("lenovo ideapad slim"),
  "lenovo-ideapad-slim-aliexpress": "https://s.click.aliexpress.com/e/_c3enbwz1",
  "lenovo-ideapad-slim": jumia("lenovo ideapad slim"),
  "lenovo-ideapad-gaming-jumia": jumia("lenovo ideapad gaming"),
  "lenovo-ideapad-gaming-amazon": amazon("lenovo ideapad gaming 3"),
  "lenovo-ideapad-gaming-aliexpress": "https://s.click.aliexpress.com/e/_c3enbwz1",
  "lenovo-ideapad-gaming": jumia("lenovo ideapad gaming"),
  "lenovo-ideapad-gaming-3-jumia": jumia("lenovo ideapad gaming 3"),
  "lenovo-ideapad-gaming-3-amazon": amazon("lenovo ideapad gaming 3"),
  "lenovo-ideapad-gaming-3-aliexpress": "https://s.click.aliexpress.com/e/_c3enbwz1",
  "lenovo-ideapad-gaming-3": jumia("lenovo ideapad gaming 3"),
  "lenovo-thinkpad-e14-gen-5-jumia": jumia("lenovo thinkpad e14"),
  "lenovo-thinkpad-e14-gen-5-amazon": amazon("lenovo thinkpad e14 gen 5"),
  "lenovo-thinkpad-e14-gen-5-aliexpress": aliexpress("lenovo thinkpad e14"),
  "lenovo-thinkpad-e14-gen-5": jumia("lenovo thinkpad e14"),
  "lenovo-loq-15-jumia": jumia("lenovo loq 15"),
  "lenovo-loq-15-amazon": amazon("lenovo loq 15"),
  "lenovo-loq-15-aliexpress": aliexpress("lenovo loq gaming"),
  "lenovo-loq-15": amazon("lenovo loq 15"),
  "lenovo-yoga-9i-jumia": jumia("lenovo yoga 9i"),
  "lenovo-yoga-9i-amazon": amazon("lenovo yoga 9i"),
  "lenovo-yoga-9i-aliexpress": aliexpress("lenovo yoga 9i"),
  "lenovo-yoga-9i": amazon("lenovo yoga 9i"),
  
  // --- ASUS ---
  "asus-vivobook-15-jumia": jumia("asus vivobook 15"),
  "asus-vivobook-15-amazon": amazon("asus vivobook 15"),
  "asus-vivobook-15-aliexpress": aliexpress("asus vivobook 15"),
  "asus-vivobook-15": jumia("asus vivobook 15"),
  "asus-tuf-gaming-f15-jumia": jumia("asus tuf gaming f15"),
  "asus-tuf-gaming-f15-amazon": amazon("asus tuf gaming f15"),
  "asus-tuf-gaming-f15-aliexpress": aliexpress("asus tuf gaming f15"),
  "asus-tuf-gaming-f15": jumia("asus tuf gaming f15"),
  "asus-rog-strix-g15-jumia": jumia("asus rog strix g15"),
  "asus-rog-strix-g15-amazon": amazon("asus rog strix g15"),
  "asus-rog-strix-g15-aliexpress": aliexpress("asus rog strix g15"),
  "asus-rog-strix-g15": amazon("asus rog strix g15"),
  
  // --- Acer ---
  "acer-aspire-jumia": jumia("acer aspire"),
  "acer-aspire-amazon": amazon("acer aspire"),
  "acer-aspire-aliexpress": aliexpress("acer aspire laptop"),
  "acer-aspire": jumia("acer aspire"),
  "acer-aspire-3-jumia": jumia("acer aspire 3"),
  "acer-aspire-3-amazon": amazon("acer aspire 3"),
  "acer-aspire-3-aliexpress": aliexpress("acer aspire 3"),
  "acer-aspire-3": jumia("acer aspire 3"),
  "acer-nitro-5-jumia": jumia("acer nitro 5"),
  "acer-nitro-5-amazon": amazon("acer nitro 5"),
  "acer-nitro-5-aliexpress": aliexpress("acer nitro 5"),
  "acer-nitro-5": jumia("acer nitro 5"),
  
  // --- MSI ---
  "msi-gf63-jumia": jumia("msi gf63"),
  "msi-gf63-amazon": amazon("msi gf63 thin"),
  "msi-gf63-aliexpress": aliexpress("msi gf63"),
  "msi-gf63": jumia("msi gf63"),
  "msi-gf63-thin-jumia": jumia("msi gf63 thin"),
  "msi-gf63-thin-amazon": amazon("msi gf63 thin"),
  "msi-gf63-thin-aliexpress": aliexpress("msi gf63 thin"),
  "msi-gf63-thin": jumia("msi gf63 thin"),
  "msi-katana-15-jumia": jumia("msi katana 15"),
  "msi-katana-15-amazon": amazon("msi katana 15"),
  "msi-katana-15-aliexpress": aliexpress("msi katana 15"),
  "msi-katana-15": amazon("msi katana 15"),
  
  // ============================================================
  // ÉCOUTEURS
  // ============================================================
  
  // --- Samsung Galaxy Buds ---
  "samsung-galaxy-buds-fe-jumia": jumia("samsung galaxy buds fe"),
  "samsung-galaxy-buds-fe-amazon": amazon("samsung galaxy buds fe"),
  "samsung-galaxy-buds-fe-aliexpress": aliexpress("samsung galaxy buds fe"),
  "samsung-galaxy-buds-fe": jumia("samsung galaxy buds fe"),
  "samsung-galaxy-buds2-pro-jumia": jumia("samsung galaxy buds2 pro"),
  "samsung-galaxy-buds2-pro-amazon": amazon("samsung galaxy buds2 pro"),
  "samsung-galaxy-buds2-pro-aliexpress": aliexpress("samsung galaxy buds2 pro"),
  "samsung-galaxy-buds2-pro": jumia("samsung galaxy buds2 pro"),
  
  // --- Xiaomi Buds ---
  "xiaomi-redmi-buds-4-jumia": jumia("xiaomi redmi buds 4"),
  "xiaomi-redmi-buds-4-amazon": amazon("xiaomi redmi buds 4"),
  "xiaomi-redmi-buds-4-aliexpress": aliexpress("xiaomi redmi buds 4"),
  "xiaomi-redmi-buds-4": jumia("xiaomi redmi buds 4"),
  "xiaomi-redmi-buds-4-lite-jumia": jumia("xiaomi redmi buds 4 lite"),
  "xiaomi-redmi-buds-4-lite-amazon": amazon("xiaomi redmi buds 4 lite"),
  "xiaomi-redmi-buds-4-lite-aliexpress": aliexpress("xiaomi redmi buds 4 lite"),
  "xiaomi-redmi-buds-4-lite": jumia("xiaomi redmi buds 4 lite"),
  "xiaomi-redmi-buds-5-pro-jumia": jumia("xiaomi redmi buds 5 pro"),
  "xiaomi-redmi-buds-5-pro-amazon": amazon("xiaomi redmi buds 5 pro"),
  "xiaomi-redmi-buds-5-pro-aliexpress": aliexpress("xiaomi redmi buds 5 pro"),
  "xiaomi-redmi-buds-5-pro": aliexpress("xiaomi redmi buds 5 pro"),
  "xiaomi-buds-4-pro-jumia": jumia("xiaomi buds 4 pro"),
  "xiaomi-buds-4-pro-amazon": amazon("xiaomi buds 4 pro"),
  "xiaomi-buds-4-pro-aliexpress": aliexpress("xiaomi buds 4 pro"),
  "xiaomi-buds-4-pro": aliexpress("xiaomi buds 4 pro"),
  
  // --- JBL ---
  "jbl-tune-230nc-jumia": jumia("jbl tune 230nc"),
  "jbl-tune-230nc-amazon": amazon("jbl tune 230nc tws"),
  "jbl-tune-230nc-aliexpress": aliexpress("jbl tune 230nc"),
  "jbl-tune-230nc": amazon("jbl tune 230nc"),
  "jbl-tune-230nc-tws-jumia": jumia("jbl tune 230nc"),
  "jbl-tune-230nc-tws-amazon": amazon("jbl tune 230nc tws"),
  "jbl-tune-230nc-tws-aliexpress": aliexpress("jbl tune 230nc tws"),
  "jbl-tune-230nc-tws": amazon("jbl tune 230nc tws"),
  "jbl-tune-520bt-jumia": jumia("jbl tune 520bt"),
  "jbl-tune-520bt-amazon": amazon("jbl tune 520bt"),
  "jbl-tune-520bt-aliexpress": aliexpress("jbl tune 520bt"),
  "jbl-tune-520bt": amazon("jbl tune 520bt"),
  
  // --- Anker Soundcore ---
  "anker-soundcore-life-p3-jumia": jumia("anker soundcore life p3"),
  "anker-soundcore-life-p3-amazon": amazon("anker soundcore life p3"),
  "anker-soundcore-life-p3-aliexpress": aliexpress("anker soundcore life p3"),
  "anker-soundcore-life-p3": amazon("anker soundcore life p3"),
  "anker-soundcore-liberty-4-jumia": jumia("anker soundcore liberty 4"),
  "anker-soundcore-liberty-4-amazon": amazon("anker soundcore liberty 4"),
  "anker-soundcore-liberty-4-aliexpress": aliexpress("anker soundcore liberty 4"),
  "anker-soundcore-liberty-4": amazon("anker soundcore liberty 4"),
  
  // ============================================================
  // POWER BANKS
  // ============================================================
  
  // --- Anker ---
  "anker-powercore-jumia": jumia("anker powercore"),
  "anker-powercore-amazon": amazon("anker powercore"),
  "anker-powercore-aliexpress": aliexpress("anker powercore"),
  "anker-powercore": amazon("anker powercore"),
  "anker-powercore-20000-jumia": jumia("anker powercore 20000"),
  "anker-powercore-20000-amazon": amazon("anker powercore 20000"),
  "anker-powercore-20000-aliexpress": aliexpress("anker powercore 20000"),
  "anker-powercore-20000": amazon("anker powercore 20000"),
  "anker-powerbank-10000-jumia": jumia("anker powerbank 10000"),
  "anker-powerbank-10000-amazon": amazon("anker powerbank 10000"),
  "anker-powerbank-10000-aliexpress": aliexpress("anker powerbank 10000"),
  "anker-powerbank-10000": amazon("anker powerbank 10000"),
  "anker-622-maggo-jumia": jumia("anker 622 maggo"),
  "anker-622-maggo-amazon": amazon("anker 622 maggo"),
  "anker-622-maggo-aliexpress": aliexpress("anker 622 maggo"),
  "anker-622-maggo": amazon("anker 622 maggo"),
  
  // --- Xiaomi Power Bank ---
  "xiaomi-mi-power-bank-3-jumia": jumia("xiaomi power bank 3"),
  "xiaomi-mi-power-bank-3-amazon": amazon("xiaomi power bank 3"),
  "xiaomi-mi-power-bank-3-aliexpress": "https://s.click.aliexpress.com/e/_c3qDEr8T",
  "xiaomi-mi-power-bank-3": jumia("xiaomi power bank"),
  "xiaomi-powerbank-jumia": jumia("xiaomi powerbank"),
  "xiaomi-powerbank-amazon": amazon("xiaomi power bank"),
  "xiaomi-powerbank-aliexpress": "https://s.click.aliexpress.com/e/_c3qDEr8T",
  "xiaomi-powerbank": jumia("xiaomi powerbank"),
  "xiaomi-redmi-power-bank-10000-jumia": jumia("xiaomi redmi power bank 10000"),
  "xiaomi-redmi-power-bank-10000-amazon": amazon("xiaomi redmi power bank 10000"),
  "xiaomi-redmi-power-bank-10000-aliexpress": "https://s.click.aliexpress.com/e/_c3qDEr8T",
  "xiaomi-redmi-power-bank-10000": jumia("xiaomi power bank 10000"),
  
  // --- Baseus ---
  "baseus-30000mah-65w-jumia": jumia("baseus 30000mah 65w"),
  "baseus-30000mah-65w-amazon": amazon("baseus 30000mah 65w"),
  "baseus-30000mah-65w-aliexpress": aliexpress("baseus 30000mah 65w power bank"),
  "baseus-30000mah-65w": amazon("baseus 30000mah 65w"),
  "baseus-powerbank-jumia": jumia("baseus powerbank"),
  "baseus-powerbank-amazon": amazon("baseus power bank"),
  "baseus-powerbank-aliexpress": aliexpress("baseus power bank"),
  "baseus-powerbank": amazon("baseus power bank"),
  "romoss-sense-8-jumia": jumia("romoss sense 8"),
  "romoss-sense-8-amazon": amazon("romoss sense 8"),
  "romoss-sense-8-aliexpress": aliexpress("romoss sense 8"),
  "romoss-sense-8": aliexpress("romoss sense 8"),
  
  // ============================================================
  // CHARGEURS
  // ============================================================
  
  // --- Anker ---
  "anker-charger-jumia": jumia("anker chargeur"),
  "anker-charger-amazon": amazon("anker chargeur"),
  "anker-charger-aliexpress": aliexpress("anker charger"),
  "anker-charger": amazon("anker chargeur"),
  "anker-nano-ii-65w-jumia": jumia("anker nano ii 65w"),
  "anker-nano-ii-65w-amazon": amazon("anker nano ii 65w"),
  "anker-nano-ii-65w-aliexpress": aliexpress("anker nano ii 65w"),
  "anker-nano-ii-65w": amazon("anker nano ii 65w"),
  "anker-735-nano-ii-65w-jumia": jumia("anker 735 nano ii 65w"),
  "anker-735-nano-ii-65w-amazon": amazon("anker 735 nano ii 65w"),
  "anker-735-nano-ii-65w-aliexpress": aliexpress("anker 735 nano ii 65w"),
  "anker-735-nano-ii-65w": amazon("anker 735 nano ii 65w"),
  "anker-735-65w-jumia": jumia("anker 735 65w"),
  "anker-735-65w-amazon": amazon("anker 735 65w"),
  "anker-735-65w-aliexpress": aliexpress("anker 735 65w"),
  "anker-735-65w": amazon("anker 735 65w"),
  "anker-511-nano-30w-jumia": jumia("anker 511 nano 30w"),
  "anker-511-nano-30w-amazon": amazon("anker 511 nano 30w"),
  "anker-511-nano-30w-aliexpress": aliexpress("anker 511 nano 30w"),
  "anker-511-nano-30w": amazon("anker 511 nano 30w"),
  "anker-powerport-iii-jumia": jumia("anker powerport iii"),
  "anker-powerport-iii-amazon": amazon("anker powerport iii"),
  "anker-powerport-iii-aliexpress": aliexpress("anker powerport iii"),
  "anker-powerport-iii": amazon("anker powerport iii"),
  
  // --- Xiaomi/Samsung ---
  "xiaomi-charger-67w-jumia": jumia("xiaomi chargeur 67w"),
  "xiaomi-charger-67w-amazon": amazon("xiaomi chargeur 67w"),
  "xiaomi-charger-67w-aliexpress": aliexpress("xiaomi 67w charger"),
  "xiaomi-charger-67w": jumia("xiaomi chargeur 67w"),
  "xiaomi-67w-turbo-jumia": jumia("xiaomi 67w turbo"),
  "xiaomi-67w-turbo-amazon": amazon("xiaomi 67w turbo charger"),
  "xiaomi-67w-turbo-aliexpress": aliexpress("xiaomi 67w turbo charger"),
  "xiaomi-67w-turbo": aliexpress("xiaomi 67w turbo charger"),
  "xiaomi-67w-usb-c-jumia": jumia("xiaomi 67w usb c"),
  "xiaomi-67w-usb-c-amazon": amazon("xiaomi 67w usb c"),
  "xiaomi-67w-usb-c-aliexpress": aliexpress("xiaomi 67w usb c charger"),
  "xiaomi-67w-usb-c": aliexpress("xiaomi 67w usb c charger"),
  "samsung-charger-25w-jumia": jumia("samsung chargeur 25w"),
  "samsung-charger-25w-amazon": amazon("samsung chargeur 25w"),
  "samsung-charger-25w-aliexpress": aliexpress("samsung 25w charger"),
  "samsung-charger-25w": jumia("samsung chargeur 25w"),
  "samsung-45w-super-fast-jumia": jumia("samsung 45w super fast"),
  "samsung-45w-super-fast-amazon": amazon("samsung 45w super fast charger"),
  "samsung-45w-super-fast-aliexpress": aliexpress("samsung 45w charger"),
  "samsung-45w-super-fast": jumia("samsung 45w chargeur"),
  
  // --- Baseus/UGREEN ---
  "baseus-gan-65w-jumia": jumia("baseus gan 65w"),
  "baseus-gan-65w-amazon": amazon("baseus gan 65w"),
  "baseus-gan-65w-aliexpress": aliexpress("baseus gan 65w charger"),
  "baseus-gan-65w": amazon("baseus gan 65w"),
  "baseus-100w-gan3-jumia": jumia("baseus 100w gan3"),
  "baseus-100w-gan3-amazon": amazon("baseus 100w gan3"),
  "baseus-100w-gan3-aliexpress": aliexpress("baseus 100w gan3 charger"),
  "baseus-100w-gan3": amazon("baseus 100w gan"),
  "ugreen-100w-gan-jumia": jumia("ugreen 100w gan"),
  "ugreen-100w-gan-amazon": amazon("ugreen 100w gan"),
  "ugreen-100w-gan-aliexpress": aliexpress("ugreen 100w gan charger"),
  "ugreen-100w-gan": amazon("ugreen 100w chargeur"),
  "ugreen-65w-2-ports-jumia": jumia("ugreen 65w 2 ports"),
  "ugreen-65w-2-ports-amazon": amazon("ugreen 65w 2 ports"),
  "ugreen-65w-2-ports-aliexpress": aliexpress("ugreen 65w 2 ports charger"),
  "ugreen-65w-2-ports": amazon("ugreen 65w chargeur"),
  
  // ============================================================
  // VARIANTES ET GÉNÉRIQUES
  // ============================================================
  
  "redmi-note-13-pro-jumia": jumia("redmi note 13 pro"),
  "redmi-note-13-pro-amazon": amazon("redmi note 13 pro"),
  "redmi-note-13-pro-aliexpress": aliexpress("redmi note 13 pro"),
  "redmi-note-13-pro": jumia("redmi note 13 pro"),
  "redmi-note-13-pro-plus-jumia": jumia("redmi note 13 pro plus"),
  "redmi-note-13-pro-plus-amazon": amazon("redmi note 13 pro plus"),
  "redmi-note-13-pro-plus-aliexpress": aliexpress("redmi note 13 pro plus"),
  "redmi-note-13-pro-plus": jumia("redmi note 13 pro plus"),
  "xiaomi-redmi-note-13-pro-plus-jumia": jumia("xiaomi redmi note 13 pro plus"),
  "xiaomi-redmi-note-13-pro-plus-amazon": amazon("xiaomi redmi note 13 pro plus"),
  "xiaomi-redmi-note-13-pro-plus-aliexpress": aliexpress("xiaomi redmi note 13 pro plus"),
  "xiaomi-redmi-note-13-pro-plus": jumia("xiaomi redmi note 13 pro"),
  
  // Génériques
  "samsung-galaxy-jumia": jumia("samsung galaxy"),
  "samsung-galaxy-amazon": amazon("samsung galaxy"),
  "samsung-galaxy-aliexpress": aliexpress("samsung galaxy"),
  "samsung-galaxy": jumia("samsung galaxy"),
  "xiaomi-redmi-jumia": jumia("xiaomi redmi"),
  "xiaomi-redmi-amazon": amazon("xiaomi redmi"),
  "xiaomi-redmi-aliexpress": aliexpress("xiaomi redmi"),
  "xiaomi-redmi": jumia("xiaomi redmi"),
  "hp-laptop-jumia": jumia("hp laptop"),
  "hp-laptop-amazon": amazon("hp laptop"),
  "hp-laptop-aliexpress": aliexpress("hp laptop"),
  "hp-laptop": jumia("hp laptop"),
  "lenovo-laptop-jumia": jumia("lenovo laptop"),
  "lenovo-laptop-amazon": amazon("lenovo laptop"),
  "lenovo-laptop-aliexpress": aliexpress("lenovo laptop"),
  "lenovo-laptop": jumia("lenovo laptop"),
  
  // ============================================================
  // CATÉGORIES
  // ============================================================
  "smartphones": "https://www.jumia.ma/telephones-smartphones/",
  "pc-portables": "https://www.jumia.ma/ordinateurs-portables/",
  "accessoires": "https://www.jumia.ma/accessoires-telephones-tablettes/",
  "ecouteurs": "https://www.jumia.ma/ecouteurs-casques/",
  "ecouteurs-aliexpress": "https://s.click.aliexpress.com/e/_c3udIith",
  "ecouteurs-amazon": amazon("ecouteurs bluetooth"),
  "powerbank": "https://www.jumia.ma/batteries-externes/",
  "powerbank-aliexpress": "https://s.click.aliexpress.com/e/_c3qDEr8T",
  "powerbank-amazon": amazon("power bank 20000mah"),
  "chargeurs": "https://www.jumia.ma/chargeurs-cables/",
};

/**
 * Fonction pour obtenir le lien affilié à partir d'un slug
 */
export function getAffiliateLink(slug: string): string | null {
  return affiliateLinks[slug] || null;
}

/**
 * Fonction pour créer un slug à partir d'un nom de produit
 */
export function createProductSlug(productName: string): string {
  return productName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Fonction pour obtenir tous les liens multi-stores pour un produit
 */
export function getMultiStoreLinks(productName: string): Record<string, string> {
  const baseSlug = createProductSlug(productName);
  return {
    jumia: affiliateLinks[`${baseSlug}-jumia`] || affiliateLinks[baseSlug] || jumia(productName),
    amazon: affiliateLinks[`${baseSlug}-amazon`] || amazon(productName),
    aliexpress: affiliateLinks[`${baseSlug}-aliexpress`] || aliexpress(productName),
  };
}
