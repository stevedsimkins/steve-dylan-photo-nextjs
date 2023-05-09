import Link from "next/link";

export default function Contact() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5 font-ebGaramond">
      <h1 className="font-ebGaramond text-5xl my-10 font-bold">Contact</h1>
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-1">
          <p>email</p>
          <p>&bull;</p>
          <Link className="font-ebGaramond flex items-center gap-2 hover:underline" href="mailto:hello@stevedsimkins.dev">hello@stevedylanphoto.com</Link>
        </div>
        <div className="flex gap-1">
          <p>instagram</p>
          <p>&bull;</p>
          <Link className="font-ebGaramond flex items-center gap-2 hover:underline" href="https://instagram.com/stevedylanphoto">@stevedylanphoto</Link>
        </div>
      </div>
    </div>
  )
}
