import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material';
import { Height } from '@mui/icons-material';

function Container(title,{children}:Props) {
  return (
    <Box>

        <Typography>{title}</Typography>
  <Typography>ຕາຕະລາງຂໍ່ມູນເມືອງ</Typography>
  {children}
    </Box>
  )
}

type Props = {
children:ReactNode;
}

export default Container

