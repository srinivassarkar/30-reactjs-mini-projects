
import { useEffect } from 'react';
export default function Contact() {
  useEffect(()=>{
    document.title="CONTACT"

  },[])
  return (
    <div className="bg-blue-500 h-screen ">This is Contact</div>
  )
}
