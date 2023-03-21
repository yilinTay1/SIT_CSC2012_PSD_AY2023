import Head from "next/head";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { SecuredBuy } from "../../../components/firebase/SecuredBuy";

// Import other components
import CustomerNavBar from "../../../components/customer_view/navigation/navbar";
import { Dtf } from "../../../components/customer_view/restaurant/dtf";
import { SearchBar } from "../../../components/customer_view/searchbar";

const dtf = [
  {
    id: 1,
    name: "Fried Rice",
    image: "/static/images/customer_view/cartlist/dtf/friedrice.jpg",
    description: "Our signature chicken fried rice loved by all, but without the chicken.",
    restaurant: "Din Tai Fung",
    price: 4.5,
  },
  {
    id: 2,
    name: "Spicy Lamian",
    image: "/static/images/customer_view/cartlist/dtf/lamian.jpg",
    description: "All time favourite spicy lamian but without the dumplings.",
    restaurant: "Din Tai Fung",
    price: 4.0,
  },
  {
    id: 3,
    name: "Xiao Long Bao",
    image: "/static/images/customer_view/cartlist/dtf/xlb.jpg",
    description: "Restuarant's most famous xiao long bao but replaced with chicken meat and stock",
    restaurant: "Din Tai Fung",
    price: 6.5,
  },
];

const DtfOrder = () => {
  const runOnce = useRef(true);
  const [buyer, setBuyer] = useState(false);

  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      const isbuyer = sessionStorage.getItem("buyer");
      if (isbuyer) setBuyer(true);
      console.log("/");
    }
  }, [runOnce]);

  // Cart functionality
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  // Search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDtf, setFilteredDtf] = useState(dtf);

  useEffect(() => {
    const filteredData = dtf.filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDtf(filteredData);
  }, [searchQuery, dtf]);

  return (
    <>
      {buyer && (
        <Head>
          <title>Din Tai Fung | WorthEats</title>
        </Head>
      )}

      {/* Navbar */}
      <CustomerNavBar cartItems={cartItems} setCartItems={setCartItems} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false} style={{ paddingLeft: 70, paddingRight: 70 }}>
          <Dtf />
          <br></br>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <br></br>

          {/* Din Tai Fung Items */}
          <Grid container spacing={2}>
            {filteredDtf.map((item) => (
              <Grid item key={item.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia sx={{ height: 200 }} image={item.image} title={item.name} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" id="productName" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="h5" id="productPrice">
                      ${item.price.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End of Din Tai Fung Items Component */}
        </Container>
      </Box>
    </>
  );
};

DtfOrder.getLayout = (dtf) => (
  <>
    <SecuredBuy />
    {dtf}
  </>
);

export default DtfOrder;
