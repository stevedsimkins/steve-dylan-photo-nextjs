import Link from "next/link";
import { EnvelopeIcon, CameraIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="font-ebGaramond text-5xl my-10">Contact</h1>
      <div className="flex flex-col gap-5">
        <Link className="font-ebGaramond text-2xl hover:underline flex items-center gap-2" href="mailto:stevedsimkins@gmail.com"><EnvelopeIcon className="h-6 w-6" />Email</Link>
        <Link className="font-ebGaramond text-2xl hover:underline flex items-center gap-2" href="https://instagram.com/stevedylanphoto"><CameraIcon className="w-6 h-6" />Instagram</Link>
      </div>
    </div>
  )
}
