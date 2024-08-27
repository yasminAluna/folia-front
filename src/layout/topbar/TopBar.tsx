import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className="bg-white shadow-md">
            <Toolbar className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img
                        src="/src/assets/logo/logo.png"
                        alt="Logo"
                        className="h-8 cursor-pointer"
                        onClick={() => navigate('/')}
                    />
                    <div className="flex items-center space-x-2 cursor-pointer border-r border-gray-300 pr-4" onClick={() => navigate('/inicio')}>
                        <HomeIcon className="text-salmon" />
                        <Typography variant="h6" className="text-salmon">
                            Início
                        </Typography>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer border-r border-gray-300 pr-4" onClick={() => navigate('/boleto')}>
                        <ReceiptIcon className="text-salmon" />
                        <Typography variant="h6" className="text-salmon">
                            Boleto
                        </Typography>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer border-r border-gray-300 pr-4" onClick={() => navigate('/nota-fiscal')}>
                        <AssignmentIcon className="text-salmon" />
                        <Typography variant="h6" className="text-salmon">
                            Nota Fiscal
                        </Typography>
                    </div>
                    <div className="flex items-center space-x-2 cursor-pointer border-r border-gray-300 pr-4" onClick={() => navigate('/acompanhamento')}>
                        <AssignmentIcon className="text-salmon" />
                        <Typography variant="h6" className="text-salmon">
                            Acompanhamento
                        </Typography>
                    </div>
                    <Typography variant="h6" className="pl-4 text-salmon">
                        Empresa Fictícia
                    </Typography>
                </div>
                <div className="flex items-center space-x-2">
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        className="p-0"
                    >
                        <AccountCircle className="text-salmon" />
                        <ArrowDropDownIcon className="text-salmon" />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Manutenção do Usuário</MenuItem>
                        <MenuItem onClick={handleClose}>Sair</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
