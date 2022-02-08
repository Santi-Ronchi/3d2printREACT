import React from 'react';
import '../estructura.scss';

const SobreNosotros = () => {
  return(
    <section className="detail-outside">
        <br/><br/>
        <article>
            <table cellpadding="10" cellspacing="1" class="tabla">
                <tr>
                    <td class="tabla__titulo">Productos</td>
                    <td class="tabla__titulo">Servicios</td>
                    <td class="tabla__titulo">Nuestro Alcance</td>
                </tr>
                <tr>
                    <td>En 3d2print tenemos impresiones de todo tipo de utilidades para el hogar y gadgets para tu vida cotidiana.<br/> Trabajamos   con los plasticos PLA, PET y ABS para asegurar el plastico adecuado para los productos.</td>
                    <td>Contactanos con tus modelos 3D para que nosotros podamos imprimirtelo: <br/><br/>
                        <ul>
                            <li>Extrusores de 0.25mm a 0.8mm</li><br/>
                            <li>Capa minima de 0.05mm</li><br/>
                            <li>Plasticos PLA, PET, ABS y HIPS</li><br/>
                            <li>El color que mas quieras</li>
                        </ul>
                        Todo para que puedas tener el print que más te convenga.
                    </td>
                    <td>Con sede en CABA, podemos hacer envíos a todo el país.</td>
                </tr>
            </table>
        </article>
    </section>

);};

export default SobreNosotros
