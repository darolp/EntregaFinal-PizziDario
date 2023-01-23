import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button, ButtonGroup, Divider, Stack , Text, Heading, Image , DarkMode} from '@chakra-ui/react'

function ProductCard({img, title, description, price, category}) {
  return (
    <DarkMode>
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={img}
          alt='Product Image'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md' color='blackAlpha.800'>{title}</Heading>
          <Text>
            {description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
    </DarkMode>
  )
}

export default ProductCard