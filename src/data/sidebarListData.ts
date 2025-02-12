import sitemap from 'routes/sitemap';

export const topListData = sitemap.filter((item) => {
  const id = item.id;
  if (
    id === 'template-pages' ||
    id === 'settings' ||
    id === 'account-settings' ||
    id === 'authentication'
  ) {
    return null;
  }
  return item;
});

export const bottomListData = sitemap.filter((item) => {
  const id = item.id;
  if (id === 'template-pages' || id === 'settings' || id === 'authentication') {
    return item;
  }
  return null;
});

export const profileListData = sitemap.find((item) => item.id === 'account-settings');
