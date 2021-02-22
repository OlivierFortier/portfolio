import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="mb-4 flex flex-col-reverse md:flex-col lg:flex-row">
        <span className="space-y-2 lg:w-1/2">
          <h1 className="text-5xl mt-2">Olivier Fortier</h1>
          <h2 className="text-2xl">
            Salut, je suis un développeur web passionné par les nouvelles
            technologies 🤙
          </h2>
          <Link href="/">
            <a className="inline-block p-2 border-4 border-blue-700 rounded-md">
              En savoir plus 👋
            </a>
          </Link>
        </span>
        <Image
          src="/assets/diego_unsplash.jpg"
          width={445}
          height={394}
          alt="hero"
          className=" object-cover rounded-lg lg:w-1/2"
        />
      </section>
  )
}
