import React from 'react'
import { index as RichText } from 'vtex.rich-text'
import { Image } from 'vtex.store-image'
import { useProduct } from 'vtex.product-context'

export const conditionsPropsFunction = (
  props: PropsStore,
  handles: HandlesType,
  withModifiers: any,
  conditionsProps: any
) => {
  const conditionsMap = conditionsProps.map((element: BadgesDataValues) => {
    return conditionsPropsValues(element, props, handles, withModifiers)
  })

  return conditionsMap
}

function conditionsPropsValues(
  data: BadgesDataValues,
  props: PropsStore,
  handles: HandlesType,
  withModifiers: any
) {
  const values = {
    conditions: conditionsFunction(data?.simpleStatements),
    matchType: data?.operator,
    Then: () => {
      const classes = withModifiers('badges', data?.type)

      const allClasses = `${handles.badgeContainer} ${classes}`

      return (
        <span className={allClasses} style={{ maxWidth: '50px' }}>
          {decisionBetweenTextImageHtml(data, props)}
        </span>
      )
    },
  }

  return values
}

function decisionBetweenTextImageHtml(
  data: BadgesDataValues,
  props: PropsStore
) {
  if (data?.type === 'text') {
    return <RichText {...props.text} text={data?.content} />
  }

  if (data?.type === 'html') {
    return <div dangerouslySetInnerHTML={createMarkup(data?.content)} />
  }

  return <Image {...props.image} src={data?.content} />
}

function createMarkup(content: any) {
  return { __html: content }
}

function conditionsFunction(
  data: Array<{
    subject: any
    object: { id: string; name: string; value: string }
    verb: string
  }>
) {
  const value: Array<{
    subject: string
    arguments: { id?: string; name?: string; value?: string }
    toBe: boolean
  }> = []

  data.forEach(element => {
    if (element.object.id !== null && element.object.id !== 'null') {
      const rule = {
        subject:
          element.subject !== 'categoryId'
            ? `${element.subject}`
            : 'categoryTree',
        arguments: {
          id: element.object.id,
        },
        toBe: element.verb === '=',
      }

      value.push(rule)
    } else {
      const rule = {
        subject: `${element.subject}`,
        arguments: {
          name: element.object.name,
          value: element.object.value,
        },
        toBe: element.verb === '=',
      }

      value.push(rule)
    }
  })

  return value
}

export function getWhere(props: PropsStore) {
  if (props?.productQuery) {
    const { product } = props?.productQuery
    const { selectedItem } = useProduct() ?? {}

    if (!selectedItem) {
      return ''
    }

    let where =
      `(simpleStatements.subject=brandId AND simpleStatements.object.id="${product.brandId}") OR ` +
      `(simpleStatements.subject=selectedItemId AND simpleStatements.object.id="${selectedItem.itemId}") OR ` +
      `(simpleStatements.subject=productId AND simpleStatements.object.id="${product.productId}") `

    product.productClusters.forEach((element: { id: string }) => {
      where += `OR (simpleStatements.subject=productClusters AND simpleStatements.object.id="${element.id}")`
    })

    product?.categoryTree?.forEach((element: { id: string }) => {
      where += `OR (simpleStatements.subject=categoryId AND simpleStatements.object.id="${element.id}")`
    })

    product.properties.forEach(
      (element: { name: string; values: string[] }) => {
        where += `OR (simpleStatements.subject=specificationProperties AND simpleStatements.object.name="${element.name}" AND simpleStatements.object.value="${element.values[0]}") `
      }
    )

    return where
  }

  return ''
}
