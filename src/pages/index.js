import { Inter } from 'next/font/google'
import MoviePage from '@/components/movie'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-slate-300 flex-col items-center justify-between ${inter.className}`}
    >
      <MoviePage/>
    </main>
  )
}
