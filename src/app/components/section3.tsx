import { Stack, Image, Text, Box, Flex } from '@chakra-ui/react'

export const Section3 = () => (
    <Stack
        justify="center"
        align="center"
        overflow="hidden"
        width="100%"
        height="1024px"
        maxWidth="100%"
        background="blue.200"
    >
        <Flex
            width="100%"
            justify="center"
            align="center"
        >
            <Flex
                width="40%"
                align="center"
                direction="column"
            >
                <Text
                    fontFamily="Inter"
                    fontWeight="semibold italic"
                    fontSize="36px"
                    fontStyle="italic"
                    color="gray.700"
                    width="800px"
                    maxWidth="100%"
                    textAlign="left"
                >
                    <li> マイIPAdress の登録 </li>
                    <li> 回線全部使われてる!? アドレスサーチ</li>
                    <span> 　　　　　　　　　　　　　　　　など...　</span>
                </Text>
            </Flex>
            <Image
                padding="24px"
                src="/screen1.png"
                alt="INSERT_ALT"
                // width="60%"
                // height="60%"
                maxWidth="90%"
                maxHeight="80%"
            />


        </Flex>
        <Flex
            width="100%"
            justify="center"
            align="center"
        >
            <Text
                fontFamily="Inter"
                fontWeight="semibold italic"
                fontSize="64px"
                fontStyle="italic"
                color="gray.700"
                width="100%"
                maxWidth="100%"
                textAlign="center"
            >
                More?
            </Text>
        </Flex>
    </Stack >
)
