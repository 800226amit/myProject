import React from 'react'
import Link from 'next/link'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"


export default function page() {
  return (
    <div>
      <Menubar className=' w-24'>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem><Link href="/contentcomp/Allsubfile/httperror">Print</Link></MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

    </div>
  )
}
