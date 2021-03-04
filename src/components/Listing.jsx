import React, {useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Pagination from "./Pagination";
import EnhancedTableHead from "./Header";
import {ListingStyle} from "./ListingStyle";
import {getComparator, stableSort} from "./SortData";
import {connect} from "react-redux";
import {getListingPage, setOptions} from "../actions/ListingAction";


function Listing({options, setOptions, rows, getListingPage}) {

    useEffect(() => {
        getListingPage();
    }, [getListingPage]);

    const classes = ListingStyle();


    const handleRequestSort = (event, property) => {
        const isAsc = options.orderBy === property && options.order === 'asc';
        setOptions(isAsc ? {order:'desc'} : {order: 'asc'});
        setOptions({orderBy: property});
    };
    const handleClick = (event, name) => {
        const selectedIndex = options.selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(options.selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(options.selected.slice(1));
        } else if (selectedIndex === options.selected.length - 1) {
            newSelected = newSelected.concat(options.selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                options.selected.slice(0, selectedIndex),
                options.selected.slice(selectedIndex + 1),
            );
        }
        setOptions({selected: newSelected});
    };

    const handleChangePage = (event, newPage) => {
        setOptions({page:newPage});
    };

    const handleChangeRowsPerPage = (event) => {
        setOptions({rowsPerPage: parseInt(event.target.value, 10)});
        setOptions({page: 0});
    };
    const isSelected = (name) => options.selected.indexOf(name) !== -1;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={options.selected.length}
                            order={options.order}
                            orderBy={options.orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(options.order, options.orderBy))
                                .slice(options.page * options.rowsPerPage, options.page * options.rowsPerPage + options.rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.name)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            selected={isItemSelected}
                                        >
                                            <TableCell align="center" component="th" id={labelId} scope="row" padding="none">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="center">{row.content}</TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Pagination
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    pageOption={[5, 10, 25]}
                    page={options.page}
                    rows={rows}
                    rowsPerPage={options.rowsPerPage}
                />
            </Paper>
        </div>
    );
}

const mapStateToProps = (store) => ({
    options:store.list.options,
    rows: store.list.list
});

const mapDispatchToProps = ({
    setOptions,
    getListingPage
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);

