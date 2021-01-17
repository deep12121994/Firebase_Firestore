import React from 'react';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';


export const SidebarVal = [
  {
    title: 'Parties',
    path: '/', 
    cName: 'nav-text'
  },
  {
    title: 'Items',
    path: '/items',
    icon: <ListAltIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Transactions',
    path: '/transactions',
    icon: <SyncAltIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Sale',
    path: '/team',
    cName: 'nav-text',
    items: [
      {
        title: 'Sale Order',
        path: '/sale order',
        cName: 'nav-text',
      },
      {
        title: 'Payment In',
        path: '/payment in',
        cName: 'nav-text',
      },
      {
        title: 'Return Order',
        path: '/return order',
        icon: <RemoveShoppingCartIcon/>,
        cName: 'nav-text',
      }
    ]    
  },
  {
    title: 'Purchase',
    path: '/purchase',
    icon: <ShoppingCartIcon/>,
    cName: 'nav-text',
    items: [
      {
        title: 'Purchase Order',
        path: '/purchase order',
        icon: <ShoppingCartIcon/>,
        cName: 'nav-text',
      },
      {
        title: 'Payment Out',
        path: '/payment out',
        cName: 'nav-text',
      },
      {
        title: 'Return Order',
        path: '/return order',
        icon: <RemoveShoppingCartIcon/>,
        cName: 'nav-text',
      }
    ]    
  },
  {
    title: 'Expense',
    path: '/expensees',
    cName: 'nav-text'
  }
];

export default SidebarVal;