import i18n from './i18n';

export const _ = (prefix, obj) =>
  obj[`${prefix}_${i18n.language}`] ?? obj[`${prefix}_hy`];
