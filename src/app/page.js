import Image from 'next/image'
import { TableLayout } from './tableLayout'
import Button from './button'
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <Button />
      <TableLayout />
    </main>
  )
}
