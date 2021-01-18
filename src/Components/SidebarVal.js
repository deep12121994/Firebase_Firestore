import React from 'react';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import StoreIcon from '@material-ui/icons/Store';
import PaymentIcon from '@material-ui/icons/Payment';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
//import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
//import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import * as RiIcons from 'react-icons/ri';

export const SidebarVal = [
  {
    title: 'Parties',
    path: '/parties', 
    icon: <PermContactCalendarIcon />,
    cName: 'nav-text',
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
    path: '/sale',
    icon: <StoreIcon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Sale Order',
        path: '/sale/sale order',
        icon: <StoreIcon />,
        cName: 'sub-nav',
      },
      {
        title: 'Payment In',
        path: '/sale/payment in',
        icon: <ArrowDownwardIcon />,
        cName: 'sub-nav',
      },
      {
        title: 'Return Order',
        path: '/sale/return order',
        icon: <RemoveShoppingCartIcon/>,
        cName: 'sub-nav',
      }
    ]    
  },
  {
    title: 'Purchase',
    path: '/purchase',
    icon: <ShoppingCartIcon/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Purchase Order',
        path: '/purchase/purchase order',
        icon: <ShoppingCartIcon/>,
        cName: 'sub-nav'
      },
      {
        title: 'Payment Out',
        path: '/purchase/payment out',
        icon: <ArrowUpwardIcon />,
        cName: 'sub-nav'
      },
      {
        title: 'Return Order',
        path: '/purchase/return order',
        icon: <RemoveShoppingCartIcon/>,
      }
    ]
  },
  {
    title: 'Expense',
    path: '/expensees',
    icon: <PaymentIcon />,
    cName: 'nav-text'
  }
];

{/*export const SidebarVal = [
  {
    title: 'Parties',
    path: '/parties', 
    icon: <PermContactCalendarIcon />,
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
    path: '/sale',
    icon: <StoreIcon />,
    cName: 'nav-text',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    items: [
      {
        title: 'Sale Order',
        path: '/sale/sale order',
        icon: <StoreIcon />,
        cName: 'nav-text',
      },
      {
        title: 'Payment In',
        path: '/sale/payment in',
        cName: 'nav-text',
      },
      {
        title: 'Return Order',
        path: '/sale/return order',
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
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    items: [
      {
        title: 'Purchase Order',
        path: '/purchase/purchase order',
        icon: <ShoppingCartIcon/>,
        cName: 'nav-text',
      },
      {
        title: 'Payment Out',
        path: '/purchase/payment out',
        cName: 'nav-text',
      },
      {
        title: 'Return Order',
        path: '/purchase/return order',
        icon: <RemoveShoppingCartIcon/>,
        cName: 'nav-text',
      }
    ]    
  },
  {
    title: 'Expense',
    path: '/expensees',
    icon: <PaymentIcon />,
    cName: 'nav-text'
  }
];*/}

export default SidebarVal;