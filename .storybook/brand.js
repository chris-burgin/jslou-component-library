const url = window.location.host;
const brand = process.env.STORYBOOK_BRAND
  ? process.env.STORYBOOK_BRAND
  : url.includes('menguin')
    ? 'menguin'
    : url.includes('generationtux')
      ? 'gentux'
      : 'gentux'; // default to gentux

export default brand;
