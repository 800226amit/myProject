import React from 'react'
import { httperrors, SubHeading, companylogo, myIframe, FeaturTechnology, LatestTechnology, devOps } from "@/components/ui/config/blogs";

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Item } from '@radix-ui/react-menubar';



export default function httperro() {
  return (
    <div className=' flex justify-center mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex-col'>
      <h1 className=' font-serif text-lg font-bold'>Complete list of HTTP Status Codes</h1>

      <Table>
  <TableCaption>A list of All Http Errors.</TableCaption>
  <div>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">S. NO.</TableHead>
        <TableHead>Status Code</TableHead>
        <TableHead className="text-right">Meaning</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {httperrors.map((item, index) => {
        if (item) { // Check if item is not undefined
          return (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.Serialno}</TableCell>
              <TableCell>{item.statuscode}</TableCell>
              <TableCell className="text-left">{item.meaning}</TableCell>
            </TableRow>
          );
        } else {
          return null; // If item is undefined, return null
        }
      })}
    </TableBody>
  </div>
</Table>


    </div>

  )
}
