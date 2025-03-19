import { Info, ShoppingBag } from 'lucide-react'

import { Button, Input, Label } from '~/components/ui'

export default function Components() {
  return (
    <div className='grid grid-cols-[10rem_1fr] gap-x-4 gap-y-8'>
      <div className='font-display'>Input</div>
      <div className='flex gap-2'>
        <Input placeholder='Placeholder for text input' />
        <Input icon={Info} defaultValue='Sample value with icon' />
        <Input variant='error' icon={Info} placeholder='Placeholder for text input' />
      </div>

      <div className='font-display'>Input with Label</div>
      <div className='space-y-1'>
        <Label htmlFor='inputWithLabel'>Label</Label>
        <Input id='inputWithLabel' placeholder='Placeholder for text input' />
      </div>

      <div className='font-display'>Button</div>
      <div className='space-y-2'>
        <div className='flex gap-2'>
          <Button>Primary button</Button>
          <Button>
            <ShoppingBag />
            Icon button
          </Button>
          <Button variant='muted'>Muted button</Button>
          <Button variant='outline'>Outline button</Button>
          <Button variant='outline' size='icon'>
            <ShoppingBag />
            <span className='sr-only'>Icon button</span>
          </Button>
        </div>
        <div className='flex gap-2'>
          <Button size='sm'>Primary button</Button>
          <Button size='sm'>
            <ShoppingBag />
            Icon button
          </Button>
          <Button size='sm' variant='muted'>
            Muted button
          </Button>
          <Button size='sm' variant='outline'>
            Outline button
          </Button>
          <Button size='icon-sm' variant='outline'>
            <ShoppingBag />
            <span className='sr-only'>Icon button</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
