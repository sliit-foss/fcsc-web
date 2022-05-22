import { useState, useEffect } from 'react'
import SideNav from '../../components/Admin/Layout/SideNav'
import AdminUsers from '../../modules/Admin/AdminNotices'
import BottomBar from '../../components/Admin/Layout/BottomBar'
import Head from 'next/head'

const Admin = (): JSX.Element => {
  let selectedMenuOptionCache = ''

  if (process.browser) {
    selectedMenuOptionCache =
      window.localStorage.getItem('MenuOptionCache') || ''
  }
  const [selectedMenuOption, setSelectedMenuOption] = useState('Notices')

  useEffect(() => {
    if (selectedMenuOptionCache != '') {
      setSelectedMenuOption(selectedMenuOptionCache)
    }
  }, [selectedMenuOptionCache])

  const updateSelectedMenuOption = (option: string) => {
    setSelectedMenuOption(option)
    if (process.browser) {
      window.localStorage.setItem('MenuOptionCache', option)
    }
  }

  return (
    <div>
      <Head>
        <title>Management | FCSC</title>
        <meta name="description" content="FCSC website management" />
      </Head>
      <div title="Management | FCSC SLIIT">
        <section className="grid grid-rows-1 grid-cols-1 md:grid-cols-8 gap-4 min-h-90vh">
          <SideNav onMenuItemSelect={updateSelectedMenuOption} />
          {selectedMenuOption != '' ? (
            <section className="md:col-span-6 py-10 px-4 sm:px-6 mb-10 md:mb-0">
              <div className="bg-white rounded-2xl shadow-lg p-4">
                <AdminUsers />
              </div>
            </section>
          ) : (
            <div></div>
          )}
          <BottomBar onMenuItemSelect={updateSelectedMenuOption} />
        </section>
      </div>
    </div>
  )
}

export default Admin
