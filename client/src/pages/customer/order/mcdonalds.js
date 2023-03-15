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
import { Mcd } from "../../../components/customer_view/restaurant/mcd";
import { SearchBar } from "../../../components/customer_view/searchbar";
// import { McdCart } from "../../../components/customer_view/restaurant/addtocart/mcdcart";
const mcd = [
  {
    id: 1,
    name: "Cheeseburger",
    image: "/static/images/customer_view/cartlist/mcd/burger.jpg",
    description: "Everyone's all time favourite cheeseburger but without cheese.",
    restaurant: "Mcdonalds",
    price: 6.0,
  },
  {
    id: 2,
    name: "Chicken Salad",
    image: "/static/images/customer_view/cartlist/mcd/chickensalad.jpg",
    description:
      "Want to eat healthy? Go for our chicken salad dish! Comes without thousand island sauce and purple cabbage.",
    restaurant: "Mcdonalds",
    price: 7.5,
  },
  {
    id: 3,
    name: "Pancake",
    image: "/static/images/customer_view/cartlist/mcd/pancake.jpg",
    description:
      "Hot piping pancakes to start your day fresh! Our customers favourite pancake with sausage set without the sausage.",
    restaurant: "Mcdonalds",
    price: 5.5,
  },
];

const McdOrder = () => {
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
  
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMcd, setFilteredMcd] = useState(mcd);

  useEffect(() => {
    const filteredData = mcd.filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMcd(filteredData);
  }, [searchQuery, mcd]);

  const handleAddToCart = (item) => {
    // add item to cart logic here
  };

  return (
    <>
      {buyer && (
        <Head>
          <title>Mcdonalds | WorthEats</title>
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
            <Mcd />
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
              {filteredMcd.map((item) => (
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

McdOrder.getLayout = (mcd) => (
  <>
    <SecuredBuy />
    {mcd}
  </>
);

export default McdOrder;
