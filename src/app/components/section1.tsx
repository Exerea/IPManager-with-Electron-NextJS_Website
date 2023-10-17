import { Stack, Card, Text } from '@chakra-ui/react'
import Image from 'next/image';

export const Section1 = () => (
    <div>
        <Stack
            padding="10px"
            justify="center"
            align="center"
            spacing="80px"
            overflow="hidden"
            width="100%"
            height="1024px"
            maxWidth="100%"
            background="blue.50"
        >
            <Card width="400px" height="400px" maxWidth="100%">
                <Image
                    src="/icon.png"
                    alt="ipmanager_logo"
                    layout="fill"
                    objectFit="cover"
                />
            </Card>
            <Text
                fontFamily="Inter"
                fontWeight="semibold italic"
                fontSize="96px"
                fontStyle="italic"
                color="gray.700"
                textAlign="end"
            >
                IPManager
            </Text>
        </Stack>
    </div>
)
