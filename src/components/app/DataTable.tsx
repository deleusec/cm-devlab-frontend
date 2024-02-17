import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';


function DataTable({ rows, columns, redirectPath, hideFooter, height }: { rows: object[], columns: GridColDef[], redirectPath?:string, hideFooter?: boolean, height?: string }) {
    const navigate = useNavigate();
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
                onCellClick={(params) => {
                    if (!redirectPath) return;
                    const id = params.row.id;
                    navigate(`/${redirectPath}/${id}`);
                }}
                hideFooter={hideFooter}
            />
        </Box>
    );
}

export default DataTable;