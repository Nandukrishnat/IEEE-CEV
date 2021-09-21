import Layout from "../../layouts/MainLayout"
import React from 'react'
import ExecomList from "../../components/ExecomList"
import { graphql } from "gatsby"

export default function execom2020({data}) {
  return (
    <Layout>
      <div className="banner">Execom 2020-21</div>
      <ExecomList title="SB Core" data={data.execomJson.execom2020_21.core} />
      <ExecomList title="CS Execom" data={data.execomJson.execom2020_21.cs} />
      <ExecomList title="PES Execom" data={data.execomJson.execom2020_21.pes} />
      <ExecomList title="Wie Execom" data={data.execomJson.execom2020_21.wie} />
    </Layout>
  )
}

export const query = graphql`
query Execom {
  execomJson {
    execom2020_21 {
      core {
        id
        name
        position
      }
      cs {
        id
        name
        position
      }
      pes {
        id
        name
        position
      }
      wie {
        id
        name
        position
      }
    }
  }
}
`
