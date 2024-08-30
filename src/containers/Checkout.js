import React, { useState } from "react";
import DrawerAppBar from "../components/AppBar";
import { Box, Button, TextField, Typography, Grid, Paper } from "@mui/material";

function Checkout() {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data (replace this with an API call or other actions)
    console.log("Form Data Submitted:", formData);

    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });
  };

  return (
    <div>
      <DrawerAppBar />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          px: 2, // Padding for mobile devices
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: { xs: 2, md: 3 }, // Responsive padding
            maxWidth: { xs: "100%", md: 600 }, // Full width on mobile, max 600px on larger screens
            width: "100%",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Checkout
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Full Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{
                    "& label": {
                      color: "#8bc34a", // Label color
                    },
                    "& label.Mui-focused": {
                      color: "#8bc34a", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#8bc34a", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#8bc34a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#8bc34a",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    "& label": {
                      color: "#8bc34a", // Label color
                    },
                    "& label.Mui-focused": {
                      color: "#8bc34a", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#8bc34a", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#8bc34a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#8bc34a",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Address */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  sx={{
                    "& label": {
                      color: "#8bc34a", // Label color
                    },
                    "& label.Mui-focused": {
                      color: "#8bc34a", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#8bc34a", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#8bc34a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#8bc34a",
                      },
                    },
                  }}
                />
              </Grid>

              {/* City */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  sx={{
                    "& label": {
                      color: "#8bc34a", // Label color
                    },
                    "& label.Mui-focused": {
                      color: "#8bc34a", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#8bc34a", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#8bc34a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#8bc34a",
                      },
                    },
                  }}
                />
              </Grid>

              {/* State */}
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  sx={{
                    "& label": {
                      color: "#8bc34a", // Label color
                    },
                    "& label.Mui-focused": {
                      color: "#8bc34a", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#8bc34a", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#8bc34a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#8bc34a",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Zip Code */}
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  label="Zip Code"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  sx={{
                    "& label": {
                      color: "#8bc34a", // Label color
                    },
                    "& label.Mui-focused": {
                      color: "#8bc34a", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#8bc34a", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#8bc34a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#8bc34a",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Payment Information Header */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Payment Information
                </Typography>
              </Grid>

              {/* Name on Card */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Name on Card"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  sx={{
                    "& label": {
                      color: "#8bc34a", // Label color
                    },
                    "& label.Mui-focused": {
                      color: "#8bc34a", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#8bc34a", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#8bc34a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#8bc34a",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Card Number */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Card Number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  sx={{
                    "& label": {
                      color: "#8bc34a", // Label color
                    },
                    "& label.Mui-focused": {
                      color: "#8bc34a", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#8bc34a", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#8bc34a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#8bc34a",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Expiry Date */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Expiry Date"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  sx={{
                    "& label": {
                      color: "#8bc34a", // Label color
                    },
                    "& label.Mui-focused": {
                      color: "#8bc34a", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#8bc34a", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#8bc34a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#8bc34a",
                      },
                    },
                  }}
                />
              </Grid>

              {/* CVV */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="CVV"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  sx={{
                    "& label": {
                      color: "#8bc34a", // Label color
                    },
                    "& label.Mui-focused": {
                      color: "#8bc34a", // Label color when focused
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#8bc34a", // Border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#8bc34a",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#8bc34a",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    backgroundColor: "#8bc34a", // Button color matching theme
                    "&:hover": {
                      backgroundColor: "#7cb342", // Slightly darker on hover
                    },
                  }}
                >
                  Place Order
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </div>
  );
}

export default Checkout;
