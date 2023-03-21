import Head from "next/head";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { SecuredBuy } from "../../components/firebase/SecuredBuy";
import NextLink from "next/link";
import StarRateIcon from "@mui/icons-material/StarRate";

// Import other components
import CustomerNavBar from "../../components/customer_view/navigation/navbar";
import { SearchBar } from "../../components/customer_view/searchbar";
import { RestCategory } from "../../components/customer_view/home/restCategory";

const cafe = [
  {
    id: 1,
    name: "Crazy Croissant",
    image: "/static/images/customer_view/restaurant/crazycross.jpg",
    timeaway: "10 min away",
    rating: 4.5,
    link: "/customer/order/crazycroissant",
  },
];

const Cafe = () => {
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

  // Search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCafe, setFilteredCafe] = useState(cafe);

  useEffect(() => {
    const filteredData = cafe.filter((d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCafe(filteredData);
  }, [searchQuery, cafe]);

  return (
    <>
      {buyer && (
        <Head>
          <title>Cafe | WorthEats</title>
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
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <br></br>

            {/* Restaurants Category Component */}
            <Typography color="textPrimary" variant="h2">
              Restaurants
            </Typography>

            {/* Category */}
            <Grid container spacing={10}>
              <Grid item lg={10} sm={6} xl={10} xs={12}>
                <br></br>
                <RestCategory />
              </Grid>
            </Grid>
            {/* End of Restaurants Category Component */}
            <br></br>
            <br></br>

            {/* Cafe Component */}
            <Typography color="textPrimary" variant="h2">
              Cafes
            </Typography>

            <br></br>

            {/* Cafe Restaurants */}
            <Grid container spacing={2}>
              {filteredCafe.map((item) => (
                <Grid item key={item.id}>
                  <Card sx={{ maxWidth: 550 }}>
                    <NextLink
                      href={item.link}
                      style={{ cursor: "pointer", color: "black", textDecoration: "None" }}
                    >
                      <Link
                        to={item.link}
                        underline="hover"
                        sx={{
                          cursor: "pointer",
                          color: "black",
                        }}
                      >
                        <CardMedia sx={{ height: 180 }} image={item.image} title={item.name} />
                        <CardContent sx={{ width: 550 }}>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.timeaway}
                          </Typography>

                          <Typography
                            variant="h6"
                            color="text.secondary"
                            style={{ float: "right" }}
                          >
                            <StarRateIcon fontSize="medium" /> {item.rating.toFixed(1)}
                          </Typography>
                        </CardContent>
                      </Link>
                    </NextLink>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* End of Cafe Component */}
          </Container>
        </Box>
      )}
    </>
  );
};

Cafe.getLayout = (cafe) => (
  <>
    <SecuredBuy />
    {cafe}
  </>
);

export default Cafe;
