import React from "react";
import './section4.css';


const Section4 = () => {
    return(
        <div>
        <div className="sec4">
            <h1 className="titulo4">Experiencia</h1>
            <hr className="linea4"/>
        </div>
        <div className="experiencias">
            <div className="experiencia">
                <div className="Trabajo">
                    <div className="work">
                        <h1>Coordinadora Logistica</h1>
                        <a href="https://www.linkedin.com/company/musimundo/">MUSIMUNDO</a>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci atque dicta tempore fugit harum labore quod amet provident nulla aliquam accusamus voluptas esse suscipit molestias natus, saepe sequi nostrum.</p>
                    <h3>Febrero 2022 a Febrero 2023</h3>
                </div>
                <div className="Trabajo">
                    <div className="work">
                        <h1>Analista de Supply Chain</h1>
                        <a href="https://www.linkedin.com/company/savencia-groupe/">CCU S.A.</a>
                    </div>
                    <p>Elaboración del programa de producción semanal; desarrollo y seguimiento de indicadores para el control de gestión; revisión de stock productos; generación de análisis específicos para la propuesta de mejoras.</p>
                    <h3>Febrero 2020 a Enero 2022</h3>
                </div>
            </div>    
            <div className="experiencia">   
                <div className="Trabajo">
                    <div className="work">
                        <h1>Analista de compras productivas</h1>
                        <a href="https://www.linkedin.com/company/companiacerveceriasunidas/">CCU S.A.</a>
                    </div>
                    <p>Control diario del stock de insumos; recepción de requerimientos de compra; negociación con proveedores; análisis de cotizaciones; emisión y seguimiento de órdenes de compra; elaboración de reportes de gestión y actualización constante de la base de datos.</p>
                    <h3>Junio 2019 a Noviembre 2019</h3>
                </div>
                <div className="Trabajo">
                    <div className="work">
                        <h1>Supervisora de Planificación</h1>
                        <a href="https://www.linkedin.com/company/companiacerveceriasunidas/">CCU S.A.</a>
                    </div>
                    <p>Participación en el área de Planificación y Control de la Producción elaborando y publicando el programa de producción semanal; actualizando la base de datos de control mensual de gestión; generando reportes y realizando análisis de escenarios solicitados por la jefatura.</p>
                    <h3>Marzo 2018 a Mayo 2019</h3>
                </div>
            </div>   
            <div className="experiencia"> 
                <div className="Trabajo">
                    <div className="work">
                        <h1>Pasante de Fabrica</h1>
                        <a href="https://www.linkedin.com/company/gani-s.a./">CCU S.A.</a>
                    </div>
                    <p>Elaboración de un proyecto de inversión en el sector de producción de espuma de poliuretano. Objetivos: definir un sistema de transporte para mecanizar el transporte de bloques de poliuretano y rediseñar el layout del sector de corte de espuma.</p> 
                    <h3>Marzo 2017 a Junio 2017</h3>
                </div>
                <div className="Trabajo">
                    <div className="work">
                        <h1>Pasante de Investigación</h1>
                        <a href="https://www.linkedin.com/company/conicet/">INTEC</a>
                    </div>
                    <p>Investigación de modelos de configuración de cadenas de suministro sustentables. Herramienta utilizada: IBM ILOG CPLEX Optimization Studio.</p>
                    <h3>Agosto 2016 a Agosto 2017</h3>
                </div>
            </div>
        </div>
        </div>
    )
}
export {Section4}