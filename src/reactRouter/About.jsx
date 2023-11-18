
import { useEffect } from 'react';
export default function About() {
  useEffect(()=>{
    document.title="ABOUT"

  },[])
  return (
    <div className="bg-yellow-500 h-screen ">This is About</div>
  )
}
