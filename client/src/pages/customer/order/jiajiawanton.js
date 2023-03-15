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
// import { McdCart } from "../../../components/customer_view/restaurant/addtocart/mcdcart";

const WantonOrder = () => {
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
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredWanton, setFilteredWanton] = useState(wanton);

  useEffect(() => {
    const filteredData = wanton.filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredWanton(filteredData);
  }, [searchQuery, wanton]);

  const handleAddToCart = (item) => {
    // add item to cart logic here
  };

  return (
    <>
      {buyer && (
        <Head>
          <title>Jia Jia Wanton | WorthEats</title>
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
            <Wanton />
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
              {filteredWanton.map((item) => (
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

WantonOrder.getLayout = (wanton) => (
  <>
    <SecuredBuy />
    {wanton}
  </>
);

export default WantonOrder;
