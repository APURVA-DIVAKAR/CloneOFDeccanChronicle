import { Box, Flex, VStack, Image, Text, Heading, HStack } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ads from "../Components/Ads";
import Breadcrumbb from "../Components/Breadcrumb";
import LeftCards from "../Components/LeftCards";
import { getBusiness, getData, getScience, getTech } from "../Redux/Actions";
import {nanoid} from "nanoid"
import { ArticleContext } from "../ArticleContext";
import Carsousel from "../Components/Carsousel";
import Cards from "../Components/Cards";
import SSCard from "../Components/SSCard";

const Article = () => {
  const news = useSelector((store) => store.newsData.top);
  const science=useSelector((store) => store.newsData.science)
  const tech=useSelector((store) => store.newsData.tech)
  

  const loading = useSelector((store) => store.newsData.loading);
  const {topic,handleSet} = useContext(ArticleContext)
  const dispatch = useDispatch();
  // const news = useSelector((store) => store.newsData.top);
  console.log(topic)
  useEffect(() => {
    dispatch(getData())
    dispatch(getScience())
    dispatch(getTech())
  },[dispatch,getScience,getData,getTech])
  // const dispatch = useDispatch();
 
 
   {/*x:
author: null
content: "The meeting comes in the wake on increasing number of attacks in Chinese nationals. (Representational)\r\nIslamabad: Over 1,000 Chinese nationals in Islamabad will be asked to inform police prior to th… [+2528 chars]"
description: "Over 1,000 Chinese nationals in Islamabad will be asked to inform police prior to their movement to ensure their safety, according to a media report on Monday, amidst increasing attacks targeting Chinese citizens in Pakistan."
publishedAt: "2022-06-16T14:01:01Z"
source: {id: null, name: 'NDTV News'}
title: "1,000 Chinese Citizens In Islamabad To Inform Cops About Movements: Report - NDTV"
url: "https://www.ndtv.com/world-news/1-000-chinese-citizens-in-islamabad-to-inform-cops-about-movements-report-3073354"
urlToImage: "https://i.ndtvimg.com/i/2016-05/pakistan-police_650x400_81463813394.jpg" */}
  return (
    <Box w={"85%"} m="auto">
      <Ads />
      <Breadcrumbb />
      <Flex w={"100%"} spacing="1rem">
        <VStack w={"55%"} p='1.4rem'>
           <Text fontWeight={'500px'} mr='64%' as ='h2'  pb={'2px'}>INDIA,WELLBEING,GENERAL</Text>
           <Heading>{topic?.title}</Heading>
           <HStack>
            <Text textAlign={'left'} fontSize={'18px'} color='red'>DECCAN CHRONICLE | {topic?.author}</Text>
           </HStack>
           <Flex justify='space-around'>
             <Text fontSize={'18px'}  color='gray' fontWeight='bold'>Published {topic?.publishedAt}</Text>
             <Text fontSize={'18px'} color='gray' fontWeight='bold'>Updated  {topic?.publishedAt}</Text>
           </Flex>
           <Flex>
            {/* icons */}
           </Flex>
           <Text bg={'#f2f2f2'} fontSize={'20px'} align={'justify'}>{topic?.content}</Text>
           <Image src={topic?.urlToImage} maxW={'100%'} objectFit='contain' />
           <Text  fontSize={'20px'} align={'justify'}>{topic?.description}</Text>    
           <Text  fontSize={'20px'} align={'justify'}>{topic?.description}</Text> 
           <Ads/>
           <Text  fontSize={'20px'} align={'justify'}>{topic?.description}</Text> 
           <Ads/>
           <Text  fontSize={'20px'} align={'justify'}>{topic?.description}</Text>  
           <Ads/>
           <HStack>
           <Text  fontWeight={'bold'}>Tags:</Text>
           <Text  fontWeight={'bold'} color='red'>general,india</Text>
            </HStack>  
            <Text
              as="h2"
              mr={"60%"}
              borderBottom={"3px solid red"}
              pb={"2px"}
              maxW={"100%"}
            >
              MOST POPULAR
            </Text> 
            <Box w={'100%'} h={'400px'} border={'1px solid gray'}>
             <Carsousel data={science}/>
            </Box>
            <Box pt={'2rem'}>
      <Text fontWeight={'500px'} as ='h2' borderBottom={'3px solid red'} pb={'2px'} maxW={'10%'}>TECHNOLOGY</Text>
      <HStack mt={'2rem'}>
            {tech.slice(10,13).map(el=>{
                return <SSCard key={nanoid(4)} {...el} data={el} />;
            })}
        </HStack>        
      </Box>
      <Box pt={'2rem'}>
      <Text fontWeight={'500px'} as ='h2' borderBottom={'3px solid red'} pb={'2px'} maxW={'6%'}>World</Text>
      <HStack mt={'2rem'}>
            {tech.slice(7,10).map(el=>{
                return <SSCard key={nanoid(4)} {...el} data={el} />;
            })}
        </HStack>
        <HStack mt={'2rem'}>
            {tech.slice(7,10).map(el=>{
                return <Cards key={nanoid(4)} {...el} data={el}/>;
            })}
        </HStack>
      </Box>
        </VStack>
        <VStack w={"40%"}>
          <Box w="90%">
            <Image boxSize={"90%"} objectFit={"contain"} src="https://tpc.googlesyndication.com/simgad/12367781884106455915?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnJ7a3dYiqx5dNYHuOVqIyk1U2BnQ" />
          </Box>
          <VStack spacing="0rem" ml="3px" bg={"#f2f2f2"}>
            <Text
              as="h2"
              mr={"60%"}
              borderBottom={"3px solid red"}
              pb={"2px"}
              maxW={"100%"}
            >
              MOST POPULAR
            </Text>
            <Box border="1px dotted gray">
              {news?.slice(4, 9).map((el) => {
                return <LeftCards key={nanoid(4)} {...el} />;
              })}
            </Box>
            <Box>
              <Image
                src="https://tpc.googlesyndication.com/simgad/12367781884106455915?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnJ7a3dYiqx5dNYHuOVqIyk1U2BnQ"
                maxW="200px"
                h="300px"
                objectFit="contain"
              />
            </Box>
            <Box>
              <Image
                src="https://tpc.googlesyndication.com/simgad/12367781884106455915?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnJ7a3dYiqx5dNYHuOVqIyk1U2BnQ"
                maxW="200px"
                h="300px"
                objectFit="contain"
              />
            </Box>
            <Box p='1rem'>
              <Image
                w={"80%"}               
                objectFit="contain"
                src={`https://frontline.thehindu.com/the-nation/azz9lz/article37469051.ece/alternates/FREE_1200/fl03vinaylalpicjpg`}
                m="auto"
              />
              <Text fontWeight={"500px"} fontSize={"18px"}>
                'Savarkar did very little for India's independence`
              </Text>
              <Text fontWeight={"500px"} pb={"2px"} color="gray">
                theHindu.com
              </Text>
            </Box>
            <Box p='1rem'>
              <Image
                w={"80%"}
                objectFit="contain"
                src={`https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_210%2Cw_420%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A//i2-prod.mirror.co.uk/incoming/article26930082.ece/ALTERNATES/s1200/1_The-Duke-and-Duchess-of-Cambridge-attend-the-opening-of-the-Glade-of-Light-Memorial-in-Manchester.jpg`}
                m="auto"
              />
              <Text fontWeight={"500px"} fontSize={"18px"}>
                William forced to make last-minute trip to step in for Queen
                after sad event
              </Text>
              <Text fontWeight={"500px"} pb={"2px"} color="gray">
                Daily Mirror
              </Text>
            </Box>
            <Box p='1rem'>
              <Image
                w={"80%"}
                objectFit="contain"
                src={`https://images.taboola.com/taboola/image/fetch/h_210,w_420,c_pad,b_auto/http%3A//cdn.taboola.com/libtrc/static/thumbnails/dfba224ab501bff089e07235b89c829e.png`}
                m="auto"
              />
              <Text fontWeight={"500px"} fontSize={"18px"}>
                Best Public Speaking Courses
              </Text>
              <Text fontWeight={"500px"} pb={"2px"} color="gray">
                Planet Spark
              </Text>
            </Box>
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Article;
