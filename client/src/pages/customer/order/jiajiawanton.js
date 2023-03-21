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
import { Wanton } from "../../../components/customer_view/restaurant/wanton";
import { SearchBar } from "../../../components/customer_view/searchbar";

const wanton = [
  {
    id: 1,
    name: "Charsiew Wanton Mee",
    image: "/static/images/customer_view/cartlist/wanton/charsiew.jpg",
    description: "Charsiew wanton mee without dumplings, still tasty with our homemade sauce!",
    restaurant: "Jia Jia Wanton",
    price: 4.5,
  },
  {
    id: 2,
    name: "Chicken Wanton Mee",
    image: "/static/images/customer_view/cartlist/wanton/chicken.jpg",
    description:
      "Chicken wanton mee without charsiew and dumpling, good for a healthier choice option!",
    restaurant: "Jia Jia Wanton",
    price: 3.5,
  },
  {
    id: 3,
    name: "Dumpling Wanton Mee",
    image: "/static/images/customer_view/cartlist/wanton/dumpling.jpg",
    description:
      "Dumpling wanton mee without charsiew, still a very fulling choice with our handmade wanton dumplings! ",
    restaurant: "Jia Jia Wanton",
    price: 5.5,
  },
];
const WantonOrder = () => {
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
  const [filteredWanton, setFilteredWanton] = useState(wanton);

  useEffect(() => {
    const filteredData = wanton.filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredWanton(filteredData);
  }, [searchQuery, wanton]);

  return (
    <>
      {buyer && (
        <Head>
          <title>Jia Jia Wanton | WorthEats</title>
        </Head>
      )}

      {/* Navbar */}
      {buyer && <CustomerNavBar cartItems={cartItems} setCartItems={setCartItems} />}
      {buyer && (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth={false} style={{ paddingLeft: 70, paddingRight: 70 }}>
            <Wanton />
            <br></br>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <br></br>

            {/* Wanton Items */}
            <Grid container spacing={2}>
              {filteredWanton.map((item) => (
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
            {/* End of Wanton Items Component */}
          </Container>
        </Box>
      )}
    </>
  );
};

WantonOrder.getLayout = (wanton) => (
  <>
    <SecuredBuy />
    {wanton}
  </>
);

export default WantonOrder;
