import { Box, Divider, Flex, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { ImHome3 } from "react-icons/im";
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
import {IoIosArrowDown} from'react-icons/io'

const Navbar2 = () => {
  return (
    <Box w={"85%"} mt="0.5rem" m="auto">
      <Divider sx={{ borderBottomWidth: 3, borderColor: "black" }} />
      <Flex p="0.6rem" alignItems="center" justifyContent="space-between">
        <Link>
          <Icon as={ImHome3} boxSize="23px" />
        </Link>
        <Link>
          <Text fontSize="h2" fontWeight="bold">
            Nation
          </Text>
        </Link>
        <Link>
          <Text size="xl" fontWeight="bold">
            South
          </Text>
        </Link>
        <Link>
          <Text size="xl" fontWeight="bold">
            World
          </Text>
        </Link>
        <Link>
          <Text size="xl" fontWeight="bold">
            Entertainment
          </Text>
        </Link>
        <Link>
          <Text size="xl" fontWeight="bold">
            Jobs & Education
          </Text>
        </Link>
        <Link>
          <Text size="xl" fontWeight="bold">
            Sports
          </Text>
        </Link>
        <Link>
          <Text size="xl" fontWeight="bold">
            Technology
          </Text>
        </Link>
        <Link>
          <Text size="xl" fontWeight="bold">
            Lifestyle
          </Text>
        </Link>
        <Link>
          <Text size="xl" fontWeight="bold">
            Gallery
          </Text>
        </Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<IoIosArrowDown />} bg='white'>
           More...
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Divider sx={{ borderBottomWidth: 1, borderColor: "black" }} />
    </Box>
  );
};

export default Navbar2;
