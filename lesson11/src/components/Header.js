import {AppBar, Box, Button, Container, Grid, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import DiamondIcon from '@mui/icons-material/Diamond';

export default function Header() {
    return (
        <AppBar position='static' color='secondary'>
            <Container maxWidth='xl'>
                <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Grid sx={{display: 'flex', alignItems:'center'}}>
                        <DiamondIcon sx={{display: { xs: "none", md: "flex"}, mr: 1 }}/>
                        <Typography
                            variant='h6'
                            noWrap
                            component='a'
                            href='/'
                            sx={{
                                mr: 2,
                                display:{
                                    xs: 'none',
                                    md: 'flex',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }
                            }}
                        >
                            NOTES
                        </Typography>
                    </Grid>
                    <Box sx={{ flexGrow: 0}}>
                        <Link style={{textDecoration: 'none'}} to="/create">
                            <Button variant="contained" color="primary">
                                Create ToDo
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}