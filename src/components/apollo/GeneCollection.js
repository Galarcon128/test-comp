import { gql } from 'apollo-boost';

// Gene Info

export default class Gene {
  constructor(id) {
    this.advancedSearch = `${id}[geneInfo.id]`
    this.query = GENE_INFO
    this.tipQuery = GENE_TOOLTIP
  }
}

const GENE_TOOLTIP = gql`
query getGeneInfo($advancedSearch: String!){
  getGenesBy(limit:10 page: 0 advancedSearch:$advancedSearch)
    {
      data{
        geneInfo{
          id
          name
          leftEndPosition
          rightEndPosition
          strand
        }
        products{
          name
        }
      }
    }
  
  }
`

const GENE_INFO = gql`
query getGeneInfo($advancedSearch: String!){
  getGenesBy(limit:1 page: 0 advancedSearch:$advancedSearch)
    {
      data{
        geneInfo{
          id
          name
          synonyms
          leftEndPosition
          rightEndPosition
          centisomePosition
          strand
          sequence
          gcContent
          note
          type
        }
        products{
          name
        }
      }
    }
  
  }
`

// Search Gene

export class SearchGene {
  constructor(searchTerm,limit=50,page=0) {
    this.searchTerm = searchTerm
    this.query = gql`
query SearchGenes($search: String!){
    getGenesBy(limit:${limit} page:${page} search:$search)
    {
      data {
      geneInfo {
          id
          name
          leftEndPosition
          rightEndPosition
          strand
          synonyms
          note   
        }
        products{
          name
          regulatorId
        }
    }
    pagination{
      totalResults
    }
    }
  }
`
  }
}

//Gene Products Info

export class GeneProducts {
  constructor(idGene) {
    this.advancedSearch = `${idGene}[geneInfo.id]`
    this.query = GENE_PRODUCTS
  }
}
const GENE_PRODUCTS = gql`
query getGeneProducts($advancedSearch: String!) {
  getGenesBy(limit: 1, page: 0, advancedSearch: $advancedSearch) {
    data {
      products {
        name
        synonyms
        regulatorId
        sequence
        isoelectricPoint
        molecularWeight
        cellularLocation
        anticodon
        note
        type
        motifs {
          leftEndPosition
          rightEndPosition
          sequence
          description
          type
          note
        }
        externalCrossReferences {
          id
          name
          url
        }
        evidenceReferences {
          evidenceName
          evidenceCode
          evidenceType
          referenceId
          referenceURL
          referenceCitation
        }
      }
    }
  }
}
`