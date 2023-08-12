import { Text, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Center
        borderTopEndRadius="50%"
        mt="8"
        py="20px"
        bg="red.500"
        color="white"
      >
        <Text fontSize="15px">
          Copyright &copy; 2022. Designed by{" "}
          <a
            href="https://www.linkedin.com/in/shamsadalam7084"
            target="_shamsad"
          >
            Shamsad Alam
          </a>
        </Text>
      </Center>
    </>
  );
};

export default Footer;
