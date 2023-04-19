import Image from "next/image"

export default function About() {
  return (
    <main className="h-screen flex flex-col lg:flex-row lg:items-center justify-center sm:my-0 my-10 gap-5 px-4">
      <div className="flex flex-col lg:flex-row lg:items-start justify-center gap-5">
        <Image className="lg:max-w-xl" src="/headshot_square.jpeg" alt="headshot" width={800} height={800} />
        <div className="max-w-xl">
          <h1 className="font-ebGaramond text-3xl font-bold py-2">About</h1>
          <p>Steve Simkins began his photography journey in 2015 with a Canon AE-1 film camera, a box of developing gear, and an eye for beauty in the details. By 2018 he had started his own business shooting weddings and engagements for a variety of clients, while still finding time to work on personal projects. He took a sabbatical from professional work in 2019 and continues to focus on building a body of work documenting the details of the everyday. He currently lives in Tennessee with his wife Madison, and his sons Theo and Asher.</p>
        </div>
      </div>
    </main>
  )
}

