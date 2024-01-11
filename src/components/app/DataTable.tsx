import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


function DataTable({ rows, columns, hideFooter, height }: { rows: object[], columns: GridColDef[], hideFooter?: boolean, height?: string }) {
    return (
        <Box sx={{ width: '100%', height: height ? height : '500px' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 50,
                        },
                    },
                }}
                pageSizeOptions={[50]}
                disableRowSelectionOnClick
                disableColumnMenu
                hideFooter={hideFooter}
            />
        </Box>
    );
}

export default DataTable;