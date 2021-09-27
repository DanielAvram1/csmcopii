import Accordion from "../components/accordion"
import AccordionItem from "../components/accordionItem"
import ContentWithSideBar from "../components/contentWithSideBar"
import Header from "../components/header"
import placeholderPdf from '../assets/pdfs/placeholder.pdf'
import Iframe from "react-iframe"
import headerBackground from '../assets/images/backgrounds/transparency.jpg'

const Transparenta = () => {
    return (
        <div className='container'>
            <Header
                title='Transparenta'
                description='descriere transparenta'
                textColor='white'
                backgroundImage={headerBackground}
            />
            <ContentWithSideBar>
                <Accordion>
                    <AccordionItem
                        title='Organigrama'
                    >
                        <iframe
                            src={placeholderPdf}
                            width='100%'
                            height='500px'
                        ></iframe>
                    </AccordionItem>
                    <AccordionItem
                        title='Certificat de acreditare'
                    >
                        <iframe
                            src={placeholderPdf}
                            width='100%'
                            height='500px'
                        ></iframe>
                    </AccordionItem>
                    <AccordionItem
                        title='Cadrul normativ'
                    >   
                        <Accordion>
                            <AccordionItem
                                title='Legea'
                            >
                                <iframe
                                    src={placeholderPdf}
                                    width='100%'
                                    height='500px'
                                ></iframe>
                            </AccordionItem>
                            <AccordionItem
                                title='HG'
                            >
                                <iframe
                                    src={placeholderPdf}
                                    width='100%'
                                    height='500px'
                                ></iframe>
                            </AccordionItem>
                            <AccordionItem
                                title='Ordine'
                            >
                                <iframe
                                    src={placeholderPdf}
                                    width='100%'
                                    height='500px'
                                ></iframe>
                            </AccordionItem>
                        </Accordion>


                    </AccordionItem>
                    <AccordionItem
                        title='Declaratia de buna guvernare'
                    >   
                        <Accordion>
                            <AccordionItem
                                title='2019'
                            >
                                <iframe
                                    src={placeholderPdf}
                                    width='100%'
                                    height='500px'
                                ></iframe>
                            </AccordionItem>
                            <AccordionItem
                                title='2020'
                            >
                                <iframe
                                    src={placeholderPdf}
                                    width='100%'
                                    height='500px'
                                ></iframe>
                            </AccordionItem>
                        </Accordion>
                    </AccordionItem>
                    <AccordionItem
                        title='Contract CNAM'
                    >   
                        <Accordion>
                            <AccordionItem
                                title='2019'
                            >
                                <iframe
                                    src={placeholderPdf}
                                    width='100%'
                                    height='500px'
                                ></iframe>
                            </AccordionItem>
                            <AccordionItem
                                title='2020'
                            >
                                <iframe
                                    src={placeholderPdf}
                                    width='100%'
                                    height='500px'
                                ></iframe>
                            </AccordionItem>
                            <AccordionItem
                                title='2021'
                            >
                                <iframe
                                    src={placeholderPdf}
                                    width='100%'
                                    height='500px'
                                ></iframe>
                            </AccordionItem>
                        </Accordion>
                    </AccordionItem>
                    <AccordionItem
                        title='Achizitii'
                    >   
                        <Accordion>
                            <AccordionItem
                                title='Plan achizitii'
                            >
                                <Accordion>
                                    <AccordionItem
                                        title='2019'
                                    >
                                        <iframe
                                            src={placeholderPdf}
                                            width='100%'
                                            height='500px'
                                        ></iframe>
                                    </AccordionItem>
                                    <AccordionItem
                                        title='2020'
                                    >
                                        <iframe
                                            src={placeholderPdf}
                                            width='100%'
                                            height='500px'
                                        ></iframe>
                                    </AccordionItem>
                                    <AccordionItem
                                        title='2021'
                                    >
                                        <iframe
                                            src={placeholderPdf}
                                            width='100%'
                                            height='500px'
                                        ></iframe>
                                    </AccordionItem>
                                </Accordion>
                            </AccordionItem>
                            <AccordionItem
                                title='Monitorizarea'
                            >
                                <Accordion>
                                    <AccordionItem
                                        title='2020'
                                    >
                                        <iframe
                                            src={placeholderPdf}
                                            width='100%'
                                            height='500px'
                                        ></iframe>
                                    </AccordionItem>
                                </Accordion>
                            </AccordionItem>
                            <AccordionItem
                                title='Darea de seama achizitii'
                            >
                                <Accordion>
                                    <AccordionItem
                                        title='2019'
                                    >
                                        <iframe
                                            src={placeholderPdf}
                                            width='100%'
                                            height='500px'
                                        ></iframe>
                                    </AccordionItem>
                                    <AccordionItem
                                        title='2020'
                                    >
                                        <iframe
                                            src={placeholderPdf}
                                            width='100%'
                                            height='500px'
                                        ></iframe>
                                    </AccordionItem>
                                </Accordion>
                            </AccordionItem>
                        </Accordion>
                    </AccordionItem>
                </Accordion>
            </ContentWithSideBar>
        </div>
    )
}

export default Transparenta