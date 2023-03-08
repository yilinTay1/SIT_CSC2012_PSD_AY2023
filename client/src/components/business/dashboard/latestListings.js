import { subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const products = [
  {
    id: uuid(),
    name: 'Wonton Noodles, No Vegetables',
    imageUrl: '/static/images/products/product_1.jpg',
    uploadTime: subHours(Date.now(), 2),
    qty: 8
  },
  {
    id: uuid(),
    name: 'Bubble Tea, No Bubble',
    imageUrl: '/static/images/products/product_2.jpg',
    uploadTime: subHours(Date.now(), 2),
    qty: 2
  },
  {
    id: uuid(),
    name: 'Double Cheeseburger, No Cheese',
    imageUrl: '/static/images/products/product_3.jpg',
    uploadTime: subHours(Date.now(), 3),
    qty: 5
  }
];

export const LatestListings = (props) => (
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Latest Listings"
    />
    <Divider/>
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                borderRadius: 5,
                height: 50,
                width: 50
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Total Quantity: ${product.qty}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <UnfoldMoreIcon/>
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider/>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="secondary"
        endIcon={<ArrowRightIcon/>}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);
