import { Box, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardsBig from "../Components/CardsBig";
import { getBusiness, getData,getScience,getSports,getTech,getEntertainment } from "../Redux/Actions";
import { CircularProgress, CircularProgressLabel,Divider } from "@chakra-ui/react";
import { columnData} from  './coloumnData'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import Cards from "../Components/Cards";
import LeftCards from "../Components/LeftCards";
import Coloumn from "../Components/Coloumn";
import Ads from "../Components/Ads";
import Carsousel from "../Components/Carsousel";
import SCard from "../Components/SCard";
import SSCard from "../Components/SSCard";
import { nanoid } from "nanoid";

const Tech = () => {
    const coloumnData= columnData
  const news = useSelector((store) => store.newsData.top);
  const tech = useSelector((store) => store.newsData.tech);
  const science = useSelector((store) => store.newsData.science);
  const sports = useSelector((store) => store.newsData.sports);
  const business = useSelector((store) => store.newsData.business);
  const entertainment = useSelector((store) => store.newsData.entertainment);
  
  const loading = useSelector((store) => store.newsData.loading);
  console.log(loading);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getData())
    // dispatch(getTech())
    // dispatch(getBusiness())
    // dispatch(getSports())
    // dispatch(getScience())
    // dispatch(getEntertainment())
  }, [dispatch,getData,getTech,getBusiness,getSports,getScience,getEntertainment]);
  console.log(science);
  
  if (loading) {
    return;
    <CircularProgress isIndeterminate color='green.300' />
  }
  return (
    <Box w={'85%'} m='auto'>
      <Ads/>
    <Flex borderBottom='2px solid gray' pb='2rem' mt={'2rem'} >
      <VStack w={'45%'} >
      <Text as ='h2' mr={'70%'} align='left' borderBottom={'3px solid red'} pb={'2px'} >TOP STORIES</Text>
        {tech?.slice(0, 3).map((el) => {
          return <CardsBig key={nanoid(4)} {...el} />;
        })}
        <Accordion allowToggle  maxW={'550px'}
        mt={'1rem'}
        w={'full'}
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        border={'black'}>
          <AccordionItem alignItems={'left'}>
            <h2>
              <AccordionButton alignItems={'center'}>
                <VStack alignItems={'center'}>
                  <Text>Show More Top Stories</Text>
                </VStack>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            {tech?.slice(4, 9).map((el) => {
                return <CardsBig key={nanoid(4)} {...el} />;
                })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        
      </VStack>
      {/* Small cards of news */}
      <VStack spacing='0rem' borderRight='1px solid gray'>
          {tech?.slice(9, 19).map((el) => {
                return <Cards key={nanoid(4)} {...el} />;
                })}


      </VStack>
      {/* Most Popular stack */}
      <VStack spacing='0rem' ml='3px' bg={'#f2f2f2'} >
      <Text as ='h2' mr={'60%'} borderBottom={'3px solid red'} pb={'2px'} maxW={'100%'}>MOST POPULAR</Text>
        <Box border='1px dotted gray'>
          {tech?.slice(4, 9).map((el) => {
                return <LeftCards key={nanoid(4)} {...el} />;
                })}
        </Box>
        <Box>
            <Image src='https://' maxW='200px' h='300px' objectFit='contain' />
        </Box>
        <h1 style={{textAlign:'left', borderBottom:'2px solid red'}}>
        Column
        </h1> 
        <Box border='1px dotted gray'>
          {coloumnData?.map((el) => {
                return <Coloumn key={nanoid(4)} {...el} />;
                })}
        </Box>
      </VStack>
    </Flex>
    <Box w='80%' p='1rem' border='1px solid gray' mt='5px'>
    <Image m='auto' w='80%' src={'https://tpc.googlesyndication.com/simgad/10371733874986534664?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qlwF-pgFSP4xocJZjXsKb7e08NIDw'} />       
    </Box>
    <Divider mt='1rem'   sx={{ borderBottomWidth: 5 ,borderColor: "black.900" }} />
    <HStack w={'100%'} h={'400px'} pb='1.5rem'>
        <Box w={'55%'} h={'100%'}>
            <Heading as='h3' borderBottom='2px solid red'>CARTOON OF THE DAY</Heading>
            <Image src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/14d64906264ee7d4b85c5e28e43757564b2160d3-tc-img-web.jpg'/>
        </Box>
        <Box w={'35%'} h={'100%'}>
            <Heading as='h3' borderBottom='2px solid red'>COUNTER POINT</Heading>
            <Image src='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/2719dbcadec930b2bc54462ad717c3cb2dc4922f-tc-img-web.jpg' boxSize={'100%'} objectFit='contain'/>
        </Box>
        <Box w='25%' h={'100%'}>
                <Image src='https://'/>
        </Box>
    </HStack>
    <Divider mt='1rem'   sx={{ borderBottomWidth: 5 ,borderColor: "black.900" }} />
      <Box w={'100%'} h={'400px'} border={'1px solid gray'}>
         <Box  w={'100%'} borderBottom={'1px solid gray'}>
            <Heading borderBottom={'3px solid red'} pb={'2px'} as='h2' maxW={'40%'}>MORE FROM SOCIAL</Heading>
         </Box>
         <Carsousel data={entertainment}/>
      </Box>
      {/* Entertainment */}
      <Box w={'100%'} bg='#f2f2f2' mt={'2rem'} mb={'2rem'}>
        <Text as ='h2' borderBottom={'3px solid red'} pb={'2px'} maxW={'12%'}>ENTERTAINMENT</Text>
        <VStack>
        <Flex spacing={'3rem'}>
          <SCard data={tech.slice(0,4)}/>
        </Flex>
        <HStack mt={'2rem'}>
            {entertainment.slice(4,7).map(el=>{
                return <Cards key={nanoid(4)} {...el} />;
            })}
        </HStack>
        </VStack>
      </Box>
      <Divider mt='1rem'   sx={{ borderBottomWidth: 5 ,borderColor: "black.900" }} />
      {/* Jobs  */}
      <Box >
      <Text fontWeight={'500px'} as ='h2' borderBottom={'3px solid red'} pb={'2px'} maxW={'16%'}>JOBS & EDUCATION</Text>
      <HStack mt={'2rem'}>
            {business.slice(7,10).map(el=>{
                return <Cards key={nanoid(4)} {...el} />;
            })}
        </HStack>
      </Box>
      {/* Sports */}
      <Box pt={'2rem'}>
      <Text fontWeight={'500px'} as ='h2' borderBottom={'3px solid red'} pb={'2px'} maxW={'6%'}>SPORTS</Text>
      <HStack mt={'2rem'}>
            {sports.slice(7,10).map(el=>{
                return <SSCard key={nanoid(4)} {...el} />;
            })}
        </HStack>
        <HStack mt={'2rem'}>
            {sports.slice(7,11).map(el=>{
                return <Cards key={nanoid(4)} {...el} />;
            })}
        </HStack>
      </Box>
      <Box pt={'2rem'}>
      <Text fontWeight={'500px'} as ='h2' borderBottom={'3px solid red'} pb={'2px'} maxW={'10%'}>LIFESTYLE</Text>
      <HStack mt={'2rem'}>
            {entertainment.slice(11,15).map(el=>{
                return <SSCard key={nanoid(4)} {...el} />;
            })}
        </HStack>
        <HStack mt={'2rem'}>
            {entertainment.slice(2,5).map(el=>{
                return <Cards key={nanoid(4)} {...el} />;
            })}
        </HStack>
      </Box>
      {/* Tech */}
      <Box pt={'2rem'}>
      <Text fontWeight={'500px'} as ='h2' borderBottom={'3px solid red'} pb={'2px'} maxW={'10%'}>TECHNOLOGY</Text>
      <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <SSCard key={nanoid(4)} {...el} />;
            })}
        </HStack>        
      </Box>
      <Box pt={'2rem'}>
      <Text fontWeight={'500px'} as ='h2' borderBottom={'3px solid red'} pb={'2px'} maxW={'6%'}>World</Text>
      <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <SSCard key={nanoid(4)} {...el} />;
            })}
        </HStack>
        <HStack mt={'2rem'}>
            {tech.slice(7,11).map(el=>{
                return <Cards key={nanoid(4)} {...el} />;
            })}
        </HStack>
      </Box>
      {/* business */}
      <Box pt={'2rem'}>
      <Text fontWeight={'500px'} as ='h2' borderBottom={'3px solid red'} pb={'2px'} maxW={'7%'}>BUSINESS</Text>
      <HStack mt={'2rem'}>
            {business.slice(1,4).map(el=>{
                return <SSCard key={nanoid(4)} {...el} />;
            })}
        </HStack>
        <HStack mt={'2rem'}>
            {business.slice(4,8).map(el=>{
                return <Cards key={nanoid(4)} {...el} />;
            })}
        </HStack>
      </Box>
      {/* science */}
      <Box pt={'2rem'}>
      <Text fontWeight={'500px'} as ='h2' borderBottom={'3px solid red'} pb={'2px'} maxW={'7%'}>SCIENCE</Text>
      <HStack mt={'2rem'}>
            {science.slice(1,4).map(el=>{
                return <SSCard key={nanoid(4)} {...el} />;
            })}
        </HStack>
        <HStack mt={'2rem'}>
            {science.slice(5,9).map(el=>{
                return <Cards key={nanoid(4)} {...el} />;
            })}
        </HStack>
      </Box>

      <Box pt={'2rem'}>
      <Text fontWeight={'500px'} as ='h2' borderBottom={'3px solid red'} pb={'2px'} maxW={'10%'}>EDITOR'S PICK</Text>
      <HStack mt={'2rem'}>
            {tech.slice(14,18).map(el=>{
                return <SSCard key={nanoid(4)} {...el} />;
            })}
        </HStack>
        <HStack mt={'2rem'}>
            {business.slice(14,18).map(el=>{
                return <Cards key={nanoid(4)} {...el} />;
            })}
        </HStack>
      </Box>
    </Box> 
  );
};

export default Tech;
