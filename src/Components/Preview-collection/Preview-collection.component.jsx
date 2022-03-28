import { Box, Typography, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import useLoadCart from '../../Hooks/useLoadCart';
import { addToCart } from '../../Redux/Cart/action';
import './Preview-collection.style.scss';

export default function PreviewCollectionComponent({title, items}) {
  const cart = useLoadCart();
  const dispatch = useDispatch();

  const updateCart = (item) => {
    dispatch(addToCart(1, cart, {...item, quantity : 1}))
  }

  return (
    <Box padding={'1rem'}>
        <Typography variant="h4">{title.toUpperCase()}</Typography>
        <Box>
            <ImageList sx={{ width: '100%', height: '100%' }} cols={5} rowHeight={250}>
              {items.map((item) => (
                <Box onClick={()=>{updateCart(item)}}>
                  <ImageListItem key={item.id + '_' + item.name}>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={'Add to cart'}
                      subtitle=""
                      className="shop-details"
                    />
                    
                  </ImageListItem>
                  <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='h6'>{item.name}</Typography>
                    <Typography variant='body2'>INR {item.price}</Typography>
                  </Box>
                </Box>
              ))}
            </ImageList>
        </Box>
    </Box>
  )
}
