import React from 'react';
import GeneDescription from '../../components/geneDescription/GeneDescription'

const ResultsGene = ({
    search,
    data
}) => {
    console.log(data)
    try {
        return (
            <div style={{ width: "80%", height: "100%" }}>
                <table >
                    <thead>
                        <tr>
                            <th colSpan={2}> Genes </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((gen) => {
                            const gene = gen.geneInfo
                            const prod = gen.products
                            let products = ""
                            products += prod.map((product) => {
                                return (
                                    `${product.name}, `
                                )
                            })
                            let text = " "
                            if (gene.synonyms.length > 0) {
                                text += `synonyms: ${gene.synonyms}; `
                            }

                            if (prod.length > 0) {
                                text += `products: ${products}`
                            }
                            //console.log(text)
                            return (

                                <tr key={gene.id} className="trClickable">
                                    <td>
                                        <GeneDescription
                                            name={gene.name}
                                            product={products}
                                            pLeft={gene.leftEndPosition}
                                            pRight={gene.rightEndPosition}
                                            strand={gene.strand}
                                        />
                                    </td>
                                    <td dangerouslySetInnerHTML={{ __html: text }}></td>
                                </tr>

                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        )
    } catch (error) {
        console.log(error)
        return <>data error</>
    }


}

export default ResultsGene;