import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

const tiers = [
  {
    title: "One Tally Company",
    price: "Rs.7000 + GST",
    description: [
      "Template Creation",
      "One eCommerce Platform",
      "Includes One Year Support",
      "Rs.3500 Next year onwards",

    ],
    buttonText: "Schedule Demo",
    buttonVariant: "contained",
  },
  {
    title: "Additional Company",
    price: "Rs.2000 + GST",
    description: [
      "Template Creation",
      "One eCommerce Platform",
      "Includes One Year Support",
      "Rs.1000 Next year onwards",
    ],
    buttonText: "Order Now",
    buttonVariant: "contained",
  },
  {
    title: "Additional Template",
    price: "Rs.1000 + GST ",
    description: [
      "Per Additional Template",
      "Phone & email support",
    ],
    buttonText: "Order Now",
    buttonVariant: "contained",
  },
];

function Pricing() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none"} }}
      />
      <CssBaseline />
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          sx={{fontWeight:"bold",mt:2}}
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing for all Voucher types
        </Typography>
        <Typography
          align="center"
          color="text.secondary"
          component="p"
        >
          Import any voucher type, we help from Template Creation to Successful Import.
        
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" style={{marginBottom:"50px"}}>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "One Tally Company" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{fontWeight:"bold"}}
                      color="text.primary"
                    >
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">/1st yr
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Pricing;