import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import React from 'react';

const ListWithButton = ({ items, onClick }) => (
    <Grid container spacing={16}>
        <Grid item xs={12} md={6}>
            <div>
                <List>
                    {items.map(({ item, quantity }) => (
                        <ListItem>
                            <ListItemText primary={`${item} (${quantity})`} />
                            <ListItemSecondaryAction>
                                <IconButton onClick={() => onClick(item)} aria-label="AddShoppingCart">
                                    <AddShoppingCartIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Grid>
    </Grid>
);

ListWithButton.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        item: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    })),
    onClick: PropTypes.func.isRequired,
};

export default ListWithButton;
