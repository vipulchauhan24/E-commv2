import { Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import useLoadCategories from '../../Hooks/useLoadCategories'
import './homepage.scss';


const HomepageContainer = () => {
    const {categories} = useLoadCategories(); 
    return (
        <Box padding={'0 1rem'}>
            <ImageList
            sx={{ width: '100%', height: '100%' }}
            variant="quilted"
            cols={4}
            rowHeight={121}
            >
            {categories.map((item) => (
                <ImageListItem style={{border: '1px solid #000'}} key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        src={item.img}
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
        </Box>
    );
}

export default HomepageContainer;
