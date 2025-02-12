import paths from './paths';

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: 'dashboard',
    subheader: 'Dashboard',
    path: '/',
    icon: 'mingcute:home-1-fill',
    active: true,
  },
  {
    id: 'features',
    subheader: 'Features',
    path: '#!',
    icon: 'mingcute:star-fill',
  },
  {
    id: 'users',
    subheader: 'Users',
    path: '#!',
    icon: 'mingcute:user-2-fill',
  },
  {
    id: 'pricing',
    subheader: 'Pricing',
    path: '#!',
    icon: 'mingcute:currency-dollar-2-line',
  },
  {
    id: 'integrations',
    subheader: 'Integrations',
    path: '#!',
    icon: 'mingcute:plugin-2-fill',
  },
  {
    id: 'authentication',
    subheader: 'Authentication',
    icon: 'mingcute:safe-lock-fill',
    items: [
      {
        name: 'Login',
        pathName: 'login',
        path: paths.login,
      },
      {
        name: 'Signup',
        pathName: 'signup',
        path: paths.signup,
      },
    ],
  },
  {
    id: 'settings',
    subheader: 'Settings',
    path: '#!',
    icon: 'material-symbols:settings-rounded',
    active: true,
  },
  {
    id: 'template-pages',
    subheader: 'Template pages',
    path: '#!',
    icon: 'mingcute:document-2-fill',
  },
  {
    id: 'account-settings',
    subheader: 'John Carter',
    path: '#!',
  },
];

export default sitemap;
