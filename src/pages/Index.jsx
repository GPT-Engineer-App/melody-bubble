import React, { useState } from "react";
import { Container, Text, VStack, HStack, Button, Box, Image, Select, IconButton } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  const [timeRange, setTimeRange] = useState("lastMonth");
  const [type, setType] = useState("tracks");
  const [items, setItems] = useState([]);

  const handleTimeRangeChange = (e) => {
    setTimeRange(e.target.value);
    fetchData(e.target.value, type);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    fetchData(timeRange, e.target.value);
  };

  const fetchData = (timeRange, type) => {
    // Simulate fetching data
    const fetchedItems = type === "tracks" ? getTracks(timeRange) : getArtists(timeRange);
    setItems(fetchedItems);
  };

  const getTracks = (timeRange) => {
    // Simulate fetching tracks
    return [
      { id: 1, name: "Track 1", image: "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmFjayUyMGNvdmVyfGVufDB8fHx8MTcxNzI2MDkwOXww&ixlib=rb-4.0.3&q=80&w=1080" },
      { id: 2, name: "Track 2", image: "https://images.unsplash.com/photo-1519630628938-63b322f4b635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx0cmFjayUyMGNvdmVyfGVufDB8fHx8MTcxNzI2MDkwOXww&ixlib=rb-4.0.3&q=80&w=1080" },
      { id: 3, name: "Track 3", image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHx0cmFjayUyMGNvdmVyfGVufDB8fHx8MTcxNzI2MDkwOXww&ixlib=rb-4.0.3&q=80&w=1080" },
    ];
  };

  const getArtists = (timeRange) => {
    // Simulate fetching artists
    return [
      { id: 1, name: "Artist 1", image: "https://images.unsplash.com/photo-1703420371268-85d78cfdc5cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTcyNjA5MTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
      { id: 2, name: "Artist 2", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTcyNjA5MTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
      { id: 3, name: "Artist 3", image: "https://images.unsplash.com/photo-1570158268183-d296b2892211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTcyNjA5MTB8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    ];
  };

  const downloadBox = () => {
    // Simulate downloading the box
    alert("Box downloaded!");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Kullanıcının Adı +iye</Text>
        <HStack spacing={4}>
          <Select value={timeRange} onChange={handleTimeRangeChange}>
            <option value="lastMonth">Geçen Ay</option>
            <option value="lastSixMonths">Son 6 Ay</option>
            <option value="allTime">Tüm Zamanlar</option>
          </Select>
          <Select value={type} onChange={handleTypeChange}>
            <option value="tracks">Parçalar</option>
            <option value="artists">Sanatçılar</option>
          </Select>
        </HStack>
        <Box borderWidth="1px" borderRadius="lg" p={4} width="100%" textAlign="center">
          <HStack spacing={4} wrap="wrap" justifyContent="center">
            {items.map((item) => (
              <Box key={item.id} borderRadius="full" overflow="hidden" boxSize="100px">
                <Image src={item.image} alt={item.name} boxSize="100px" />
              </Box>
            ))}
          </HStack>
        </Box>
        <IconButton aria-label="Download" icon={<FaDownload />} size="lg" onClick={downloadBox} />
        <Text fontSize="sm">bextify.vercel.app</Text>
      </VStack>
    </Container>
  );
};

export default Index;
