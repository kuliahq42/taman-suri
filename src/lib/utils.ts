export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatWhatsAppMessage = (
  items: Array<{ name: string; quantity: number; price: number }>,
  total: number
): string => {
  const lines: string[] = [];
  lines.push("🌿 *Taman Suri Plant Order*");
  lines.push("");
  lines.push("Hi! I'd like to order:");
  lines.push("");

  items.forEach((item, idx) => {
    lines.push(
      `${idx + 1}. ${item.name} × ${item.quantity} — ${formatCurrency(
        item.price * item.quantity
      )}`
    );
  });

  lines.push("");
  lines.push(`━━━━━━━━━━━━━━━`);
  lines.push(`*TOTAL: ${formatCurrency(total)}*`);
  lines.push("");
  lines.push("Please provide shipping details. Thank you! 🙏");

  return encodeURIComponent(lines.join("\n"));
};

export const getWhatsAppLink = (message?: string): string => {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6282311139873";
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${message}` : base;
};

const HEADER_OFFSET = 80;

export const smoothScrollToId = (id: string) => {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) {
    window.location.hash = id;
    return;
  }
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = el.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - HEADER_OFFSET;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
  if (history.pushState) {
    history.pushState(null, "", `#${id}`);
  } else {
    window.location.hash = id;
  }
};

export const navigateToHomeAndScroll = (id: string) => {
  if (typeof window === "undefined") return;
  window.location.href = `/#${id}`;
};

export const scrollHashIntoViewOnMount = () => {
  if (typeof window === "undefined") return;
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;
  const tryScroll = () => {
    const el = document.getElementById(hash);
    if (!el) return false;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - HEADER_OFFSET;
    setTimeout(() => {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 150);
    return true;
  };
  if (!tryScroll()) {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (tryScroll() || count > 10) clearInterval(interval);
    }, 100);
  }
};
