import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  // CCreateElement,
  // CSidebarNavDivider,
  // CSidebarNavTitle,
  CSidebarMinimizer,
  // CSidebarNavDropdown,
  // CSidebarNavItem,
} from '@coreui/react'

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CCreateNavItem,
} from '@coreui/react-ts'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      position="sticky"
      selfHiding="md"
      // onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateNavItem
          items={navigation}
          // components={{
          //   CSidebarNavDivider,
          //   CSidebarNavDropdown,
          //   CSidebarNavItem,
          //   CSidebarNavTitle
          // }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
