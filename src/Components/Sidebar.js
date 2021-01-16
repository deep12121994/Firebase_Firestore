import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function Sidebar() {
    const items = [
        { name: 'parties', label: 'Parties' },
        { name: 'items', label: 'Items' },
        { name: 'transactions', label: 'Transactions' },
        { 
            name: 'sale', label: 'Sale',
                items: [
                { name: 'sale order', label: 'Sale Order' },
                { name: 'payment in', label: 'Payment In' },
                { name: 'return order', label: 'Return Order'}
            ],
        },
        { 
            name: 'purchase', label:'Purchase', 
            items: [
                { name: 'purchase order', label: 'Purchase Order' },
                { name: 'payment out', label: 'Payment Out' },
                { name: 'return order', label: 'Return Order'}
            ],
        },
        { name: 'expense', label:'Expense'}
    ]
    
    return (
     
        <div className="sidebar">
            <List disablePadding dense>
                {items.map(({ label, name, items: subItems, ...rest }) => {
                return (
                    <React.Fragment key={name}>
                    <ListItem style={{ paddingLeft: 18 }} button {...rest}>
                        <ListItemText>{label}</ListItemText>
                    </ListItem>
                    {Array.isArray(subItems) ? (
                        <List disablePadding dense>
                        {subItems.map((subItem) => {
                            return (
                            <ListItem
                                key={subItem.name}
                                style={{ paddingLeft: 36 }}
                                button
                                dense
                            >
                                <ListItemText>
                                <span className="sidebar-subitem-text">
                                    {subItem.label}
                                </span>
                                </ListItemText>
                            </ListItem>
                            )
                        })}
                        </List>
                    ) : null}
                    </React.Fragment>
                )
                })}
            </List>
        </div>

    )
}

export default Sidebar;