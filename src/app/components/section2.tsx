import { Stack, Image, Text, Box, Flex } from '@chakra-ui/react'

export const Section2 = () => (
    <Stack
        justify="center"
        align="center"
        overflow="hidden"
        width="100%"
        height="1024px"
        maxWidth="100%"
        background="blue.100"
    >
        <Flex
            width="100%"
            justify="center"
            align="center"
        >

            <Image
                padding="24px"
                src="/screen2.png"
                alt="INSERT_ALT"
                // width="60%"
                // height="60%"
                maxWidth="90%"
                maxHeight="80%"
            />

            <Flex
                width="40%"
                align="center"
                direction="column"
            >
                <Text
                    fontFamily="Inter"
                    fontWeight="semibold italic"
                    fontSize="48px"
                    fontStyle="italic"
                    color="gray.700"
                    width="480px"
                    maxWidth="100%"
                    textAlign="center"
                >
                    <span>会議室を選択 </span>
                </Text>
                <Text
                    padding={"24px"}
                    fontFamily="Inter"
                    fontWeight="semibold italic"
                    fontSize="32px"
                    fontStyle="italic"
                    color="gray.700"
                    width="480px"
                    maxWidth="100%"
                    textAlign="center"
                >
                    <span>以上です。 </span>

                </Text>
            </Flex>
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
                How to use?
            </Text>
        </Flex>
    </Stack >
)
