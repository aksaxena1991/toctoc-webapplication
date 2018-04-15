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
        state: 'user',
        short_label: 'U',
        name: 'User Profile',
        type: 'link',
        icon: 'ti-user'
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
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
