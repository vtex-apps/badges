import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo'
import { ConditionLayoutProduct } from 'vtex.condition-layout'
import { useCssHandles } from 'vtex.css-handles'

import { conditionsPropsFunction, getWhere } from './utils/conditionsProps'
import searchMasterdata from './queries/searchMasterdata.gql'

const CSS_HANDLES = ['allBadgesContainer', 'badgeContainer', 'badges'] as const

const BadgesStore: StorefrontFunctionComponent = (props: PropsStore) => {
  const { handles, withModifiers } = useCssHandles(CSS_HANDLES)

  const where = getWhere(props)

  const pageSize = props.numberOfBadges ? props.numberOfBadges : 1

  const { data } = useQuery<BadgesData>(searchMasterdata, {
    variables: { where, pageSize },
  })

  const conditionsProps = useMemo(() => {
    if (data !== undefined) return data?.searchMasterdata?.data

    return []
  }, [data])

  const conditionsPropsValues = conditionsPropsFunction(
    props,
    handles,
    withModifiers,
    conditionsProps
  )

  return (
    <div className={handles.allBadgesContainer}>
      {conditionsPropsValues.map((element: any) => {
        return <ConditionLayoutProduct {...element} />
      })}
    </div>
  )
}

export default BadgesStore
