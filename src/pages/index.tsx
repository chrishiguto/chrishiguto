import Header from 'components/Header'
import SectionHero from 'components/SectionHero'
import SectionTimeline from 'components/SectionTimeline'

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionTimeline />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-white">Scroll up</span>
      </div>
    </>
  )
}
