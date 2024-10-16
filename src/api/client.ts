import axios from "axios"

import { QueryParam } from "./types"

const BASEURL = "http://127.0.0.1:5000"

export async function getTable(
  tableName: string,
  queryParams: QueryParam[] | null = null
) {
  const endpoint = buildEndpointURL(
    `${BASEURL}/table/${tableName}`,
    queryParams
  )
  const response = await axios.get(endpoint)
  return response.data
}

export async function getTableColumn(
  columnName: string,
  queryParams: QueryParam[] | null = null
) {
  const endpoint = buildEndpointURL(
    `${BASEURL}/column/${columnName}`,
    queryParams
  )
  const response = await axios.get(endpoint)
  return response.data
}

export async function getData(queryParams: QueryParam[] | null = null) {
  const endpoint = buildEndpointURL(`${BASEURL}/data`, queryParams)
  const response = await axios.get(endpoint)
  return response.data
}

export async function getDataColumn(
  columnName: string,
  queryParams: QueryParam[] | null = null
) {
  const endpoint = buildEndpointURL(
    `${BASEURL}/data/${columnName}`,
    queryParams
  )
  const response = await axios.get(endpoint)
  return response.data
}

function buildEndpointURL(
  endpoint: string,
  queryParams: QueryParam[] | null
): string {
  if (queryParams != null) {
    endpoint += `?params=${toQueryString(queryParams)}`
  }
  return endpoint
}

function toQueryString(paramsList: QueryParam[]): string {
  const queryList: string[] = []
  paramsList.forEach((param) => {
    if (param?.value) {
      queryList.push(
        `${param.table}_${param.column}=${toValueString(param.value)}`
      )
    }
  })

  const queryString = queryList
    .join("%26%26")
    .replace(/ /g, "%20")
    .replace(/&/g, "%26")
  return queryString
}

function toValueString(value: [] | string): string {
  let valueString = Array.isArray(value) ? `[${value}]` : `${value}`
  valueString = valueString.replace(/^undefined_/g, "")
  return valueString
}
