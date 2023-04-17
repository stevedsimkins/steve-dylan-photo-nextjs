import Link from "next/link"

export default function Sidebar(){
  return (
    <div className="hidden h-screen w-1/5 min-w-max md:flex flex-col justify-start ml-4 my-2 gap-6">
      <div className="mb-8">
        <Link href="/" className="text-5xl font-ebGaramond underline">Steve Dylan</Link>
        <h3 className="text-2xl font-ebGaramond">Film Photographer</h3>
      </div>
      <Link className="font-ebGaramond text-2xl hover:underline " href="/">Virginia</Link>
      <Link className="font-ebGaramond text-2xl hover:underline " href="/gowest">Go West</Link>
      <Link className="font-ebGaramond text-2xl hover:underline " href="/about">About</Link>
      <Link className="font-ebGaramond text-2xl hover:underline " href="/contact">Contact</Link>
    </div>
  )
}
