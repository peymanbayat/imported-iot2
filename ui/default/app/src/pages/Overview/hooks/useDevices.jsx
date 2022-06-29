import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'

const DEVICES_QUERY = gql`
  query Query {
    devices {
      device_id
      auto_name
      ip
      mac
      outbound_byte_count
    }
  }
`

const useDevices = () => {
  const [devicesData, setDevicesData] = useState([])
  const [filters, setFilters] = useState({})

  const { data, loading: devicesDataLoading } = useQuery(DEVICES_QUERY, {
    // pollInterval: 5000,
  })

  useEffect(() => {
    if (data?.devices) {
      let d = data.devices  // TODO: preset filters, filter here https://github.com/ocupop/iot-inspector-client/issues/18

      if (filters?.sort) {
        console.log('TODO: SORT')
        /*
        d = d.slice().sort((a, b) => {
          if (filters.sort.direction === 'DESC') {
            if (a[filters.sort.by] > b[filters.sort.by]) {
              console.log('@DEBUG::06232022-015741')
              return -1
            }

            if (a[filters.sort.by] > b[filters.sort.by]) {
              console.log('@DEBUG::06232022-015741')
              return 1
            }
          }

          if (a[filters.sort.by] > b[filters.sort.by]) {
            console.log('@DEBUG::06232022-015741')
            return 1
          }
          if (a[filters.sort.by] > b[filters.sort.by]) {
            console.log('@DEBUG::06232022-015741')
            return -1
          }
          return 0
        })
      }

      console.group()
      for (const x of d) {
        console.log(x.auto_name, x.outbound_byte_count)
      }
      console.groupEnd()
      */
    }

      setDevicesData(d)
    }
  }, [data?.devices, filters])

  const sortDevicesData = (sortBy, direction = 'ASC') => {
    setFilters({
      sort: {
        by: sortBy,
        direction,
      },
    })
  }

  return {
    devicesData,
    devicesDataLoading,
    sortDevicesData,
  }
}

export default useDevices