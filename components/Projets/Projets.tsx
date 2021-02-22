import Image from 'next/image'
import Link from 'next/link'

export default function Projets() {
    return (
        <section className="my-6">
        <h3 className="text-3xl my-3">Projets récents</h3>
        <ul className="space-y-7">
          <li>
            <article className="flex flex-row-reverse shadow-lg rounded-md">
              <div>
                <h4>Nostrud culpa</h4>
                <p>Reprehenderit esse labore id veniam ut veniam non ex</p>
                <Link href="/">
                  <a>Read more</a>
                </Link>
              </div>
              <Image
                src="/assets/img-placeholder.png"
                width={165}
                height={165}
              />
            </article>
          </li>
          <li>
            <article className="flex flex-row-reverse shadow-lg rounded-md">
              <div>
                <h4>Nostrud culpa</h4>
                <p>Reprehenderit esse labore id veniam ut veniam non ex</p>
                <Link href="/">
                  <a>Read more</a>
                </Link>
              </div>
              <Image
                src="/assets/img-placeholder.png"
                width={165}
                height={165}
              />
            </article>
          </li>
          <li>
            <article className="flex flex-row-reverse shadow-lg rounded-md">
              <div>
                <h4>Nostrud culpa</h4>
                <p>Reprehenderit esse labore id veniam ut veniam non ex</p>
                <Link href="/">
                  <a>Read more</a>
                </Link>
              </div>
              <Image
                src="/assets/img-placeholder.png"
                width={165}
                height={165}
              />
            </article>
          </li>
        </ul>
      </section>
    )
}
