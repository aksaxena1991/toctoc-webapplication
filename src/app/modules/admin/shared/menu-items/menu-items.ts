import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },
      {
        state: 'roles',
        short_label: 'R',
        name: 'Roles',
        type: 'sub',
        icon: 'ti-view-grid',
        // badge: [
        //   {
        //     type: 'danger',
        //     value: '100+'
        //   }
        // ],
        children: [
          {
            state: 'view',
            name: 'View Role'
          },
          {
            state: 'add',
            name: 'Add Role'
          }
        ]
      },
      {
        state: 'coupons',
        short_label: 'R',
        name: 'Coupons',
        type: 'sub',
        icon: 'ti-view-grid',
        // badge: [
        //   {
        //     type: 'danger',
        //     value: '100+'
        //   }
        // ],
        children: [
          {
            state: 'view',
            name: 'View Coupon'
          },
          {
            state: 'add',
            name: 'Add Coupon'
          }
        ]
      }
    ],
  },
  {
    label: 'Stock Management',
    main: [
      {
        state: 'categories',
        short_label: 'P',
        name: 'Categories',
        type: 'sub',
        icon: 'ti-view-grid',
        // badge: [
        //   {
        //     type: 'danger',
        //     value: '100+'
        //   }
        // ],
        children: [
          {
            state: 'view',
            name: 'View Category'
          },
          {
            state: 'add',
            name: 'Add Category'
          }
        ]
      },
      {
        state: 'products',
        short_label: 'P',
        name: 'Products',
        type: 'sub',
        icon: 'ti-view-grid',
        // badge: [
        //   {
        //     type: 'danger',
        //     value: '100+'
        //   }
        // ],
        children: [
          {
            state: 'view',
            name: 'View Product'
          },
          {
            state: 'add',
            name: 'Add Product'
          }
        ]
      }
    ]
  },
  {
    label: 'Map And Extra Pages ',
    main: [
      {
        state: 'map',
        short_label: 'M',
        name: 'Maps',
        type: 'link',
        icon: 'ti-map-alt'
      },
      {
        state: 'auth',
        short_label: 'A',
        name: 'Auth',
        type: 'sub',
        icon: 'ti-id-badge',
        children: [
          {
            state: 'login',
            type: 'link',
            name: 'Login',
            target: true
          }, {
            state: 'registration',
            type: 'link',
            name: 'Registration',
            target: true
          }
        ]
      },
      {
        state: 'error',
        external: 'http://lite.codedthemes.com/guru-able/error.html',
        name: 'Error',
        type: 'external',
        icon: 'ti-layout-list-post',
        target: true
      },
      {
        state: 'user',
        short_label: 'U',
        name: 'User Profile',
        type: 'link',
        icon: 'ti-user'
      }
    ]
  },
  {
    label: 'Other',
    main: [
      {
        state: '',
        short_label: 'M',
        name: 'Menu Levels',
        type: 'sub',
        icon: 'ti-direction-alt',
        children: [
          {
            state: '',
            name: 'Menu Level 2.1',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.2',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.2.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.2.2',
                target: true
              }
            ]
          }, {
            state: '',
            name: 'Menu Level 2.3',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.4',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.4.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.4.2',
                target: true
              }
            ]
          }
        ]
      },
      {
        state: 'simple-page',
        short_label: 'S',
        name: 'Simple Page',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
