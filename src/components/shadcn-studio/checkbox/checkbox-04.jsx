import { useId } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export const CheckboxTodoList = () => {
  const id = useId()

  return (
    <div className='bg-[#ffd494] w-[150] h-[150] flex items-center p-3 gap-2'>
      <Checkbox id={id} defaultChecked />
      <Label htmlFor={id} className='peer-data-[state=checked]:line-through'>
        Add item
      </Label>
    </div>
  );
}

