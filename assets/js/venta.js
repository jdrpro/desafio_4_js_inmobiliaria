const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: '5.000',
        smoke: false,
        pets: false
        },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: '1.200',
        smoke: true,
        pets: true
        },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: '4.500',
        smoke: false,
        pets: true
        },
    {
        nombre: 'The Best Penthouse in New york City',
        src: 'https://resizer.glanacion.com/resizer/v2/la-espectacular-vista-de-sus-ventanales-de-piso-a-C76FWEXZLBHZXDEGT6JJJSMQSM.JPG?auth=36ff05c52d18726e2c3b21b4a749e6e4f071f9e29fe20b2e391e32b1da272923&width=768&height=507&quality=70&smart=true',
        descripcion: 'Este penthouse de lujo, ubicado en la metropolis de Nueva York, ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '2986 Grand Aveneu  89A, Oeste, New York, AZ 86336',
        habitaciones: 2,
        baños: 1,
        costo: '2.900',
        smoke: false,
        pets: false
        }
    ]    //https://cf2.bstatic.com/xdata/images/hotel/max1024x768/346742475.jpg?k=cbe806f8d431f8097be12592276446a2d74ed9cca429b79587b3f94257b17b8c&o=&hp=1
    for (let propiedad of propiedades_venta) {
        let primeraProp = propiedades_venta[0];
        const propiedadesVenta1 = document.querySelector('#prop1');
        let valorS = primeraProp.smoke ? `
        <p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : 
        `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
        let valorP = primeraProp.pets ? `
        <p class="text-success"><i class="fas fa-paw"></i> Permitido mascotas</p>` : 
        `<p class="text-danger"><i class="fas fa-ban"></i> No se permite mascotas</p>`;
        propiedadesVenta1.innerHTML = `
        <div class="card">
            <img src="${primeraProp.src}" class="card-img-top" alt="Imagen del departamento" />
            <div class="card-body">
                <h5 class="card-title">${primeraProp.nombre}</h5>
                <p class="card-text">${primeraProp.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${primeraProp.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i> ${primeraProp.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${primeraProp.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${primeraProp.costo}</p>
                <p id='smoke'>${valorS}</p>
                <p id='pets'>${valorP}</p>
            </div>
        </div>
        `;
    }
    for (let propiedad of propiedades_venta) {
        let segundaProp = propiedades_venta[1];
        const propiedadesVenta1 = document.querySelector('#prop2');
        let valorS = segundaProp.smoke ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
        let valorP = segundaProp.pets ? `<p class="text-success"><i class="fas fa-paw"></i> Permitido mascotas</p>` : `<p class="text-danger"><i class="fas fa-ban"></i> No se permite mascotas</p>`;
        propiedadesVenta1.innerHTML = `
        <div class="card">
            <img src="${segundaProp.src}" class="card-img-top" alt="Imagen del departamento" />
            <div class="card-body">
                <h5 class="card-title">${segundaProp.nombre}</h5>
                <p class="card-text">${segundaProp.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${segundaProp.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i> ${segundaProp.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${segundaProp.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${segundaProp.costo}</p>
                <p id='smoke'>${valorS}</p>
                <p id='pets'>${valorP}</p>
            </div>
        </div>
        `;
    }
    for (let propiedad of propiedades_venta) {
        let tercerProp = propiedades_venta[2];
        const propiedadesVenta1 = document.querySelector('#prop3');
        let valorS = tercerProp.smoke ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
        let valorP = tercerProp.pets ? `<p class="text-success"><i class="fas fa-paw"></i> Permitido mascotas</p>` : `<p class="text-danger"><i class="fas fa-ban"></i> No se permite mascotas</p>`;
        propiedadesVenta1.innerHTML = `
        <div class="card">
            <img src="${tercerProp.src}" class="card-img-top" alt="Imagen del departamento" />
            <div class="card-body">
                <h5 class="card-title">${tercerProp.nombre}</h5>
                <p class="card-text">${tercerProp.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${tercerProp.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i> ${tercerProp.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${tercerProp.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${tercerProp.costo}</p>
                <p id='smoke'>${valorS}</p>
                <p id='pets'>${valorP}</p>
            </div>
        </div>
        `;
    }
    for (let propiedad of propiedades_venta) {
        let tercerProp = propiedades_venta[3];
        const propiedadesVenta1 = document.querySelector('#prop4');
        let valorS = tercerProp.smoke ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
        let valorP = tercerProp.pets ? `<p class="text-success"><i class="fas fa-paw"></i> Permitido mascotas</p>` : `<p class="text-danger"><i class="fas fa-ban"></i> No se permite mascotas</p>`;
        propiedadesVenta1.innerHTML = `
        <div class="card">
            <img src="${tercerProp.src}" class="card-img-top" alt="Imagen del departamento" />
            <div class="card-body">
                <h5 class="card-title">${tercerProp.nombre}</h5>
                <p class="card-text">${tercerProp.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${tercerProp.ubicacion}</p>
                <p>
                    <i class="fas fa-bed"></i> ${tercerProp.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${tercerProp.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${tercerProp.costo}</p>
                <p id='smoke'>${valorS}</p>
                <p id='pets'>${valorP}</p>
            </div>
        </div>
        `;
    }
    
    
   
    