import 'outstatic/outstatic.css'
import React from 'react'
import { Outstatic } from 'outstatic'
import { OstClient } from 'outstatic/client'

export default async function Page({ params }: { params: { ost: string[] } }) {
  const ostData = await Outstatic()
  
  return <div style={{position: 'fixed', zIndex: 5, width: '100%'}}><OstClient ostData={ostData} params={params} /></div>
}