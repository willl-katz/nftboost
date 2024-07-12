import ContainerGrid from "../container";
import TitleSection from "../title-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const questions = [
    {
        question: 'O que são NFTs?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio fugit mollitia corporis eaque fugiat illo quidem esse deleniti modi aut cum, maiores hic ipsa totam quam commodi. Excepturi, earum!'
    },
    {
        question: 'Como funciona a compra de NFTs em seu site?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio fugit mollitia corporis eaque fugiat illo quidem esse deleniti modi aut cum, maiores hic ipsa totam quam commodi. Excepturi, earum!'
    },
    {
        question: 'Como posso vender meus próprios NFTs?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio fugit mollitia corporis eaque fugiat illo quidem esse deleniti modi aut cum, maiores hic ipsa totam quam commodi. Excepturi, earum!'
    },
    {
        question: 'Os NFTs são seguros e autênticos?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio fugit mollitia corporis eaque fugiat illo quidem esse deleniti modi aut cum, maiores hic ipsa totam quam commodi. Excepturi, earum!'
    },
    {
        question: 'Quais são as taxas envolvidas na compra e venda de NFTs em seu site?',
        response: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio fugit mollitia corporis eaque fugiat illo quidem esse deleniti modi aut cum, maiores hic ipsa totam quam commodi. Excepturi, earum!'
    },
]

export default function SectionQuestions() {
    return (
        <section>
            <ContainerGrid>
                <TitleSection
                    subtitle="Desvendando os Mistérios dos NFTs"
                    title="Perguntas frequentes"
                />
                <Accordion type="single">
                    {
                        questions.map(({question, response}, i) => (
                            <AccordionItem value={"item-" + i} key={i}>
                                <AccordionTrigger>{question}</AccordionTrigger>
                                <AccordionContent>
                                    {response}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </ContainerGrid>
        </section>
    );
}