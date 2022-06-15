import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
    Flex,
    Icon,
    Link,
    Text,
    HStack,
    Image,
    Divider,
    VStack,
    Box,
} from '@chakra-ui/react';
import {
AddIcon,
ExternalLinkIcon,
RepeatIcon,
EditIcon,
HamburgerIcon,
CloseIcon,

} from '@chakra-ui/icons';
import { ImHome3,ImFacebook,ImTwitter,ImInstagram } from 'react-icons/im'
import { BsBellFill,BsFillArrowLeftCircleFill,BsChevronDoubleRight } from 'react-icons/bs'

const MenuLable = () => {
  return (
   //   <Box bg='black' color='white'>
    <Menu  >
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<HamburgerIcon color='white'/>}
      variant='outline'
      borderColor='none'
      border='none'
    />
    
    <MenuList minW={'300px'} p={'1rem'} alignItems='left'  >
     
    <Box position="static" overflow='hidden'>   
        <MenuItem  >
        <Flex justifyContent='space-between'>
          <Image alignItems={'center'} src={'https://d2u6vujtbrga6l.cloudfront.net/images/logo.png'} w='10rem'/> 
          <Icon as={BsFillArrowLeftCircleFill} boxSize='23px' ml='4rem' />
          </Flex> 
        </MenuItem>
        <Divider   sx={{ borderBottomWidth: 5 ,borderColor: "black.900" }} />
        
        <Flex justify="left" gap="18px" p='0.6rem' mb='2rem'>
          {/* <MenuItem  icon={<ImHome3 size='30px' />} > </MenuItem>
          <MenuItem icon={<BsBellFill size='30px'/>}> Prayers</MenuItem> */}
          <Link > <Icon as={ImHome3} boxSize='23px'/></Link>
          <HStack> <Link> <Icon as={BsBellFill} boxSize='27px'/> </Link>
          <Text fontSize='lg' fontWeight='1000' _hover={{ cursor:'pointer' }}>Prayers</Text>
          </HStack>
        </Flex>
  </Box>   
  <div style={{ maxHeight: '360px',
    overflowY: 'scroll' }}>
        <VStack alignItems='left'   >
           {/* <MenuItem icon={<AddIcon />} command='⌘T'>
              New Tab
           </MenuItem> */}
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Nation
            </MenuItem>
            <VStack alignItems='left' p='1rem'>
                <Link> <Icon as={BsChevronDoubleRight}/> Crime</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Current Affairs</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Politics</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> In Other News</Link>
            </VStack>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               South
            </MenuItem>
            <VStack alignItems='left' p='1rem'>
                <Link> <Icon as={BsChevronDoubleRight}/> Telgana</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Andhra Pradesh</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Tamil Nadu</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Karnatak</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Kerala</Link>
            </VStack>
            
            <MenuItem fontSize={'xl'} fontWeight='bold'>
            World
            </MenuItem>
            <VStack alignItems='left' p='1rem'>
                <Link> <Icon as={BsChevronDoubleRight}/> Australia & New Zealand</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Neighbour</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Asia</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Africa</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> America</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Europe</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Middle East</Link>
            </VStack>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Entertainment
            </MenuItem>
            <VStack alignItems='left' p='1rem'>
                <Link> <Icon as={BsChevronDoubleRight}/> Theatre</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Music</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Bollywood</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Kollywood</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Sandalwood</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Tollywood</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Television</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Movie Review</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Mollywood</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Hollywood</Link>
            </VStack>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Jobs & Education
            </MenuItem>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Sports
            </MenuItem>
            <VStack alignItems='left' p='1rem'>
                <Link> <Icon as={BsChevronDoubleRight}/> Badminton</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Cricket</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Football</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Tennis</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> In Other News</Link>
                
            </VStack>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Technology
            </MenuItem>
            <VStack alignItems='left' p='1rem'>
                <Link> <Icon as={BsChevronDoubleRight}/> Gadgets</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> In Other News</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Mobile & Tabs</Link>               
            </VStack>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Lifestyle
            </MenuItem>
            <VStack alignItems='left' p='1rem'>
                <Link> <Icon as={BsChevronDoubleRight}/> Viral & Trending</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Health & Wellbeing</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Fashion & Beauty</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Food & Recipe</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Travel</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Books & Art</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Environment</Link>
                <Link> <Icon as={BsChevronDoubleRight}/> Culture and Society</Link>
                
            </VStack>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Gallery
            </MenuItem>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Business
            </MenuItem>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Opinion
            </MenuItem>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Sunday Chronicle
            </MenuItem>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Featured
            </MenuItem>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
            Hyderabad Chronicle
            </MenuItem>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Science
            </MenuItem>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Editors' Pick
            </MenuItem>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Just In
            </MenuItem>
            <MenuItem fontSize={'xl'} fontWeight='bold'>
               Astroguide
            </MenuItem>
        </VStack>
 </div>   

 <Flex position="static" overflow='hidden' >   
    <Link >        
          <Icon as={ImFacebook} boxSize='25px' ml='20px'/>
     </Link>
     <Link >        
          <Icon as={ImTwitter} boxSize='25px' ml='20px'/>
     </Link>
     <Link >        
          <Icon as={ImInstagram} boxSize='25px' ml='20px'/>
     </Link>        
       
  </Flex>  
     
    </MenuList>
   
    
  </Menu>
//   </Box>
  )
}

export default MenuLable