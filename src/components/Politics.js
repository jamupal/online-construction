import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CssBaseline, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import translate from "../assets/i18n/traslate";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    heading: {
      textAlign: "center",
      paddingBottom: "3rem",
      color: "rgb(0,0,0)"
    },
    headingTopograpy: {
      background: "#F7921A",
      color:"#fff",
      display: "inline-block",
      padding: ".5rem 4rem",
      clipPath: "polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%)",
      fontWeight: "bold",
      fontSize: "xx-large",
      //marginTop: "2rem",
    },
    accordion: {
        marginTop: "2rem",
        marginBottom: "2rem",
    },
    ulClass: {
        paddingLeft: "1rem",
    },
  }));
  
const Politics = () => {
    const classes = useStyles();
   
  return (
    <>

    <CssBaseline />
     <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor=""
        color="#000">
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} >
                <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
                    Terminos   
                </Typography></Box>
        <Box>
        <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>{translate('politics.tittle')}</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>{translate('politics.item1')}</li>
                    <li>{translate('politics.item2')}</li>
                    <li>{translate('politics.item3')}</li>
                    <li>{translate('politics.item4')}</li>
                </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Derechos de propiedad intelectual</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>
                        Cualquier contenido que almacene en nuestro sitio web (colectivamente, "Contenido") sigue siendo suyo, sin embargo, usted le otorga a Online Construction una licencia limitada para acceder, copiar, modificar, distribuir,
                        almacenar, transmitir, formatear, enumerar informaci??n sobre, editar, traducir, hacer trabajos derivados de, mostrar p??blicamente y realizar p??blicamente
                        Contenido en la medida necesaria para proporcionarle nuestras Funciones. La licencia que nos otorga no es exclusiva (lo que significa que es libre de licenciar su
                        Contenido para cualquier otra persona adem??s de Online Construction), totalmente pagado y libre de regal??as (lo que significa que no estamos obligados a pagarle por
                        el uso en las Caracter??sticas del Contenido que publica), transferible y sublicenciable (para que podamos utilizar nuestros afiliados y subcontratistas)
                        como las redes de entrega de contenido de Internet para proporcionar las Funciones) y en todo el mundo (porque Internet y las Funciones tienen un alcance global).
                        </li>
                        <li>
                        Usted es el ??nico responsable de su Contenido y de las consecuencias de su transmisi??n. Usted es adem??s responsable de garantizar que no ponga accidentalmente a
                        disposici??n p??blico ning??n Contenido privado. Cualquier Contenido que pueda recibir a trav??s del uso de las Funciones de sus visitantes o de otro modo se le
                        proporciona TAL CUAL es para su informaci??n y uso personal ??nicamente y usted acepta no usar o explotar dicho Contenido para ning??n prop??sito sin el
                        consentimiento expreso por escrito de la persona que posee los derechos de dicho Contenido. No ofrecemos garant??as, expresas o impl??citas, en cuanto al
                        Contenido o la precisi??n o confiabilidad del Contenido o de cualquier material o informaci??n que reciba a trav??s de nuestras Funciones.
                        </li>
                        <li>Online Construction reconoce que no tiene derechos de propiedad intelectual sobre ninguna propiedad intelectual propiedad de sus Usuarios y cargada o utilizada en Online Construction. Cualquier propiedad intelectual de este tipo sigue siendo propiedad del usuario de Online Construction. Sin embargo, al permitir que su contenido en l??nea se vea p??blicamente, incluido cualquier contenido desarrollado con Online Construction, usted reconoce y acepta que dicho contenido p??blico puede verse y compartirse libremente. Adem??s, reconoce y acepta que Online Construction no es, de ninguna manera, responsable de la seguridad o protecci??n de cualquier propiedad intelectual o contenido similar cargado en Online Construction, el cumplimiento de cualquier propiedad intelectual o derechos similares con respecto a dicho contenido, y que Online Construction deber?? no ser?? responsable de ning??n reclamo, da??o, responsabilidad u otros costos o gastos relacionados con el mismo.</li>
                        <li>Online Construction no realiza una prueba previa o una pantalla peri??dica ni revisa ning??n Contenido cargado o utilizado en conexi??n con Online Construction, pero se reserva el derecho, a su exclusivo criterio, de examinar y revisar cualquier contenido cargado o utilizado en relaci??n con Online Construction, y eliminar cualquier contenido que viole estos T??rminos de uso.</li>
                        <li>En el curso del uso de cualquiera de las Funciones, si encuentra alg??n Contenido con aviso (s) de copyright o cualquier caracter??stica (s) de protecci??n de copia, acepta no eliminar dicho aviso (s) o deshabilitar dicha caracter??stica (s) de protecci??n de copia seg??n el caso puede ser. Al poner a disposici??n cualquier Contenido con derechos de autor / derechos de autor a trav??s de Online Construction, usted afirma que tiene el consentimiento, la autorizaci??n o el permiso, seg??n sea el caso de cada persona que pueda reclamar cualquier derecho sobre dicho Contenido para que dicho Contenido est?? disponible de esa manera. Adem??s, al poner a disposici??n cualquier Contenido de la manera mencionada anteriormente, usted acepta expresamente que Online Construction tendr?? el derecho de bloquear el acceso o eliminar dicho Contenido puesto a su disposici??n, si recibimos quejas sobre cualquier ilegalidad o infracci??n de los derechos de terceros en dicho Contenido. . Al usar cualquiera de las Funciones y transmitir o publicar cualquier Contenido usando dicha Funci??n, usted acepta expresamente que Online Construction determine las preguntas de ilegalidad o infracci??n de los derechos de terceros en dicho Contenido.</li>
                        <li>Es nuestra pol??tica responder a avisos claros de presuntas infracciones de derechos de autor que cumplan con la Ley de Derechos de Autor del Milenio Digital de 1998 ("DMCA"). Adem??s, cancelaremos sin previo aviso las cuentas de aquellos que determinemos como infractores reincidentes. Si es propietario de derechos de autor y cree que cualquier contenido alojado en las Caracter??sticas infringe sus derechos de autor, puede enviar una notificaci??n de conformidad con la DMCA al proporcionar a Online Construction la siguiente informaci??n por escrito:</li>
                        <ul className={classes.ulClass}>
                            <li>una firma electr??nica o f??sica de la persona autorizada para actuar en nombre del propietario de los derechos de autor;</li>
                            <li>una descripci??n del trabajo protegido por derechos de autor que usted afirma que se ha infringido;</li>
                            <li>una descripci??n de d??nde se encuentra el material que, seg??n usted, infringe, se encuentra en nuestras Funciones, como al proporcionarnos las URL del contenido; su direcci??n, n??mero de tel??fono y direcci??n de correo electr??nico;</li>
                            <li>una declaraci??n escrita de usted de que cree de buena fe que el uso en disputa no est?? autorizado por el propietario de los derechos de autor, su agente o la ley;</li>
                            <li>una declaraci??n suya, hecha bajo pena de perjurio, que la informaci??n anterior en su notificaci??n es precisa y que usted es el propietario de los derechos de autor o est?? autorizado para actuar en nombre del propietario de los derechos de autor.</li>
                        </ul>
                </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Agente de derechos de autor</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>Si cree que cualquier Contenido de usuario u otro material en las Caracter??sticas infringe sus derechos de autor, comun??quese con nosotros con la URL exacta de donde se encuentra el supuesto material infractor. Si se nos notifica que cualquier Contenido del usuario infringe los derechos de propiedad intelectual de otro, podemos eliminar dicho Contenido del usuario. Tenemos una pol??tica de infracci??n reiterada y nos reservamos el derecho de cancelar su Cuenta por enviar Contenido de usuario infractor en violaci??n de estos T??rminos de uso una vez o de forma reiterada.</li>
                </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Limitaci??n de responsabilidad</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                <ul className={classes.ulClass}>
                    <li>Independientemente de si se informa o no de la posibilidad de tales da??os, Online Construction y sus directores, funcionarios, accionistas, empleados y afiliados, no ser??n responsables ante ning??n usuario por da??os directos, indirectos, incidentales, especiales, consecuentes o ejemplares, incluidos, pero no limitado a da??os por p??rdida de ganancias, buena voluntad, uso, datos u otras p??rdidas intangibles resultantes de (i) el uso o la imposibilidad de usar las funciones; (ii) el costo de adquisici??n de bienes y caracter??sticas sustitutos resultantes de cualquier bien, informaci??n, informaci??n o caracter??sticas obtenidas o mensajes recibidos o transacciones realizadas a trav??s de o desde las caracter??sticas; (iii) acceso no autorizado o alteraci??n de sus transmisiones o datos; (iv) declaraciones o conducta de un tercero sobre las caracter??sticas; (v) o cualquier otro asunto relacionado con las caracter??sticas. su ??nica y exclusiva soluci??n para cualquier disputa con Online Construction relacionada con cualquiera de las funciones ser?? la terminaci??n de dicha funci??n.</li>
                </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Pol??tica de cuenta de usuario</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>Usted es el ??nico responsable de todas las actividades que ocurran en su cuenta.</li>
                    <li>Usted acepta no usar la cuenta, nombre de usuario o contrase??a de otro Usuario en ning??n momento, ni revelar su contrase??a a terceros ni hacer nada que pueda poner en peligro la seguridad de su cuenta.</li>
                    <li>Usted acepta notificarnos de inmediato sobre cualquier uso no autorizado de su cuenta.</li>
                    <li>Si tenemos motivos razonables para sospechar la violaci??n de estos t??rminos o si la informaci??n de registro que ha proporcionado es falsa, inexacta, desactualizada o incompleta, podemos cancelar su cuenta de Usuario y rechazar el uso actual o futuro de cualquiera o todas las funciones.</li>
                    <li>No somos responsables de ninguna p??rdida o da??o a usted o cualquier tercero que pueda incurrir como resultado de un acceso y / o uso no autorizado de su cuenta, o de otra manera.</li>
                </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Datos del usuario</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>Usted posee el Contenido creado o almacenado por usted. A menos que usted lo permita espec??ficamente, su uso de las Funciones no nos otorga la licencia para usar el Contenido creado o almacenado por usted para fines comerciales, de marketing o similares.</li>
                    <li>Usted acepta no usar, mostrar o compartir su Contenido o cualquier informaci??n que le proporcionemos (colectivamente, "Datos del usuario") de una manera inconsistente con nuestros T??rminos de uso, Pautas y todas las leyes y regulaciones aplicables.</li>
                    <li>No estamos obligados a mantener copias de seguridad de los Datos del usuario en el Sitio una vez que se eliminen su cuenta o los Datos del usuario.</li>
                </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Pol??tica de uso razonable</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>La pol??tica de Online Construction hacia el uso justo es que los usuarios deben poder utilizar las funciones de Online Construction de manera adecuada para satisfacer sus necesidades. Un n??mero muy peque??o de clientes usa una cantidad excesiva del ancho de banda de la red en las horas pico, en la medida en que puede afectar el rendimiento de otros. Por esta raz??n, tenemos una pol??tica de uso justo dise??ada para garantizar que nuestra funci??n de Miembro se mantenga r??pida y confiable las 24 horas del d??a; implica monitorear la cantidad de impresiones, interacciones de los visitantes, descargas y otro tr??fico no cr??tico en nuestra funci??n.</li>
                <li>Si el uso de un miembro es continuamente excesivo, injusto, afecta el disfrute de nuestra funci??n por parte de otros usuarios, o no es consistente con el uso que normalmente esperar??amos en el paquete actual de ese miembro, nos reservamos el derecho de suspender o terminar la capacidad del miembro para acceder a caracteristicas.</li>
            </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Violaciones y Terminaci??n de Cuentas</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>Online Construction se reserva el derecho de investigar violaciones de cualquiera de estos T??rminos de uso o de cualquier otra pol??tica de Online Construction u Online Construction, o cualquier otra violaci??n de cualquier ley, norma o regulaci??n estatal, federal, nacional o local, y de buscar cualquier remedio disponible para Online Construction ya sea por ley, en equidad o de otra manera. Por la presente, reconoce y acepta que Online Construction puede notificar, involucrar y cooperar con las autoridades policiales en la investigaci??n y el enjuiciamiento de los usuarios que violen estos T??rminos de uso o cualquier otra pol??tica de Online Construction u Online Construction, y cualquier otra violaci??n de las leyes estatales, federales o locales, reglas o regulaciones</li>
                </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Politica de reembolso</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>Todos los pagos realizados a Online Construction en relaci??n con su cuenta Online Construction no son reembolsables, y Online Construction generalmente no ofrece, y no est?? obligado a proporcionar, ning??n reembolso o cr??dito, a menos que la ley lo requiera. No hay ninguna circunstancia en la que tenga derecho, o Online Construction debe proporcionar un reembolso o cr??dito, a menos que la ley lo requiera.</li>
                </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Actividad prohibida</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>Usted acepta no utilizar las Funciones con fines ilegales, da??inos, enga??osos, fraudulentos u otros fines maliciosos o publicar, difundir o comunicar cualquier tema ilegal, difamatorio, obsceno, lascivo, excesivamente violento, acosador, sexualmente expl??cito u objetable o de otro modo para el transmisi??n de material que contiene virus u otro c??digo malicioso, o el que infringe o puede infringir la propiedad intelectual u otros derechos de otro.</li>
                <li>Usted acepta no utilizar las Funciones para la transmisi??n de "correo basura", "spam", "cartas en cadena", "phishing" o distribuci??n masiva no solicitada de correo electr??nico. A pesar de estas prohibiciones, el contenido comunicado por otros Usuarios puede contener material, productos o caracter??sticas inexactos, inapropiados, ofensivos o sexualmente expl??citos, y no asumimos ninguna responsabilidad por este material.</li>
                <li>Sin asumir ninguna obligaci??n de hacerlo, podemos eliminar cualquier Contenido o suspender cualquier cuenta asociada con ??l, que tengamos motivos razonables para creer que viola este Acuerdo o que puede ser ofensivo o ilegal, o violar los derechos, da??ar o amenazar la seguridad de cualquier persona</li>
            </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Enlaces</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
          <ul className={classes.ulClass}>
                <li>Online Construction no ha revisado todos los sitios vinculados a Online Construction y no es responsable por el contenido de dichos sitios web vinculados. La inclusi??n de cualquier enlace no implica la aprobaci??n por parte de Online Construction del sitio o la aplicaci??n. El uso de cualquier sitio web vinculado es bajo el propio riesgo del usuario.</li>
            </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Descargo de responsabilidad de garant??as</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
          <ul className={classes.ulClass}>
                <li>Online Construction se proporciona "tal cual" y "seg??n disponibilidad" sin garant??as de ning??n tipo. Online Construction y cada usuario de Online Construction renuncian a cualquier garant??a con respecto a la seguridad, confiabilidad, oportunidad y rendimiento de Online Construction; Online Construction renuncia a toda responsabilidad por cualquier reclamo, da??os, p??rdidas, costos o gastos (incluidos los honorarios de abogados).</li>
                <li>En relaci??n con la plataforma Online Construction, Online Construction no garantiza que (i) las caracter??sticas cumplan con sus requisitos espec??ficos, (ii) las caracter??sticas ser??n ininterrumpidas, oportunas, seguras o sin errores, (iii) los resultados que se pueden obtener de el uso de las caracter??sticas ser?? preciso o confiable, (iv) la calidad de cualquier producto, caracter??sticas, informaci??n u otro material comprado u obtenido por usted a trav??s de las caracter??sticas satisfar?? sus expectativas, y (v) cualquier error en las caracter??sticas ser corregido.</li>
                <li>Online Construction y cada usuario de Online Construction renuncian a cualquier garant??a de las caracter??sticas o productos recibidos a trav??s de Online Construction o anunciados en ellos o recibidos a trav??s de los enlaces proporcionados por Online Construction u Online Construction.</li>
                <li>Usted comprende y acepta que el uso de Online Construction es bajo su propia discreci??n y riesgo y que usted ser?? el ??nico responsable de cualquier responsabilidad, reclamo, da??os, p??rdida, costo o gasto, incluida, entre otras, la p??rdida de datos que resulte de surge de su uso de Online Construction.</li>
            </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Divisibilidad</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
          <ul className={classes.ulClass}>
                <li>Si un tribunal de jurisdicci??n competente o ??rbitro determina que alguna disposici??n de estos T??rminos de uso es ilegal, nula o inaplicable, la disposici??n no aplicable se modificar?? para hacerla ejecutable y efectiva en la mayor medida posible para que tenga efecto la intenci??n de la disposici??n; y si un tribunal o ??rbitro considera que la disposici??n modificada es inv??lida, ilegal, nula o inaplicable, la validez, legalidad y exigibilidad de las disposiciones restantes de estos T??rminos de uso no se ver??n afectadas de ninguna manera.</li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Elegibilidad</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
            <li>Al usar nuestro sitio y caracter??sticas, usted declara y garantiza que:
                    <ul className={classes.ulClass}>
                        <li>(a) es plenamente capaz y competente para aceptar los t??rminos, condiciones, obligaciones, representaciones y garant??as establecidas en estos T??rminos de uso;</li>
                        <li>(b) toda la informaci??n de registro que env??e es veraz y precisa;</li>
                        <li>(c) mantendr?? la precisi??n de dicha informaci??n;</li>
                        <li>(d) su uso de las Funciones no viola ninguna ley o regulaci??n aplicable. El uso de las Funciones es nulo donde est?? prohibido.</li>
                    </ul>
                </li>
            </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Renuncias</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>Si no actuamos con respecto a una violaci??n de estos T??rminos de uso por parte de usted u otros Usuarios a tiempo, no renunciamos a nuestro derecho de actuar con respecto a esa violaci??n en un futuro o en caso de posteriores infracciones similares u otras.</li>
            </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Acuerdo completo</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>Usted acepta que estos T??rminos de uso constituyen el acuerdo completo, completo y exclusivo entre usted y Online Construction con respecto a Online Construction, y reemplaza todos los acuerdos y entendimientos anteriores, ya sean escritos u orales, o establecidos por costumbre, pr??ctica, pol??tica o precedente, con respecto a el tema de estos T??rminos de uso.</li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Descargo de responsabilidad de garant??a</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>El uso del sitio es bajo su propio riesgo, y el sitio se proporciona "tal cual" sin garant??as de ning??n tipo, ya sea expresa o impl??cita. Online Construction no garantiza que las funciones estar??n disponibles, ininterrumpidas, seguras o libres de errores, que los defectos ser??n corregidos o que las funciones o los servidores que las hacen disponibles est??n libres de virus u otros componentes da??inos. Online Construction no acepta ninguna responsabilidad por cualquier p??rdida o da??o derivado de su uso del Sitio.</li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Cambios a estos T??rminos de uso</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>Online Construction tiene la discreci??n de actualizar estos T??rminos de uso en cualquier momento. Cuando lo hagamos, publicaremos una notificaci??n en nuestras respectivos grupos y p??ginas donde haya comunidad de Online Construction. Alentamos a los usuarios a consultar con frecuencia esta p??gina para ver si hay cambios. Usted reconoce y acepta que es su responsabilidad revisar estos T??rminos de uso peri??dicamente y conocer las modificaciones.</li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Contactando con nosotros</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>Si tiene alguna pregunta sobre estos T??rminos de uso o sus tratos con el Sitio, cont??ctenos a trav??s de nuestro chat de <a href="http://api.whatsapp.com/send?phone=3052947688">[whatsapp]</a></li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>


    </Box>

    <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
        Privacidad   
      </Typography></Box>

    <Box>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Introducci??n</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>El objetivo de estas pol??ticas de privacidad es informarle qu?? informaci??n recopilamos y por qu?? motivo.
                Reglamento General de Protecci??n de Datos de la Uni??n Europea No. 2016/679 (Ley: 25 de mayo de 2018).</p>
                <strong>Online Construction</strong> no registra ninguna informaci??n personal, excepto las direcciones de correo electr??nico y las direcciones IP.
                <strong>Online Construction</strong> solo usa las direcciones de correo electr??nico y las direcciones IP en los siguientes casos;
            
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Correos electr??nicos</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Utilizados para identificar la cuenta del comprador y usarla en nuestros servicios.</p>
            <ul className={classes.ulClass}>
                <li>Cambiar su contrase??a a su cuenta.</li>
                <li>Cambiar su direcci??n de correo electr??nico.</li>
                <li>Para poder enviar boletines y promociones desde <strong>Online Construction</strong>.</li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Direcciones IP</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Se utiliza para identificar la conexi??n de los jugadores a nuestros servicios y verificarlos.</p>
            <ul className={classes.ulClass}>
                <li>Permite a los administradores ver su historial de conexi??nes que se han conectado a su cuenta. La funci??n se utiliza para detectar actividades inusuales o sospechosas por parte del jugador o equipo.</li>
                <li>Mientras procesa una conexi??n a <strong>Online Construction</strong>, la direcci??n IP es escaneada por diferentes firewalls.</li>
                <li>Permite que <strong>Online Construction</strong> filtre y bloquee las conexiones. Una direcci??n IP se bloquea cuando pertenece a una persona que la Administraci??n o el sistema autom??tico de <strong>Online Construction</strong> considera maliciosa.</li>
                <li>Como parte del proceso de recuperaci??n de la cuenta, la direcci??n IP de la cuenta se puede solicitar al usuario para verificar la autenticidad de la solicitud.</li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Programa de mercadeo</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Como parte del programa de marketing, Online Construction puede enviar correos electr??nicos a direcciones fuera de su base de datos. Estas direcciones nunca se guardan m??s de 24 horas y se pueden dar a trav??s de un programa "recluta a tu amigo" u otros jugadores que invitan a amigos a trav??s de correos electr??nicos.</p>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Proveedores</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Algunos de nuestros proveedores tienen acceso parcial o total a esta informaci??n para sus servicios.</p>
            <ul className={classes.ulClass}>
                <li>Daviplata (https://daviplata.com/):</li>
                <li>Mantiene tus datos totalmente seguros, con prop??sitos mayormente de anti-fraude.</li>
                <li>Bancolombia (https://www.bancolombia.com/):</li>
                <li>Registra direcciones IP al acceder a la web de <strong>Online Construction</strong>, con el f??n de proveer seguridad a nuestros servicios.</li>
            </ul>          
            </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Informaci??n</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            El equipo <strong>Online Construction</strong> es el ??nico propietario de la informaci??n anterior y solo los miembros calificados del equipo <strong>Online Construction</strong> pueden verla. El equipo de <strong>Online Construction</strong> consulta solo esta informaci??n para obtener asistencia o asistencia t??cnica. La informaci??n de un usuario puede ser destruida despu??s de 3 a??os de inactividad. 
            Un usuario puede elegir en cualquier momento desactivar su cuenta, en cuyo caso se debe contactar con un administrador. La informaci??n ser?? destruida despu??s de un per??odo de 14 d??as. Esta desactivaci??n se cancela si la cuenta se vuelve a utilizar durante este tiempo.
            </Typography>
        </AccordionDetails>
        </Accordion>
    </div>
    </Box>

    <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
        Pagos   
      </Typography></Box>                   
    <Box>
    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Pagos</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>
            El reembolso de una compra en Online Construction es posible, pero puede conllevar a una suspensi??n de cuenta indefinida si es que no se conversa con el soporte antes de realizarla.
            El fin de las compras de productos es para mantener los gastos del empresa como tal para as?? poder brindarle lo mejor al usuario y que pueda ser m??s util cada d??a nuestra comapa??ia.
            </p>            
            </Typography>
        </AccordionDetails>
        </Accordion>
    </div>
    </Box>
            </Grid>
        </Grid>
            
              
        </Container>
      </Box>
    </>
  );
};

export default Politics;