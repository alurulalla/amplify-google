import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useEffect, useState } from 'react';
import useAuth from '../utils/useCurrentUser';
import '../App.css';
import axios from 'axios';
import { Button, Container, Stack, Text } from '@chakra-ui/react';
import Product from '../components/Products';

const ProductPage = () => {
  const { currentUser } = useAuth();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get('http://localhost:4500/api/products');
    setProducts(data);
  };

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
      getProducts();
    }
  }, [currentUser]);
  return (
    <Authenticator>
      {({ signOut }) => (
        <>
          <div className='productsList'>
            <Text fontSize='md'>
              {currentUser?.attributes?.name || currentUser?.attributes?.email}
            </Text>
            <Button colorScheme='teal' onClick={signOut} size='xs'>
              Logout
            </Button>
          </div>
          <Text fontSize='md'>List of Available Products</Text>
          <Container maxW='md' color='black'>
            <Stack spacing={8} direction='column'>
              {products.map((prod) => (
                <Product
                  key={prod.id}
                  name={prod.name}
                  description={prod.description}
                  price={prod.price}
                />
              ))}
            </Stack>
          </Container>
        </>
      )}
    </Authenticator>
  );
};

export default ProductPage;
