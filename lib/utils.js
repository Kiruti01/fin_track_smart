export const currencyFormatter = (amount) => {
<<<<<<< HEAD
=======

>>>>>>> 78d794db3bad9d9376b44e7f6f1306ac97a586b2
  const formatter = Intl.NumberFormat("en-US", {
    currency: "KES",
    style: "currency",
  });

  return formatter.format(amount);
};
