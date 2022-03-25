import React, { Component } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './homepage.scss';
class HomepageComponent extends Component {

    state = {
        itemData : [
            {
                img: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=404&q=80',
                title: 'Hats',
                author: '@bkristastucchio',
                rows: 2,
                cols: 1,
                featured: true,
            },
            {
                img: 'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                title: 'Jackets',
                author: '@bkristastucchio',
                rows: 2,
                cols: 1,
                featured: true,
            },
            {
                img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                title: 'Sneakers',
                author: '@bkristastucchio',
                rows: 2,
                cols: 1,
                featured: true,
            },
            {
                img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
                title: 'Women',
                author: '@bkristastucchio',
                rows: 2,
                cols: 2,
                featured: true,
            },
            {
                img: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80',
                title: 'Men',
                author: '@bkristastucchio',
                rows: 2,
                cols: 2,
                featured: true,
            }
        ]
    }    
    srcset = (image, size, rows = 1, cols = 1) => {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }
    render() {
        return (
            <ImageList
             sx={{ width: '100%', height: '100%' }}
             variant="quilted"
             cols={4}
             rowHeight={121}
             >
                {this.state.itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            src={item.img}
                            srcSet={item.img}
                            alt={item.title}
                            loading="lazy"
                            className="thumbnail-img"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle="Shop Now"
                            className="menu-details"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        );
    }
}

export default HomepageComponent;
