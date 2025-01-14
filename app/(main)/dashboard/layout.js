import React, { Suspense } from 'react'
import Dashboard from './page'
import { BarLoader } from 'react-spinners'

const DashboardLyout = () => {
  return (
    <div className='px-4'>
      <h1 className='text-6xl font-bold gradient-title mb-5'>Dashboard</h1>

      {/* Dashboard */}
      <Suspense
      fallback={<BarLoader className='mt-4' width={'100%'} color='#9333ea' />}
      >
        <Dashboard />
      </Suspense>
    </div>
  )
}

export default DashboardLyout
