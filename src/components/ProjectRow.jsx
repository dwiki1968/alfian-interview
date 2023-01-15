import { TableCell, TableRow } from "@mui/material";
import React from "react";
import projectData from "../data/project_data.json";
import PermitCard from "./PermitCard";
import companyData from "../data/company_data.json";
import { Box } from "@mui/system";

const ProjectRow = () => {
  const { adminCategories } = companyData;
  const { results } = projectData;

  return (
    <>
      {results.map((result) => (
        <TableRow key={result.projectId}>
          <TableCell>
            <>{result.siteAddress}</>
          </TableCell>

          {adminCategories.map((data) => {
            const cell = result.permits.find(
              (e) => e.adminCategoryId == data.categoryId
            );
            if (cell) {
              return (
                <TableCell>
                  <PermitCard permit={cell} />
                </TableCell>
              );
            }
            return <TableCell></TableCell>;
          })}
        </TableRow>
      ))}
    </>
  );
};

export default ProjectRow;
