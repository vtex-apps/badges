import React, { useMemo } from 'react'
import { useQuery } from 'react-apollo'
import { ConditionLayoutProduct } from 'vtex.condition-layout'
import { useCssHandles } from 'vtex.css-handles'

import { conditionsPropsFunction } from './utils/conditionsProps'
import searchMasterdata from './queries/searchMasterdata.gql'

const CSS_HANDLES = ['allBadgesContainer', 'badgeContainer', 'badges'] as const

const BadgesStore: StorefrontFunctionComponent = (props: any) => {
  const { handles, withModifiers } = useCssHandles(CSS_HANDLES)

  const { data } = useQuery<BadgesData>(searchMasterdata)

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
