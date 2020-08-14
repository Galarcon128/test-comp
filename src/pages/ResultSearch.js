import React, { useState } from 'react';
import {SearchGene} from '../components/apollo/GeneCollection';
import { useQuery } from '@apollo/react-hooks';
import Gene from './tabs/Genes'

const ResultSearch = ({
    search = "ara"
}) => {
    const [limit] = useState(10)
    const [page] = useState(0)
    let searchGene = new SearchGene(search, limit, page)
    const { data, loading, error } = useQuery(searchGene.query, {
        variables: { search }
    })
    if(loading){
        return <>Loading...</>
    }
    if(error){
        console.log(error)
        return <>Server error</>
    }
    try {
        const nResults = data.getGenesBy.pagination.totalResults
        if(nResults>0){
            return(
                <Gene data={data.getGenesBy.data} search={search} />
            )
        }else{
            return <>no results</>
        }
    } catch (error) {
        
    }

    return ( 
        <></>
     );
}
 
export default ResultSearch;