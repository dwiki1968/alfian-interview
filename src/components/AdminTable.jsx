import { Box, TableBody, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import companyData from "../data/company_data.json";

import ProjectRow from "./ProjectRow";

const AdminTable = () => {
  const { adminCategories } = companyData;

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {adminCategories.map((data) => (
                <TableCell key={data.index}>
                  <Box>
                    <Typography color="#7657CB">
                      {data.title.toUpperCase()}
                    </Typography>
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <ProjectRow />
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminTable;
