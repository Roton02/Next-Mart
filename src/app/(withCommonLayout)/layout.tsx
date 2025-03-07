import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import React from "react"


function commonLayout({children} : {children: React.ReactNode}) {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen">
          {children}
      </div>
      <Footer/>
    </div>
  )
}

export default commonLayout