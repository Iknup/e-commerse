import Image from 'next/image';

const AboutPage = () => {
  const informacionChildren = 'mb-5';

  return (
    <main>
      <div className='mx-auto max-w-7xl px-2'>
        <div className='sm:mt-28 sm:flex gap-x-10 mb-10'>
          <div className='w-full sm:w-1/2 mb-5 sm:mb-0'>
            <h1 className='text-3xl font-bold'>Sobre nosotros</h1>
            <p className='mt-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              beatae aperiam voluptatum dolorum saepe, quod odit officiis vel
              ratione magni, rerum tenetur, earum dolores fugiat. Iure voluptas
              atque consequuntur ipsa.
            </p>
          </div>
          <div className='w-full h-[225px] sm:w-1/2 relative sm:h-96'>
            <Image
              src={'/about-page.png'}
              alt='about sisley'
              fill
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='sm:flex justify-between'>
          <div>
            <h1 className='text-2xl font-bold mb-3'>Información</h1>
            <div className={informacionChildren}>
              <h3>Dirección</h3>
              <p>Velasco 687, Santa Cruz de la Sierra</p>
            </div>
            <div className={informacionChildren}>
              <h3>Horario de atención</h3>
              <p>
                L-V 09:30 - 12:30 / 15:30 - 20:30 <br />
                Sabado 10:00 - 13:00 / 15:30 - 19:30
              </p>
            </div>
            <div className={informacionChildren}>
              <h3>Teléfono</h3>
              <a href='tel:33369011'>3 3369011</a>
            </div>
          </div>
          <div>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15196.33286741386!2d-63.1834077!3d-17.7877857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e812430c21b3%3A0x89a934a96d5e9f82!2sSisley!5e0!3m2!1ses-419!2sbo!4v1702600058432!5m2!1ses-419!2sbo'
              width='600'
              height='450'
              style={{ border: 0 }}
              loading='lazy'
              className='w-full sm:w-[600px]'
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
