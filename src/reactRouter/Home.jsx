import { useEffect } from 'react';
export default function Home() {
  useEffect(()=>{
    document.title="HOME"

  },[])

  return <div className="bg-red-500 h-screen ">This is Home</div>;
}
