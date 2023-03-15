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
import { Croissant } from "../../../components/customer_view/restaurant/croissant";
import { SearchBar } from "../../../components/customer_view/searchbar";
// import { McdCart } from "../../../components/customer_view/restaurant/addtocart/mcdcart";

const CroissantOrder = () => {
  const runOnce = useRef(true);
  const [buyer, setBuyer] = useState(false);
  // const [pancake, setPancake] = useState(false)
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      const isbuyer = sessionStorage.getItem("buyer");
      if (isbuyer) setBuyer(true);
      console.log("/");
    }
  }, [runOnce]);

  // function addToCartPancake() {
  //   handleAddToCart({id: 'MCDP3', name: 'Pancake'})
  //   setPancake(true)
  // }
  const croissant = [
    {
      id: 1,
      name: "Mushroom Croissant",
      image: "/static/images/customer_view/cartlist/crazycross/mushroom.jpg",
      description: "One of our first few creations but without the cheese, still taste as good!",
      restaurant: "Crazy Croissant",
      price: 6.5,
    },
    {
      id: 2,
      name: "Smoke Salmon Croissant",
      image: "/static/images/customer_view/cartlist/crazycross/smokesal.jpg",
      description: "Our latest creation which everyone loves! Comes without lettuce and olives.",
      restaurant: "Crazy Croissant",
      price: 7.6,
    },
    {
      id: 3,
      name: "Turkey Croissant",
      image: "/static/images/customer_view/cartlist/crazycross/turkey.jpg",
      description: "Crazy Croissant's signature sandwich but without cheese and sauce.",
      restaurant: "Mcdonalds",
      price: 7.1,
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCroissant, setFilteredCroissant] = useState(croissant);

  useEffect(() => {
    const filteredData = croissant.filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCroissant(filteredData);
  }, [searchQuery, croissant]);

  const handleAddToCart = (item) => {
    // add item to cart logic here
  };

  return (
    <>
      {buyer && (
        <Head>
          <title>Crazy Croissant | WorthEats</title>
        </Head>
      )}

      {/* Navbar */}
      {buyer && <CustomerNavBar />}
      {buyer && (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth={false} style={{ paddingLeft: 70, paddingRight: 70 }}>
            <Croissant />
            <br></br>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {/* Category */}
            <Grid container spacing={10}>
              <Grid item lg={10} sm={6} xl={10} xs={12}>
                <br></br>
                {/* <RestCategory /> */}
              </Grid>
            </Grid>
            {/* End of Restaurants Category Component */}
            <br></br>

            {/* Best Sellers */}
            <Grid container spacing={2}>
              {filteredCroissant.map((item) => (
                <Grid item>
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
                      <Button
                        variant="contained"
                        onClick={() =>
                          handleAddToCart({ id: item.id, name: item.name, price: item.price })
                        }
                      >
                        Add to cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* End of Best Sellers Component */}
          </Container>
        </Box>
      )}
    </>
  );
};

CroissantOrder.getLayout = (croissant) => (
  <>
    <SecuredBuy />
    {croissant}
  </>
);

export default CroissantOrder;
