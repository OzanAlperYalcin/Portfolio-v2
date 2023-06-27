import Aside from "@/components/admin/aside"
import Footer from "@/components/admin/footer"
import Header from "@/components/admin/header"
import StoreProvider from "@/store/StoreProvider"


export default function DashboardLayout({ children }) {
  return (
    <div className='h-full flex flex-col'>
      <Header />
      <div className="flex">
        <Aside />
        <main className="container mx-auto px-5">
          <StoreProvider>
            {children}
          </StoreProvider>
        </main>
      </div>
      <Footer />
    </div>
  )
}
