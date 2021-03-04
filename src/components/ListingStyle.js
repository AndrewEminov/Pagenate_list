import {makeStyles} from "@material-ui/core/styles";

export const ListingStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '70%',
        margin: '30px auto 0',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
        margin: '0 auto'
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));
