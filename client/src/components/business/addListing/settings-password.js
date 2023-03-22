import { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';
import { FirebaseStorage } from '../../firebase/FirebaseStorage';

export const SettingsPassword = (props) => {
  const [values, setValues] = useState({
    productName: '',
    productTotalQty: '',
    productDescription: '',
    productPrice: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);

  }, [selectedFile]);

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  async function doSomething(e) {
    e.preventDefault();
    if (selectedFile) {
      FirebaseStorage.upload(selectedFile);
      console.log('Listing added',
        values.productName,
        values.productTotalQty,
        values.productDescription,
        values.productPrice);
    }
  }

  return (
    // {...props}
    <form onSubmit={doSomething}>
      <Card>
        <CardHeader
          title="Add New Listing"
        />
        <Divider/>
        <CardContent>
          <input type="file"
                 onChange={onSelectFile}/>
          {selectedFile && <img src={preview}/>}
          <TextField
            fullWidth
            label="Product Name"
            margin="normal"
            name="productName"
            onChange={handleChange}
            value={values.productName}
            type={'text'}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Product Description"
            margin="normal"
            name="productDescription"
            onChange={handleChange}
            type="text"
            value={values.productDescription}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Total Quantity"
            margin="normal"
            name="productTotalQty"
            onChange={handleChange}
            type="text"
            value={values.productTotalQty}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Product Price"
            margin="normal"
            name="productPrice"
            onChange={handleChange}
            type="text"
            value={values.productPrice}
            variant="outlined"
          />
        </CardContent>
        <Divider/>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            type="submit"
          >
            Add Listing
          </Button>
        </Box>
      </Card>
    </form>
  );
};
