import { Box, Checkbox, Flex, HStack, Icon, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import MenuLable from './MenuLabel'
import { ImHome3,ImFacebook,ImTwitter,ImInstagram } from 'react-icons/im'


const Navbar = () => {
   return(
    <Flex bg={'black'} h='3rem'>
      <HStack w={'90%'} m='auto'>
        <HStack w={'50%'} gap={'10px'} ml='4%'>
         <MenuLable />
         <HStack color={'white'} >
             <Link>
               <Text fontWeight='bold'>e-Paper |</Text>
             </Link>
             <Link>
               <Text fontWeight='bold'>Sunday Chronicle</Text>
             </Link>
         </HStack>
         <HStack color='white' ml='2%' >
             <Link >        
               <Icon as={ImFacebook} boxSize='25px' />
            </Link>
            <Link >        
                <Icon as={ImTwitter} boxSize='25px' />
            </Link>
            <Link >        
                <Icon as={ImInstagram} boxSize='25px' />
            </Link>  
            <Link>
               <Image src={`https://www.deccanchronicle.com/images/app_store_iconWhite.png`} w={'2rem'}/>
            </Link> 
         </HStack>
        </HStack>
        <HStack>
             <Checkbox defaultChecked></Checkbox>
             <Link>
               <Text fontWeight='bold' color='white'>Auto Refresh |</Text>
             </Link>
             <Link>
               <Text fontWeight='bold' color='white'>Corporate Insolvency Resolution Process</Text>
             </Link>
        </HStack>
        </HStack>  
    </Flex>
   
   )
}

export default Navbar



