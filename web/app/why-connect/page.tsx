import BoxHero5 from '@/src/presentation/components/Hero5/BoxHero5'
import BoxHero6 from '@/src/presentation/components/Hero6/BoxHero6'
import BoxFooter from '@/src/presentation/layout/Footer/BoxFooter'
import BoxNavbar from '@/src/presentation/layout/Navbar/BoxNavbar'
import React from 'react'

function Page() {
  return (
    <div>
      <BoxNavbar />
        <main className="flex flex-col w-full items-center min-h-screen">
            <BoxHero5/>
            <BoxHero6/>
        </main>
      <BoxFooter />
    </div>
  )
}

export default Page
