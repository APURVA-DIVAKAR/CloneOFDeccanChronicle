import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    
  } from '@chakra-ui/react'
  import {ChevronRightIcon} from'@chakra-ui/icons'
  import {Link} from 'react-router-dom'

const Breadcrumbb = () => {
  return (
    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink as={Link} to='/nation'>Nation</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink >Article</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
  )
}

export default Breadcrumbb