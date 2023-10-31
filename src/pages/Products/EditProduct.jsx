import React, { useEffect, useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { db } from "../../firebase-config";
import { collection, getDocs, updateDoc, doc, get } from "firebase/firestore";
import Swal from "sweetalert2";
import { useAppStore } from "../../appStore";

const EditProduct = ({ fid, closeEvent }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const empCollectionRef = collection(db, "products");
  const setRows = useAppStore((state) => state.setRows);

  useEffect(()=>{
    console.log("FId:" + fid.id);
    setName(fid.name);
    setPrice(fid.price);
    setCategory(fid.category);
  },[])

  const currencies = [
    {
      value: "Mobile",
      label: "Mobile",
    },
    {
      value: "Laptop",
      label: "Laptop",
    },
    {
      value: "TWS",
      label: "TWS",
    },
    {
      value: "LED TV",
      label: "LED TV",
    },
    {
      value: "Bluetooth Speakers",
      label: "Bluetooth Speakers",
    },
    {
      value: "Electronics",
      label: "Electronics",
    },
  ];

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const createUser = async () => {
  const userDoc = doc(db,"products",fid.id);
  const newfields = {
    name : name,
    price : Number(price),
    category: category,
    date : String(new Date()),
  };
  await updateDoc(userDoc,newfields);
    getUsers();
    closeEvent();
    Swal.fire("Submitted!", "Your file has been submitted.", "success");
  };

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Edit Products
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>

      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            value={name}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            size="small"
            sx={{ minWidth: "100%" }}
            value={price}
            onChange={handlePriceChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            select
            size="small"
            sx={{ minWidth: "100%" }}
            value={category}
            onChange={handleCategoryChange}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createUser}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
};

export default EditProduct;
