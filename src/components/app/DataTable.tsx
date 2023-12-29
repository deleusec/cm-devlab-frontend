import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


function DataTable({ rows, columns }: { rows: object[], columns: GridColDef[] }) {
    return (
        <Box sx={{ width: '100%', height: '500px' }}>
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
            />
        </Box>
    );
}

export default DataTable;