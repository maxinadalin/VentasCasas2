const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
  ]
  
  export default function Example() {
    return (
      <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative ">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <iframe
                    src={callout.imageSrc}
                    title={callout.name}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href} className="flex items-center justify-center">
                      <span className="absolute inset-0 " />
                      {callout.name}
                    </a>
                  </h3>
                </div>
                <p className="text-base font-semibold text-gray-900 flex items-center justify-center">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    )
  }