import { CustomFilter, Hero, Searchbar } from '@/components'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <main>
      <Hero />
      <Box>
        <Searchbar />
        <CustomFilter />
      </Box>
    </main>
  )
}
