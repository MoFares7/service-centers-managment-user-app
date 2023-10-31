import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function MainButton({ onClick, title }) {
        return (
                <Stack direction="column" spacing={2}>
                        <Button
                                variant=""
                                sx={{
                                        backgroundColor: '#9C27B0',
                                        color: '#fff',
                                        '&:hover': {
                                                backgroundColor: '#9C27B0',
                                        },
                                        width: {

                                                sm: '200px',
                                                md: '300px',
                                                xl: '300px'
                                        },
                                }}
                                onClick={onClick}
                        >
                                {title}
                        </Button>
                </Stack >
        );
}
