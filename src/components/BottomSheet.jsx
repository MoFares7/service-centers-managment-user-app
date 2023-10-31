import React from 'react';
import { Modal, Paper } from '@mui/material';

const BottomSheet = ({ open, onClose, children }) => {
        return (
                <Modal
                        open={open}
                        onClose={onClose}
                        style={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                justifyContent: 'center',
                        }}
                >
                        <Paper style={{ padding: 16, width: '80%', maxWidth: 400 }}>
                                {children}
                        </Paper>
                </Modal>
        );
};

export default BottomSheet;
