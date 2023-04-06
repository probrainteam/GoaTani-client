'use client';
import Button from '@/components/button';
import { Flex } from '@/components/flex';
import { IconButton } from '@/components/icon-button';
import { MessageIcon } from '@/components/icon/message-icon';
import { ShareIcon } from '@/components/icon/share-icon';
import { VerticalDotsIcon } from '@/components/icon/vertical-dots-icon';

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
      </Flex>
    </main>
  );
}
