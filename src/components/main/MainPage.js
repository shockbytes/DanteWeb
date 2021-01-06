import './MainPage.css';
import React from 'react';
import {fade, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
    BottomNavigation,
    BottomNavigationAction,
    Card,
    GridList, InputBase,
} from "@material-ui/core";
import ForLaterIcon from '@material-ui/icons/BookmarkBorder';
import ReadingIcon from '@material-ui/icons/ClassOutlined';
import ReadIcon from '@material-ui/icons/DoneOutline';
import bookData from '../api/data.json'
import SearchIcon from '@material-ui/icons/Search';
import {indexOfReadingState} from '../api/ReadingState'

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: 'flex',
    },
    sectionMobile: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    search: {
        position: 'relative',
        borderRadius: 30,
        backgroundColor: fade("#AAA", 0.15),
        '&:hover': {
            backgroundColor: fade("#AAA", 0.25),
        },
        top: 20,
        marginRight: "auto",
        marginLeft: "auto",
        width: '50%',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    navigation: {
        width: 300,
        [theme.breakpoints.up('md')]: {
            width: 500,
        },
        borderRadius: 30,
        position: "fixed",
        bottom: 40,
        right: 0,
        left: 0,
        marginLeft: "auto",
        marginRight: "auto"
    },
    content: {
        padding: 40,
    },
    gridList: {
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    tile: {
        margin: 16
    }
}));

function MainPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div className={classes.grow}>
            <AppBar position="static" color="#FFF">
                <Toolbar>
                    <h2>Dante</h2>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <p className={classes.sectionMobile}>Martin Macheiner</p>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon/>
                </div>
                <InputBase
                    placeholder="Search"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{'aria-label': 'search'}}
                />
            </div>
            <div className={classes.content}>
                <GridList className={classes.gridList} cols={2.2} spacing={32}>
                    {bookData.books
                        .filter(book => {
                            return indexOfReadingState(book.state) === value
                        })
                        .sort((a, b) => a.position - b.position)
                        .map((book) => (
                            <Card variant={"outlined"} className={classes.tile}>
                                <h4>{book.title}</h4>
                                <p>{book.author}</p>
                            </Card>
                        ))}
                </GridList>
            </div>

            <Card className={classes.navigation} variant={"outlined"}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction label="For Later" icon={<ForLaterIcon/>}/>
                    <BottomNavigationAction label="Reading" icon={<ReadingIcon/>}/>
                    <BottomNavigationAction label="Read" icon={<ReadIcon/>}/>
                </BottomNavigation>
            </Card>

        </div>
    );
}

export default MainPage
