import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';


const FooterList = ({ footerLink }: any) => {

    console.log(footerLink)
    return (
        <List>
            <ListItem sx={{ padding: "0" }}>
                <ListItemText primary={footerLink.title} />
            </ListItem>
            {footerLink.links.map((item, index) => {
                return (
                    <ListItem key={index} sx={{ padding: "0" }}>
                        <ListItemButton>
                            <Link style={{ textDecoration: "none", color: "black" }} href={item.url}>{item.title}</Link>
                        </ListItemButton>
                    </ListItem>
                )
            })}

        </List>
    )
}

export default FooterList