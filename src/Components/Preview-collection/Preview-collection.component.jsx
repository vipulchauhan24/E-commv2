import { Box, Typography } from '@mui/material'
import React from 'react'

export default function PreviewCollectionComponent({title, items}) {
  return (
    <Box>
        <Typography variant="h4">{title.toUpperCase()}</Typography>
        <Box>
            {
                items.map(item=>{
                    return <div key={item.id}>{item.name}</div>
                })
            }
        </Box>
    </Box>
  )
}
