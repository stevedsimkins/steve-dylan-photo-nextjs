import Link from "next/link";
import { EnvelopeIcon, CameraIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="font-ebGaramond text-5xl my-10 font-bold">Contact</h1>
      <div className="flex flex-col gap-5">
        <Link className="font-ebGaramond text-2xl flex items-center gap-2" href="mailto:stevedsimkins@gmail.com">
          <EnvelopeIcon className="h-10 w-10 bg-gray-700 hover:bg-gray-400 p-2 rounded text-white" />Email</Link>
        <Link className="font-ebGaramond text-2xl flex items-center gap-2" href="https://instagram.com/stevedylanphoto">
          <CameraIcon className="h-10 w-10 bg-gray-700 hover:bg-gray-400 p-2 rounded text-white" />Instagram</Link>
      </div>
    </div>
  )
}
