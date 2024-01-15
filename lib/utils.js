export const currencyFormatter = (amount) => {
  const formatter = Intl.NumberFormat("en-US", {
    currency: "KES",
    style: "currency",
  });

  return formatter.format(amount);
};
