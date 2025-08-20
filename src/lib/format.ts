export const formatPrice = (value: number) =>
    new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 2 }).format(value);
  
  export const toStars = (rating: number) => {
    const full = Math.floor(rating);
    const half = rating - full >= 0.5;
    return { full, half, empty: 5 - full - (half ? 1 : 0) };
  };
  