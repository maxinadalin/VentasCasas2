import {connect} from "react-redux"

const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54486.7907936777!2d-64.2361015924126!3d-31.402430507831543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432993038308dbd%3A0x6b19099e5c73a073!2sPlaza%20Col%C3%B3n!5e0!3m2!1ses-419!2sit!4v1702243734553!5m2!1ses-419!2sit',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    }
  ]



function Ubicatios(){
    return(
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
                    style={{ zIndex: 1 }}  // Agrega un valor de z-index
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href} className="flex items-center justify-center"
                      onClick={(e) => {
                        e.preventDefault(); // Evitar el comportamiento predeterminado
                        // Puedes agregar cualquier lógica adicional aquí
                      }}
                    >
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

const mapStateToProps=state=>({})

export default connect(mapStateToProps,{})(Ubicatios)