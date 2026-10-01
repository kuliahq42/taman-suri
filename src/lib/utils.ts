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
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281398618619";
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${message}` : base;
};

export const smoothScrollTo = (id: string) => {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
