import { Box, Divider, Flex, Icon,  Text } from "@chakra-ui/react";
import React from "react";
import { ImHome3 } from "react-icons/im";
// import { Link  } from "react-router-dom"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import {IoIosArrowDown} from'react-icons/io'

const Navbar2 = () => {
  return (
    <Box w={"85%"} mt="0.5rem" m="auto">
      <Divider sx={{ borderBottomWidth: 3, borderColor: "black" }} />
      <Flex p="0.6rem" alignItems="center" justifyContent="space-between">
        <Link  to="/">
          <Icon as={ImHome3} boxSize="23px" />
        </Link>
        <Link  to='/nation'>
          <Text fontSize="h2" fontWeight="bold">
            Nation
          </Text>
        </Link>
        <Link to="/">
          <Text size="xl" fontWeight="bold">
            South
          </Text>
        </Link>
        <Link  to='/world'>
          <Text size="xl" fontWeight="bold">
            World
          </Text>
        </Link>
        <Link  to="/entertainment">
          <Text size="xl" fontWeight="bold">
            Entertainment
          </Text>
        </Link>
        <Link to="/">
          <Text size="xl" fontWeight="bold">
            Jobs & Education
          </Text>
        </Link>
        <Link to="/sports">
          <Text size="xl" fontWeight="bold">
            Sports
          </Text>
        </Link>
        <Link to="/technology">
          <Text size="xl" fontWeight="bold">
            Technology
          </Text>
        </Link>
        <Link to="/">
          <Text size="xl" fontWeight="bold">
            Lifestyle
          </Text>
        </Link>
        <Link to="/">
          <Text size="xl" fontWeight="bold">
            Gallery
          </Text>
        </Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<IoIosArrowDown />} bg='white'>
           More...
          </MenuButton>
          <MenuList>
            <MenuItem>Crime</MenuItem>
            <MenuItem>Health</MenuItem>
            <MenuItem>Awerness</MenuItem>
            <MenuItem>Covid</MenuItem>
            <MenuItem>Cricket</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Divider sx={{ borderBottomWidth: 1, borderColor: "black" }} />
    </Box>
  );
};

export default Navbar2;
