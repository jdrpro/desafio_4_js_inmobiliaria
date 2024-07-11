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
        }] 
const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: '2.000',
        smoke: false,
        pets: true
        },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: '2.500',
        smoke: true,
        pets: true
        },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: '2.200',
        smoke: false,
        pets: false
        }]
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
        for (let propiedad of propiedades_alquiler) {
            let primeraProp = propiedades_alquiler[0];
            const propiedadesVenta1 = document.querySelector('#prop4');
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
        
        for (let propiedad of propiedades_alquiler) {
            let segundaProp = propiedades_alquiler[1];
            const propiedadesVenta1 = document.querySelector('#prop5');
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
        for (let propiedad of propiedades_alquiler) {
            let tercerProp = propiedades_alquiler[2];
            const propiedadesVenta1 = document.querySelector('#prop6');
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