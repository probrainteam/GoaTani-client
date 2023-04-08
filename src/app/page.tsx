'use client';
import Button from '@/components/button';
import { Flex } from '@/components/flex';
import { IconButton } from '@/components/icon-button';
import { MessageIcon } from '@/components/icon/message-icon';
import { ShareIcon } from '@/components/icon/share-icon';
import { VerticalDotsIcon } from '@/components/icon/vertical-dots-icon';
import { Input } from '@/components/input';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Flex gap={20} direction='column'>
        <Flex direction='column' gap={5} isFull>
          <Button>button</Button>
          <Button isDisabled>button</Button>
          <Button variant='outline'>button</Button>
        </Flex>

        <Flex gap={3}>
          <MessageIcon />
          <ShareIcon />
          <VerticalDotsIcon />
        </Flex>

        <Flex gap={5} direction='column'>
          <Flex gap={3}>
            <IconButton name='message' variant='solid' size='xs' />
            <IconButton name='message' variant='solid' size='xs' disabled />
            <IconButton name='message' variant='outline' size='xs' />
            <IconButton name='message' variant='outline' size='xs' disabled />
          </Flex>
          <Flex gap={3}>
            <IconButton name='message' variant='solid' size='sm' />
            <IconButton name='message' variant='solid' size='sm' disabled />
            <IconButton name='message' variant='outline' size='sm' />
            <IconButton name='message' variant='outline' size='sm' disabled />
          </Flex>
          <Flex gap={3}>
            <IconButton name='message' variant='solid' />
            <IconButton name='message' variant='solid' disabled />
            <IconButton name='message' variant='outline' />
            <IconButton name='message' variant='outline' disabled />
          </Flex>
          <Flex gap={3}>
            <IconButton name='message' size='lg' variant='solid' />
            <IconButton name='message' size='lg' variant='solid' disabled />
            <IconButton name='message' size='lg' variant='outline' />
            <IconButton name='message' size='lg' variant='outline' disabled />
          </Flex>
        </Flex>

        <Flex gap={10} direction='column' isFull padding={10}>
          <Flex gap={5} direction='column' isFull>
            <Input placeholder='placeholder' variant='outline' />
            <Input placeholder='placeholder' variant='outline' inputSize='sm' />
            <Input placeholder='placeholder' variant='outline' inputSize='md' />
            <Input placeholder='placeholder' variant='outline' inputSize='lg' />
            <Input placeholder='placeholder' variant='outline' inputSize='xl' />
          </Flex>
          <Flex gap={5} direction='column' isFull>
            <Input placeholder='placeholder' variant='outline' inputSize='sm' rightElement={<Button>sdfs</Button>} />
            <Input placeholder='placeholder' variant='outline' inputSize='md' rightElement={<Button>sdfs</Button>} />
            <Input placeholder='placeholder' variant='outline' inputSize='lg' rightElement={<Button>sdfs</Button>} />
            <Input placeholder='placeholder' variant='outline' inputSize='xl' rightElement={<Button>sdfs</Button>} />
          </Flex>
          <Flex gap={5} direction='column' isFull>
            <Input placeholder='placeholder' variant='flushed' />
            <Input placeholder='placeholder' variant='flushed' inputSize='sm' />
            <Input placeholder='placeholder' variant='flushed' inputSize='md' />
            <Input placeholder='placeholder' variant='flushed' inputSize='lg' />
            <Input placeholder='placeholder' variant='flushed' inputSize='xl' />
          </Flex>
          <Flex gap={5} direction='column' isFull>
            <Input placeholder='placeholder' variant='unstyled' />
            <Input placeholder='placeholder' variant='unstyled' inputSize='sm' />
            <Input placeholder='placeholder' variant='unstyled' inputSize='md' />
            <Input placeholder='placeholder' variant='unstyled' inputSize='lg' />
            <Input placeholder='placeholder' variant='unstyled' inputSize='xl' />
          </Flex>
          <Flex gap={5} direction='column' isFull>
            <Input placeholder='placeholder' variant='unstyled' />
            <Input placeholder='placeholder' variant='unstyled' inputSize='sm' />
            <Input placeholder='placeholder' variant='unstyled' inputSize='md' />
            <Input placeholder='placeholder' variant='unstyled' inputSize='lg' />
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
}
