import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import React from "react";

function Pagination({handleChangePage, handleChangeRowsPerPage, rows, rowsPerPage, page, pageOption}) {

    return (
        <TablePagination
            rowsPerPageOptions={pageOption}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    );
}

export default Pagination;
