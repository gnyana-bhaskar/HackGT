import { Link } from "react-router-dom";
import { Flex, Stack, Spacer, Center, Text, Box, Square, Color } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from "@chakra-ui/react"
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { useTable, useSortBy } from "react-table"
import React,{useState,useEffect} from 'react';
import { Input } from "@chakra-ui/react";
var outputData = [];
var stockData = [];

const InventoryUpdate = () => {
    const data = React.useMemo(
        () => [
          {
            fromUnit: "inches",
            toUnit: "millimetres (mm)",
            factor: 25.4,
          },
          {
            fromUnit: "feet",
            toUnit: "centimetres (cm)",
            factor: 30.48,
          },
          {
            fromUnit: "yards",
            toUnit: "metres (m)",
            factor: 0.91444,
          },
        ],
        [],
      )
    
      const columns = React.useMemo(
        () => [
          {
            Header: "To convert",
            accessor: "fromUnit",
          },
          {
            Header: "Into",
            accessor: "toUnit",
          },
          {
            Header: "Multiply by",
            accessor: "factor",
            isNumeric: true,
          },
        ],
        [],
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data }, useSortBy)

      
    return(
        <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                >
                  {column.render("Header")}
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                    {cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </Table>

    );

};
export default InventoryUpdate;
