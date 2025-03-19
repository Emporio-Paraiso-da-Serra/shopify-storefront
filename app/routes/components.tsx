import { Info } from 'lucide-react'

import { Input, Label } from '~/components/ui'

export default function Components() {
  return (
    <div className='grid grid-cols-[10rem_1fr] gap-x-4 gap-y-8'>
      <div className='font-display'>Input</div>
      <div className='space-y-2'>
        <Input placeholder='Placeholder for text input' />
        <Input icon={Info} defaultValue='Sample value with icon' />
        <Input variant='error' icon={Info} placeholder='Placeholder for text input' />
      </div>

      <div className='font-display'>Input with Label</div>
      <div className='space-y-1'>
        <Label htmlFor='inputWithLabel'>Label</Label>
        <Input id='inputWithLabel' placeholder='Placeholder for text input' />
      </div>
    </div>
  )
}
